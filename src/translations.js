const { encodeHTML } = require("./common/utils");

const statCardLocales = ({ name, apostrophe }) => {
  return {
    "statcard.title": {
      cn: `${encodeHTML(name)} 的 GitHub 统计`,
      de: `${encodeHTML(name) + apostrophe} GitHub-Statistiken`,
      en: `${encodeHTML(name)}'${apostrophe} GitHub Stats`,
      es: `Estadísticas de GitHub de ${encodeHTML(name)}`,
      fr: `Statistiques GitHub de ${encodeHTML(name)}`,
      it: `Statistiche GitHub di ${encodeHTML(name)}`,
      ja: `${encodeHTML(name)}の GitHub 統計`,
      kr: `${encodeHTML(name)}의 GitHub 통계`,
      "pt-br": `Estatísticas do GitHub de ${encodeHTML(name)}`,
      np: `${encodeHTML(name)}'${apostrophe} गिटहब तथ्याङ्क`,
    },
    "statcard.totalstars": {
      cn: "总 Star",
      de: "Sterne Insgesamt",
      en: "Total Stars",
      es: "Estrellas totales",
      fr: "Total d'étoiles",
      it: "Stelle totali",
      ja: "スターされた数",
      kr: "총 별",
      "pt-br": "Total de estrelas",
      np: "कुल ताराहरू",
    },
    "statcard.commits": {
      cn: "总提交",
      de: "Anzahl Commits",
      en: "Total Commits",
      es: "Compromisos totales",
      fr: "Total des engagements",
      it: "Commit totali",
      ja: "合計コミット数",
      kr: "총 커밋",
      "pt-br": "Total de compromissos",
      np: "कुल Commits",
    },
    "statcard.prs": {
      cn: "总 PR",
      de: "PRs Insgesamt",
      en: "Total PRs",
      es: "RP totales",
      fr: "Total des PR",
      it: "PR totali",
      ja: "合計 PR",
      kr: "총 PR",
      "pt-br": "Total de PRs",
      np: "कुल PRs",
    },
    "statcard.issues": {
      cn: "总 Issue",
      de: "Anzahl Issues",
      en: "Total Issues",
      es: "Problemas totales",
      fr: "Nombre total de problèmes",
      it: "Segnalazioni totali",
      ja: "合計 issue",
      kr: "총 문제",
      "pt-br": "Total de problemas",
      np: "कुल मुद्दाहरू",
    },
    "statcard.contribs": {
      cn: "总贡献",
      de: "Beigetragen zu",
      en: "Contributed to",
      es: "Contribuido a",
      fr: "Contribué à",
      it: "Ha contribuito a",
      ja: "コントリビュートしたリポジトリ",
      kr: "에 기여하다",
      "pt-br": "Contribuiu para",
      np: "कुल योगदानहरू",
    },
  };
};

const repoCardLocales = {
  "repocard.template": {
    cn: "模板",
    de: "Vorlage",
    en: "Template",
    es: "Modelo",
    fr: "Modèle",
    it: "Template",
    ja: "テンプレート",
    kr: "주형",
    "pt-br": "Modelo",
    np: "टेम्पलेट",
  },
  "repocard.archived": {
    cn: "已归档",
    de: "Archiviert",
    en: "Archived",
    es: "Archivé",
    fr: "Archivé",
    it: "Archiviata",
    ja: "アーカイブ済み",
    kr: "보관 됨",
    "pt-br": "Arquivada",
    np: "अभिलेख राखियो",
  },
};

const langCardLocales = {
  "langcard.title": {
    cn: "最常用的语言",
    de: "Meist verwendete Sprachen",
    en: "Most Used Languages",
    es: "Idiomas más usados",
    fr: "Langues les plus utilisées",
    it: "Linguaggi più utilizzati",
    ja: "最もよく使っている言語",
    kr: "가장 많이 사용되는 언어",
    "pt-br": "Línguas Mais Usadas",
    np: "अधिक प्रयोग गरिएको भाषाहरू",
  },
};

const topicCardLocales = {
  "topiccard.title": {
    en: "Most Used Topics",
    ja: "最もよく使っているトピック",
  },
};

const wakatimeCardLocales = {
  "wakatimecard.title": {
    cn: "Wakatime 周统计",
    de: "Wakatime Wochen Status",
    en: "Wakatime Week Stats",
    es: "Estadísticas de la semana de Wakatime",
    fr: "Statistiques de la semaine Wakatime",
    it: "Statistiche della settimana di Wakatime",
    ja: "Wakatime ウィーク統計",
    kr: "Wakatime 주간 통계",
    "pt-br": "Estatísticas da semana Wakatime",
    np: "Wakatime हप्ता तथ्याङ्क",
  },
  "wakatimecard.nocodingactivity": {
    cn: "本周没有编程活动",
    de: "Keine Aktivitäten in dieser Woche",
    en: "No coding activity this week",
    es: "No hay actividad de codificación esta semana",
    fr: "Aucune activité de codage cette semaine",
    it: "Nessuna attività in questa settimana",
    ja: "今週のコーディング活動はありません",
    kr: "이번 주 코딩 활동 없음",
    "pt-br": "Nenhuma atividade de codificação esta semana",
    np: "यस हप्ता कुनै कोडिंग गतिविधि छैन",
  },
};

module.exports = {
  statCardLocales,
  repoCardLocales,
  langCardLocales,
  topicCardLocales,
  wakatimeCardLocales,
};
