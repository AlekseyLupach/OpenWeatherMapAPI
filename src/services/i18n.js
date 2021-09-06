import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { defaultLanguage, supportedLanguages } from "../config/i18n";
import translationEN from "../locales/en/translation.json";
import translationRU from "../locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: supportedLanguages.map((lang) => lang.code),

    nonExplicitSupportedLngs: true,

    fallbackLng: defaultLanguage,

    interpolation: {
      escapeValue: false,
    },

    debug: process.env.NODE_ENV === "development",
  });

export default i18next;

export function languageCodeOnly(fullyQualifiedCode) {
  return fullyQualifiedCode.split("-")[0];
}
