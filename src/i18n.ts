import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../public/locales/en/common.json";
import es from "../public/locales/es/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es"],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["navigator"],
    },
    debug: false,

    // Synchronous init so the language is resolved before React's first render.
    initImmediate: false,
  });

export default i18n;
