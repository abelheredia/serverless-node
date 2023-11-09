const i18next = require("i18next");

i18next.init({
  lng: "es",
  fallbackLng: "es",
  resources: {
    en: {
      translation: require("../i18n/en.json"),
    },
    es: {
      translation: require("../i18n/es.json"),
    },
  },
});

module.exports = i18next;
