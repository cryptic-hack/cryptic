import "@testing-library/jest-dom";
import renderToString from "preact-render-to-string";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import pin from "../../api/pin";
import repoCard from "../../src/components/repoCard";
import { renderError } from "../../src/utils";

const data_repo = {
  repository: {
    username: "anuraghazra",
    name: "convoychat",
    stargazers: { totalCount: 38000 },
    description: "Help us take over the world! React + TS + GraphQL Chat App",
    primaryLanguage: {
      color: "#2b7489",
      id: "MDg6TGFuZ3VhZ2UyODc=",
      name: "TypeScript",
    },
    forkCount: 100,
    isTemplate: false,
  },
};

const data_user = {
  data: {
    user: { repository: data_repo.repository },
    organization: null,
  },
};

const mock = new MockAdapter(axios);

afterEach(() => {
  mock.reset();
});

describe("Test /api/pin", () => {
  it("should test the request", async () => {
    const req = {
      query: {
        username: "anuraghazra",
        repo: "convoychat",
      },
    };
    const res = {
      setHeader: jest.fn(),
      send: jest.fn(),
    };
    mock.onPost("https://api.github.com/graphql").reply(200, data_user);

    await pin(req, res);

    expect(res.setHeader).toBeCalledWith("Content-Type", "image/svg+xml");
    expect(res.send).toBeCalledWith(
      renderToString(repoCard(data_repo.repository))
    );
  });

  it("should get the query options", async () => {
    const req = {
      query: {
        username: "anuraghazra",
        repo: "convoychat",
        title_color: "fff",
        icon_color: "fff",
        text_color: "fff",
        bg_color: "fff",
        full_name: "1",
      },
    };
    const res = {
      setHeader: jest.fn(),
      send: jest.fn(),
    };
    mock.onPost("https://api.github.com/graphql").reply(200, data_user);

    await pin(req, res);

    expect(res.setHeader).toBeCalledWith("Content-Type", "image/svg+xml");
    expect(res.send).toBeCalledWith(
      renderToString(repoCard(data_repo.repository, { ...req.query }))
    );
  });

  it("should render error card if user repo not found", async () => {
    const req = {
      query: {
        username: "anuraghazra",
        repo: "convoychat",
      },
    };
    const res = {
      setHeader: jest.fn(),
      send: jest.fn(),
    };
    mock
      .onPost("https://api.github.com/graphql")
      .reply(200, { data: { user: { repository: null }, organization: null } });

    await pin(req, res);

    expect(res.setHeader).toBeCalledWith("Content-Type", "image/svg+xml");
    expect(res.send).toBeCalledWith(
      renderToString(renderError("User Repository Not found"))
    );
  });

  it("should render error card if org repo not found", async () => {
    const req = {
      query: {
        username: "anuraghazra",
        repo: "convoychat",
      },
    };
    const res = {
      setHeader: jest.fn(),
      send: jest.fn(),
    };
    mock
      .onPost("https://api.github.com/graphql")
      .reply(200, { data: { user: null, organization: { repository: null } } });

    await pin(req, res);

    expect(res.setHeader).toBeCalledWith("Content-Type", "image/svg+xml");
    expect(res.send).toBeCalledWith(
      renderToString(renderError("Organization Repository Not found"))
    );
  });
});
