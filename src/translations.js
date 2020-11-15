const { encodeHTML } = require("./common/utils");

const statCardLocales = ({ name, apostrophe }) => {
  return {
    "statcard.title": {
      cn: `${encodeHTML(name)} 的 GitHub 统计`,
      de: `${encodeHTML(name) + apostrophe} GitHub-Statistiken`,
      en: `${encodeHTML(name)}'${apostrophe} GitHub Stats`,
      es: `Estadísticas de GitHub de ${encodeHTML(name)}`,
      fr: `Statistiques GitHub de ${encodeHTML(name)}`,
      hu: `${encodeHTML(name)} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodeHTML(name)}`,
      ja: `${encodeHTML(name)}の GitHub 統計`,
      kr: `${encodeHTML(name)}의 GitHub 통계`,
      nl: `${encodeHTML(name)}'${apostrophe} GitHub Statistieken`,
      "pt-pt": `Estatísticas do GitHub de ${encodeHTML(name)}`,
      "pt-br": `Estatísticas do GitHub de ${encodeHTML(name)}`,
      np: `${encodeHTML(name)}'${apostrophe} गिटहब तथ्याङ्क`,
      el: `Στατιστικά GitHub του ${encodeHTML(name)}`,
      ru: `Статистика GitHub пользователя ${encodeHTML(name)}`,
      mg: `Statistika ny GitHub n'i ${encodeHTML(name)}`
    },
    "statcard.totalstars": {
      cn: "总 Star",
      de: "Sterne Insgesamt",
      en: "Total Stars",
      es: "Estrellas totales",
      fr: "Total d'étoiles",
      hu: "Csillagok",
      it: "Stelle totali",
      ja: "スターされた数",
      kr: "총 별",
      nl: "Totale Sterren",
      "pt-pt": "Total de estrelas",
      "pt-br": "Total de estrelas",
      np: "कुल ताराहरू",
      el: "Σύνολο Αστεριών",
      ru: "Всего звезд",
      mg: "Isa totalin'ny Kintana"
    },
    "statcard.commits": {
      cn: "总提交",
      de: "Anzahl Commits",
      en: "Total Commits",
      es: "Compromisos totales",
      fr: "Total des engagements",
      hu: "Összes commit",
      it: "Commit totali",
      ja: "合計コミット数",
      kr: "총 커밋",
      nl: "Totale Commits",
      "pt-pt": "Total de Commits",
      "pt-br": "Total de compromissos",
      np: "कुल Commits",
      el: "Σύνολο Commits",
      ru: "Всего коммитов",
      "mg" : "Isa totalin'ny asa natao"
    },
    "statcard.prs": {
      cn: "总 PR",
      de: "PRs Insgesamt",
      en: "Total PRs",
      es: "RP totales",
      fr: "Total des PR",
      hu: "Összes PR",
      it: "PR totali",
      ja: "合計 PR",
      kr: "총 PR",
      nl: "Totale PR's",
      "pt-pt": "Total de PRs",
      "pt-br": "Total de PRs",
      np: "कुल PRs",
      el: "Σύνολο PRs",
      ru: "Всего pull request`ов",
      mg: "Isa totalin'ny PR"
    },
    "statcard.issues": {
      cn: "总 Issue",
      de: "Anzahl Issues",
      en: "Total Issues",
      es: "Problemas totales",
      fr: "Nombre total de problèmes",
      hu: "Összes hibajegy",
      it: "Segnalazioni totali",
      ja: "合計 issue",
      kr: "총 문제",
      nl: "Totale Issues",
      "pt-pt": "Total de Issues",
      "pt-br": "Total de problemas",
      np: "कुल मुद्दाहरू",
      el: "Σύνολο Ζητημάτων",
      ru: "Всего issue",
      mg: "Isa totalin'ny Olana"
    },
    "statcard.contribs": {
      cn: "总贡献",
      de: "Beigetragen zu",
      en: "Contributed to",
      es: "Contribuido a",
      fr: "Contribué à",
      hu: "Hozzájárulások",
      it: "Ha contribuito a",
      ja: "コントリビュートしたリポジトリ",
      kr: "에 기여하다",
      nl: "Bijgedragen aan",
      "pt-pt": "Contribuiu em",
      "pt-br": "Contribuiu para",
      np: "कुल योगदानहरू",
      el: "Συνεισφέρθηκε σε",
      ru: "Внёс вклад в",
      mg: "Isan'ny fandraisana anjara"
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
    hu: "Sablon",
    it: "Template",
    ja: "テンプレート",
    kr: "주형",
    nl: "Sjabloon",
    "pt-pt": "Modelo",
    "pt-br": "Modelo",
    np: "टेम्पलेट",
    el: "Πρότυπο",
    ru: "Шаблон",
    mg : "Modely"
  },
  "repocard.archived": {
    cn: "已归档",
    de: "Archiviert",
    en: "Archived",
    es: "Archivé",
    fr: "Archivé",
    hu: "Archivált",
    it: "Archiviata",
    ja: "アーカイブ済み",
    kr: "보관 됨",
    nl: "Gearchiveerd",
    "pt-pt": "Arquivados",
    "pt-br": "Arquivada",
    np: "अभिलेख राखियो",
    el: "Αρχειοθετημένα",
    ru: "Архивирован",
    mg: "Notahirizina",
  },
};

const langCardLocales = {
  "langcard.title": {
    cn: "最常用的语言",
    de: "Meist verwendete Sprachen",
    en: "Most Used Languages",
    es: "Idiomas más usados",
    fr: "Langues les plus utilisées",
    hu: "Leggyakrabban használt nyelvek",
    it: "Linguaggi più utilizzati",
    ja: "最もよく使っている言語",
    kr: "가장 많이 사용되는 언어",
    nl: "Meest gebruikte talen",
    "pt-pt": "Idiomas mais usados",
    "pt-br": "Línguas Mais Usadas",
    np: "अधिक प्रयोग गरिएको भाषाहरू",
    el: "Οι περισσότερο χρησιμοποιούμενες γλώσσες",
    ru: "Наиболее часто используемые языки",
    mg: "Fiteny tena nampiasaina"
  },
};

const wakatimeCardLocales = {
  "wakatimecard.title": {
    cn: "Wakatime 周统计",
    de: "Wakatime Wochen Status",
    en: "Wakatime Week Stats",
    es: "Estadísticas de la semana de Wakatime",
    fr: "Statistiques de la semaine Wakatime",
    hu: "Wakatime heti statisztika",
    it: "Statistiche della settimana di Wakatime",
    ja: "Wakatime ウィーク統計",
    kr: "Wakatime 주간 통계",
    nl: "Wekelijkse Wakatime Status",
    "pt-pt": "Estatísticas semanais Wakatime",
    "pt-br": "Estatísticas da semana Wakatime",
    np: "Wakatime हप्ता तथ्याङ्क",
    el: "Εβδομαδιαία Στατιστικά από Wakatime",
    ru: "Статистика недели Wakatime",
    mg : "Statistikan'ny herinandro ny Wakatime"
  },
  "wakatimecard.nocodingactivity": {
    cn: "本周没有编程活动",
    de: "Keine Aktivitäten in dieser Woche",
    en: "No coding activity this week",
    es: "No hay actividad de codificación esta semana",
    fr: "Aucune activité de codage cette semaine",
    hu: "Nem volt aktivitás ezen a héten",
    it: "Nessuna attività in questa settimana",
    ja: "今週のコーディング活動はありません",
    kr: "이번 주 코딩 활동 없음",
    nl: "Geen coderings activiet deze week",
    "pt-pt": "Sem atividade esta semana",
    "pt-br": "Nenhuma atividade de codificação esta semana",
    np: "यस हप्ता कुनै कोडिंग गतिविधि छैन",
    el: "Δεν υπάρχει δραστηριότητα κώδικα γι' αυτή την εβδομάδα",
    ru: "На этой неделе не было акивности",
    mg: "Tisy ficodiavana natao tamnin'ity herinandro ity"
  },
};

const availableLocales = Object.keys(repoCardLocales["repocard.archived"]);

function isLocaleAvailable(locale) {
  return availableLocales.includes(locale.toLowerCase());
}

module.exports = {
  isLocaleAvailable,
  availableLocales,
  statCardLocales,
  repoCardLocales,
  langCardLocales,
  wakatimeCardLocales,
};
