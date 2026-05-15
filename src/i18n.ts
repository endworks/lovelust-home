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

    // Match the server's choice (middleware: ?lng → ll_lng cookie →
    // Accept-Language) before falling back to navigator, and write the
    // cookie on changeLanguage so the next SSR agrees. See failure mode #5.
    detection: {
      order: ["querystring", "cookie", "navigator"],
      lookupQuerystring: "lng",
      lookupCookie: "ll_lng",
      caches: ["cookie"],
      cookieMinutes: 60 * 24 * 365,
    },
    debug: false,

    // Synchronous init so the language is resolved before React's first render.
    initAsync: false,
  });

export default i18n;
