const { request, logger, testPrimaryLanguage, getPrimaryLangSlug } = require("./utils");
const retryer = require("./retryer");
const calculateRank = require("./calculateRank");
const githubUsernameRegex = require("github-username-regex");

require("dotenv").config();

const fetcher = (variables, token) => {
  return request(
    {
      query: `
      query userInfo($login: String!) {
        user(login: $login) {
          name
          login
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
          }
          repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
            totalCount
          }
          pullRequests(first: 1) {
            totalCount
          }
          issues(first: 1) {
            totalCount
          }
          followers {
            totalCount
          }
          repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {direction: DESC, field: STARGAZERS}) {
            totalCount
            nodes {
              stargazers {
                totalCount
              }  
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
      `,
      variables,
    },
    {
      Authorization: `bearer ${token}`,
    }
  );
};

// https://github.com/anuraghazra/github-readme-stats/issues/92#issuecomment-661026467
// https://github.com/anuraghazra/github-readme-stats/pull/211/
const totalCommitsFetcher = async (username) => {
  if (!githubUsernameRegex.test(username)) {
    logger.log("Invalid username");
    return 0;
  }

  // https://developer.github.com/v3/search/#search-commits
  const fetchTotalCommits = (variables, token) => {
    return axios({
      method: "get",
      url: `https://api.github.com/search/commits?q=author:${variables.login}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.cloak-preview",
        Authorization: `bearer ${token}`,
      },
    });
  };

  try {
    let res = await retryer(fetchTotalCommits, { login: username });
    if (res.data.total_count) {
      return res.data.total_count;
    }
  } catch (err) {
    logger.log(err);
    // just return 0 if there is something wrong so that
    // we don't break the whole app
    return 0;
  }
};

async function fetchStats(
  username,
  count_private = false,
  include_all_commits = false
) {
  if (!username) throw Error("Invalid username");

  const stats = {
    name: "",
    totalPRs: 0,
    totalCommits: 0,
    totalIssues: 0,
    totalStars: 0,
    contributedTo: 0,
    rank: { level: "C", score: 0 },
    primaryLanguages: [],
  };

  let res = await retryer(fetcher, { login: username });

  let experimental_totalCommits = 0;
  if (include_all_commits) {
    experimental_totalCommits = await totalCommitsFetcher(username);
  }
  
  if (res.data.errors) {
    logger.error(res.data.errors);
    throw Error(res.data.errors[0].message || "Could not fetch user");
  }

  const user = res.data.data.user;
  const contributionCount = user.contributionsCollection;

  stats.name = user.name || user.login;
  stats.totalIssues = user.issues.totalCount;

  stats.totalCommits =
    contributionCount.totalCommitContributions + experimental_totalCommits;

  if (count_private) {
    stats.totalCommits += contributionCount.restrictedContributionsCount;
  }

  stats.totalPRs = user.pullRequests.totalCount;
  stats.contributedTo = user.repositoriesContributedTo.totalCount;

  stats.totalStars = user.repositories.nodes.reduce((prev, curr) => {
    return prev + curr.stargazers.totalCount;
  }, 0);

  stats.primaryLanguages = Array.from([
    ...new Map([
      // ...testPrimaryLanguage  // comment out to check all primary language
      ...user.repositories.nodes // keep enable repository nodes during development/deplyment otherwise test will failed 
        .map((n) => n.primaryLanguage && n.primaryLanguage)
        .filter((n) => n)
        .map((n) => ({ ...n, name: getPrimaryLangSlug(n.name) }))
        .map((item) => [item["name"], item]),
    ]).values(),
  ]);
  
  stats.rank = calculateRank({
    totalCommits: stats.totalCommits,
    totalRepos: user.repositories.totalCount,
    followers: user.followers.totalCount,
    contributions: stats.contributedTo,
    stargazers: stats.totalStars,
    prs: stats.totalPRs,
    issues: stats.totalIssues,
  });

  return stats;
}

module.exports = fetchStats;
