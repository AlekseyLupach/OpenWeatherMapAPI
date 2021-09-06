import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
<<<<<<< HEAD
=======

>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
import { defaultLanguage, supportedLanguages } from "../config/i18n";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
<<<<<<< HEAD
=======

>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
    supportedLngs: supportedLanguages.map((lang) => lang.code),

    nonExplicitSupportedLngs: true,

    fallbackLng: defaultLanguage,

    interpolation: {
<<<<<<< HEAD
=======

>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
      escapeValue: false,
    },

    debug: process.env.NODE_ENV === "development",
  });

export default i18next;

export function languageCodeOnly(fullyQualifiedCode) {
  return fullyQualifiedCode.split("-")[0];
}
