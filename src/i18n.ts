import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Title: "LoveLust",
      Subtitle: "Sexual health",
      Description:
        "LoveLust lets you have track of your sexual encounters and the birth control methods, to ensure you have a healthy sexual life.",
      PrivacyPolicy: "Privacy policy",
      Support: "Support",
      AllRightsReserved: "All Rights Reserved",
      AvailableOnTestFlight: "Available on TestFlight",
      DownloadOnTheAppStore: "Download on the AppStore",
      GetItOnGooglePlay: "Get it on Google Play",
      Contact: "Contact Support",
      ContactDescription:
        "Welcome to the official support page for LoveLust. If you encounter any issues, have questions, or need assistance, we’re here to help. Please use the following resources to find the support you need:",
      EmailSupport: "Email Support",
      EmailSupportDescription:
        "For technical issues, feedback, or feature requests, send us an email at:",
      SocialMedia: "Social Media",
      SocialMediaDescription:
        "Stay connected with the latest updates, announcements, and news:",
      Email: "Email",
      Telegram: "Telegram",
      Issues: "Issues",
    },
  },
  es: {
    translation: {
      Title: "LoveLust",
      Subtitle: "Salud sexual",
      Description:
        "LoveLust le permite realizar un seguimiento de sus encuentros sexuales y los métodos anticonceptivos, para garantizar que tengas una vida sexual saludable.",
      PrivacyPolicy: "Política de privacidad",
      Support: "Soporte",
      AllRightsReserved: "Todos los derechos reservados",
      AvailableOnTestFlight: "Disponible en TestFlight",
      DownloadOnTheAppStore: "Consíguelo en el AppStore",
      GetItOnGooglePlay: "Disponible en Google Play",
      Contact: "Contacto con Soporte",
      ContactDescription:
        "Bienvenido a la página oficial de soporte de LoveLust. Si encuentras algún problema, tienes preguntas o necesitas ayuda, estamos aquí para asistirte. Utiliza los siguientes recursos para encontrar el soporte que necesitas:",
      EmailSupport: "Soporte por Correo Electrónico",
      EmailSupportDescription:
        "Para problemas técnicos, comentarios o solicitudes de funciones, envíanos un correo electrónico a:",
      SocialMedia: "Redes Sociales y Noticias",
      SocialMediaDescription:
        "Mantente al día con las últimas actualizaciones, anuncios y noticias:",
      Email: "Correo electrónico",
      Telegram: "Telegram",
      Issues: "Incidencias",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    //lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    supportedLngs: ["en", "es"],

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    debug: true,
  });

export default i18n;
