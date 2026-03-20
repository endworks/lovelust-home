import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      LoveLust: "LoveLust",
      Title: "LoveLust",
      Subtitle: "Sexual health",
      Description:
        "LoveLust lets you have track of your sexual encounters and the birth control methods, to ensure you have a healthy sexual life.",
      // Nav
      NavFeatures: "Features",
      NavPricing: "Pricing",
      DownloadApp: "Download Now",
      // Hero
      Tagline: "Love safely. Desire freely.",
      HeroTaglineMain: "Redefine your",
      HeroTaglineAccent: "intimate journey.",
      HeroDescription:
        "A private journal for your most personal moments. Secure, sophisticated, and designed to deepen your connection with yourself and others.",
      DownloadOnThe: "Download on the",
      GetItOn: "Get it on",
      PrivacyBadge: "Privacy first · No servers · AES-CFB",
      // Bento features
      CraftedForTrust: "Crafted for trust.",
      BentoPrivacyTitle: "Privacy first architecture.",
      BentoPrivacyDesc:
        "Your data is encrypted locally and never leaves your device without your explicit permission. We don't just protect your privacy; we prioritize it.",
      BentoOnboardingTitle: "Seamless onboarding.",
      BentoOnboardingDesc:
        "Start your journey in seconds. No unnecessary questions, just the essentials.",
      BentoStatsTitle: "Detailed statistics.",
      BentoStatsDesc:
        "Visualize patterns and gain insights into your wellness with elegant, editorial-style data charts.",
      BentoPremiumTitle: "Premium perks.",
      BentoPremiumDesc:
        "Unlock deeper insights, custom themes, and exclusive features curated for your growth.",
      // App preview
      ElegantByDesign: "Elegant by design.",
      ElegantByDesignDesc:
        "Experience an interface that feels like a high-end publication — quiet when you need focus, expressive when you seek insight.",
      // Values
      OurValues: "Our Values",
      OurValuesDesc: "The principles that guide every decision we make in building LoveLust.",
      Value1Title: "Radical Privacy",
      Value1Desc:
        "We believe your data belongs to you alone. No tracking, no cloud storage unless you choose it, and no compromises on your digital sovereignty.",
      Value2Title: "Human Intimacy",
      Value2Desc:
        "Technology should bridge gaps, not create them. We design features that foster genuine connection and mindful self-reflection.",
      Value3Title: "Ethical Design",
      Value3Desc:
        "Beauty and utility are not mutually exclusive. We create quiet, intentional experiences that respect your attention and time.",
      // Pricing
      InvestmentTitle: "Investment in you.",
      InvestmentDesc: "Simple, transparent pricing for a lifetime of value.",
      PricingFeatureTracking: "All tracking tools",
      PricingFeatureInsights: "Standard insights",
      PricingFeaturePrivacy: "Privacy sync",
      PricingFeatureStats: "Advanced statistics",
      PricingFeatureThemes: "Custom themes",
      PricingFeatureExport: "Data export",
      PricingFeatureUpdates: "All future updates",
      PricingFeatureVip: "Priority support",
      PricingFeatureOnce: "One-time payment",
      SelectPlan: "Select Plan",
      ThousandsOfUsers: "Thousands of happy users",
      // Testimonials
      TestimonialsTitle: "What our customers say",
      TestimonialsDesc: "Real reviews from real people who track their intimate health with LoveLust.",
      // Final CTA
      CtaTitle: "Start your transformation today.",
      CtaDescription:
        "Join thousands of others who have redefined their relationship with their own intimacy through mindful reflection.",
      // Survey CTA
      SurveyCtaTitle: "Help shape LoveLust",
      SurveyCtaIncentive: "Share your feedback and get 7 days premium free",
      SurveyCtaButton: "Take the survey",
      // Features
      FeaturesTitle: "Everything you need, nothing more",
      FeaturesSubtitle: "Designed around your privacy and your wellbeing.",
      Feature1Title: "Local privacy",
      Feature1Description:
        "Your sexual data never leaves your device. No servers, no cloud sync unless you choose it.",
      Feature2Title: "Detailed tracking",
      Feature2Description:
        "Log partners, practices, contraception, and feelings with precision.",
      Feature3Title: "Sexual health",
      Feature3Description:
        "Track STI tests, PrEP usage, and health appointments in one place.",
      Feature4Title: "Insights & statistics",
      Feature4Description:
        "Discover patterns in your sex life with beautiful, private charts.",
      Feature5Title: "Inclusive by design",
      Feature5Description:
        "Built for every orientation, gender identity, and relationship style.",
      Feature6Title: "Encrypted backup",
      Feature6Description:
        "Optional cloud backup, fully encrypted with AES-128/256-CFB. Only you hold the key.",
      // Privacy section
      PrivacySectionBadge: "Zero-knowledge privacy",
      PrivacySectionTitle: "Your data stays yours",
      PrivacySectionDescription:
        "We built LoveLust with a privacy-first architecture from day one. Your intimate data is too sensitive to trust to any server.",
      PrivacyLocal: "Local-first architecture",
      PrivacyLocalDesc:
        "All activity data is stored exclusively on your device. No account required, no server access.",
      PrivacyEncryption: "AES-128/256-CFB encryption",
      PrivacyEncryptionDesc:
        "Your data is encrypted at rest using AES-128/256 in CFB mode. Even on backup, no one can read it.",
      PrivacyNoTrackers: "No advertising trackers",
      PrivacyNoTrackersDesc:
        "We don't use advertising SDKs. Analytics are aggregate, anonymous, and opt-out capable.",
      PrivacyRightToForget: "Right to be forgotten",
      PrivacyRightToForgetDesc:
        "Delete everything in one tap from within the app. No residual data, no recovery.",
      PrivacyEncryptionDetail: "End-to-end encrypted. AES-128/256-CFB. Always.",
      PrivacyStatLocal: "Data stays local",
      PrivacyStatTrackers: "Ad trackers",
      // How it works
      HowItWorksTitle: "How it works",
      HowItWorksSubtitle: "Start in minutes. Stay private forever.",
      Step1Title: "Download",
      Step1Description:
        "Get LoveLust from the App Store or Google Play. No account, no sign-up required.",
      Step2Title: "Personalize",
      Step2Description:
        "Set your preferences, identity, and what you want to track. Everything is optional.",
      Step3Title: "Track & discover",
      Step3Description:
        "Log your encounters and let LoveLust reveal insights about your sexual wellbeing.",
      // Pricing
      PricingTitle: "Simple, honest pricing",
      PricingSubtitle: "Unlock the full experience. Cancel anytime.",
      PricingMonthly: "Monthly",
      PricingMonthlyPrice: "€2.99",
      PricingMonthlyPer: "per month",
      PricingAnnual: "Annual",
      PricingAnnualPrice: "€17.99",
      PricingAnnualPer: "per year",
      PricingLifetime: "Lifetime",
      PricingLifetimePrice: "€49.99",
      PricingLifetimeDesc: "one-time payment",
      PricingPopular: "Most popular",
      PricingCta: "Get started",
      // Support FAQ
      FAQ: "Frequently asked questions",
      FAQ1Question: "Is my data really private?",
      FAQ1Answer:
        "Yes. All sexual activity data is stored locally on your device using AES-128/256 encryption in CFB mode. LoveLust servers never have access to it.",
      FAQ2Question: "How do I cancel my subscription?",
      FAQ2Answer:
        "You can cancel anytime through your App Store or Google Play subscription settings. Deleting the app does not cancel your subscription.",
      FAQ3Question: "What happens if I lose my phone?",
      FAQ3Answer:
        "If you haven't enabled encrypted backup, your data is on that device only. We recommend enabling cloud backup in the app settings.",
      FAQ4Question: "How do I delete all my data?",
      FAQ4Answer:
        "Go to Settings inside the app and tap 'Delete all data'. Uninstalling the app also removes all local data.",
      FAQ5Question: "What are my GDPR rights?",
      FAQ5Answer:
        "Under GDPR you have the right to access, correct, and delete your data (Art. 15–17). Contact us at the email below to exercise these rights.",
      SurveySupport: "Improve LoveLust",
      SurveySupportDescription:
        "Take our anonymous survey and get 7 days premium free as a thank you.",
      SurveySupportButton: "Take the survey",
      PrivacyPolicy: "Privacy policy",
      TermsAndConditions: "Terms & Conditions",
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
      Twitter: "Twitter",
      Issues: "Issues",
      Donations: "Donations",
      SupportOurWork: "Support our Work",
      SupportOurWorkDescription:
        "Your support helps us keep building and improving this app. If you find it useful and want to help us grow, you can make a donation using any of the options below. Every contribution, no matter the size, makes a difference. Thank you! 🙏",
      DonateViaRevolut: "Donate via Revolut",
      DonateViaRevolutDescription: "You can donate directly via Revolut:",
      RevolutUsername: "Revolut Username",
      RevolutLink: "Or use this link",
      DonateWithCrypto: "Donate with Crypto",
      DonateWithCryptoDescription:
        "You can also support us with cryptocurrency. Here are our wallet addresses:",
      Bitcoin: "Bitcoin (BTC)",
      BitcoinCash: "Bitcoin Cash (BCH)",
      Ethereum: "Ethereum (ETH)",
      XRPLedger: "XRP Ledger (XRP)",
      Stellar: "Stellar (XLM)",
      Solana: "Solana (SOL)",
      TON: "The Open Network (TON)",
      SupportedStablecoins: "Supported Stablecoins",
      SupportedStablecoinsDescription:
        "We currently accept USDC on the following networks:",
      SupportedStablecoinsFooter:
        "If you're donating USDC, please make sure you send it to the correct address and network listed above.",
    },
  },
  es: {
    translation: {
      LoveLust: "LoveLust",
      Title: "LoveLust",
      Subtitle: "Salud sexual",
      Description:
        "LoveLust le permite realizar un seguimiento de sus encuentros sexuales y los métodos anticonceptivos, para garantizar que tengas una vida sexual saludable.",
      // Nav
      NavFeatures: "Funciones",
      NavPricing: "Precios",
      DownloadApp: "Descargar Ahora",
      // Hero
      Tagline: "Ama con seguridad. Desea con libertad.",
      HeroTaglineMain: "Redefine tu",
      HeroTaglineAccent: "viaje íntimo.",
      HeroDescription:
        "Un diario privado para tus momentos más personales. Seguro, sofisticado y diseñado para profundizar tu conexión contigo y con los demás.",
      DownloadOnThe: "Consíguelo en el",
      GetItOn: "Disponible en",
      PrivacyBadge: "Privacidad ante todo · Sin servidores · AES-CFB",
      // Bento features
      CraftedForTrust: "Hecho para confiar.",
      BentoPrivacyTitle: "Arquitectura privacy first.",
      BentoPrivacyDesc:
        "Tus datos se cifran localmente y nunca salen de tu dispositivo sin tu permiso explícito. No solo protegemos tu privacidad; la priorizamos.",
      BentoOnboardingTitle: "Incorporación fluida.",
      BentoOnboardingDesc:
        "Empieza tu camino en segundos. Sin preguntas innecesarias, solo lo esencial.",
      BentoStatsTitle: "Estadísticas detalladas.",
      BentoStatsDesc:
        "Visualiza patrones y obtén insights sobre tu bienestar con gráficos elegantes de estilo editorial.",
      BentoPremiumTitle: "Beneficios premium.",
      BentoPremiumDesc:
        "Desbloquea insights más profundos, temas personalizados y funciones exclusivas para tu crecimiento.",
      // App preview
      ElegantByDesign: "Elegante por diseño.",
      ElegantByDesignDesc:
        "Experimenta una interfaz que parece una publicación de alto nivel — discreta cuando necesitas concentración, expresiva cuando buscas insight.",
      // Values
      OurValues: "Nuestros valores",
      OurValuesDesc: "Los principios que guían cada decisión que tomamos al construir LoveLust.",
      Value1Title: "Privacidad radical",
      Value1Desc:
        "Creemos que tus datos son solo tuyos. Sin rastreo, sin almacenamiento en la nube salvo que lo elijas, sin compromisos en tu soberanía digital.",
      Value2Title: "Intimidad humana",
      Value2Desc:
        "La tecnología debe tender puentes, no crear distancias. Diseñamos funciones que fomentan la conexión genuina y la reflexión consciente.",
      Value3Title: "Diseño ético",
      Value3Desc:
        "La belleza y la utilidad no son excluyentes. Creamos experiencias tranquilas e intencionales que respetan tu atención y tu tiempo.",
      // Pricing
      InvestmentTitle: "Inversión en ti.",
      InvestmentDesc: "Precios simples y transparentes para un valor de por vida.",
      PricingFeatureTracking: "Todas las herramientas",
      PricingFeatureInsights: "Insights estándar",
      PricingFeaturePrivacy: "Sincronización privada",
      PricingFeatureStats: "Estadísticas avanzadas",
      PricingFeatureThemes: "Temas personalizados",
      PricingFeatureExport: "Exportación de datos",
      PricingFeatureUpdates: "Todas las actualizaciones",
      PricingFeatureVip: "Soporte prioritario",
      PricingFeatureOnce: "Pago único",
      SelectPlan: "Elegir plan",
      ThousandsOfUsers: "Miles de usuarios satisfechos",
      // Testimonials
      TestimonialsTitle: "Lo que dicen nuestros clientes",
      TestimonialsDesc: "Opiniones reales de personas reales que controlan su salud íntima con LoveLust.",
      // Final CTA
      CtaTitle: "Empieza tu transformación hoy.",
      CtaDescription:
        "Únete a miles de personas que han redefinido su relación con su propia intimidad a través de la reflexión consciente.",
      // Survey CTA
      SurveyCtaTitle: "Ayúdanos a mejorar LoveLust",
      SurveyCtaIncentive: "Comparte tu opinión y consigue 7 días premium gratis",
      SurveyCtaButton: "Ir a la encuesta",
      // Features
      FeaturesTitle: "Todo lo que necesitas, nada más",
      FeaturesSubtitle: "Diseñado para tu privacidad y tu bienestar.",
      Feature1Title: "Privacidad local",
      Feature1Description:
        "Tus datos sexuales nunca salen de tu dispositivo. Sin servidores, sin sincronización en la nube salvo si lo eliges.",
      Feature2Title: "Registro detallado",
      Feature2Description:
        "Registra parejas, prácticas, métodos anticonceptivos y sensaciones con precisión.",
      Feature3Title: "Salud sexual",
      Feature3Description:
        "Controla pruebas de ITS, PrEP y citas médicas en un solo lugar.",
      Feature4Title: "Estadísticas",
      Feature4Description:
        "Descubre patrones en tu vida sexual con gráficos privados y hermosos.",
      Feature5Title: "Inclusivo por diseño",
      Feature5Description:
        "Creado para toda orientación, identidad de género y estilo de relación.",
      Feature6Title: "Backup cifrado",
      Feature6Description:
        "Copia de seguridad opcional en la nube, completamente cifrada con AES-128/256-CFB. Solo tú tienes la clave.",
      // Privacy section
      PrivacySectionBadge: "Privacidad de conocimiento cero",
      PrivacySectionTitle: "Tus datos son tuyos",
      PrivacySectionDescription:
        "Construimos LoveLust con una arquitectura privacy-first desde el primer día. Tus datos íntimos son demasiado sensibles para confiarlos a ningún servidor.",
      PrivacyLocal: "Arquitectura local-first",
      PrivacyLocalDesc:
        "Todos los datos de actividad se almacenan exclusivamente en tu dispositivo. Sin cuenta, sin acceso de servidor.",
      PrivacyEncryption: "Cifrado AES-128/256-CFB",
      PrivacyEncryptionDesc:
        "Tus datos se cifran en reposo con AES-128/256 en modo CFB. Incluso en copia de seguridad, nadie puede leerlos.",
      PrivacyNoTrackers: "Sin rastreadores publicitarios",
      PrivacyNoTrackersDesc:
        "No usamos SDKs de publicidad. Las analíticas son agregadas, anónimas y pueden desactivarse.",
      PrivacyRightToForget: "Derecho al olvido",
      PrivacyRightToForgetDesc:
        "Elimina todo con un toque desde la app. Sin datos residuales, sin recuperación.",
      PrivacyEncryptionDetail: "Cifrado de extremo a extremo. AES-128/256-CFB. Siempre.",
      PrivacyStatLocal: "Datos en local",
      PrivacyStatTrackers: "Rastreadores de ads",
      // How it works
      HowItWorksTitle: "Cómo funciona",
      HowItWorksSubtitle: "Empieza en minutos. Mantente privado para siempre.",
      Step1Title: "Descarga",
      Step1Description:
        "Consigue LoveLust en el App Store o Google Play. Sin cuenta, sin registro.",
      Step2Title: "Personaliza",
      Step2Description:
        "Configura tus preferencias, identidad y qué quieres registrar. Todo es opcional.",
      Step3Title: "Registra y descubre",
      Step3Description:
        "Apunta tus encuentros y deja que LoveLust te revele insights sobre tu bienestar sexual.",
      // Pricing
      PricingTitle: "Precios simples y honestos",
      PricingSubtitle: "Desbloquea la experiencia completa. Cancela cuando quieras.",
      PricingMonthly: "Mensual",
      PricingMonthlyPrice: "€2,99",
      PricingMonthlyPer: "al mes",
      PricingAnnual: "Anual",
      PricingAnnualPrice: "€17,99",
      PricingAnnualPer: "al año",
      PricingLifetime: "De por vida",
      PricingLifetimePrice: "€49,99",
      PricingLifetimeDesc: "pago único",
      PricingPopular: "Más popular",
      PricingCta: "Empezar",
      // Support FAQ
      FAQ: "Preguntas frecuentes",
      FAQ1Question: "¿Son realmente privados mis datos?",
      FAQ1Answer:
        "Sí. Todos los datos de actividad sexual se almacenan localmente en tu dispositivo con cifrado AES-128/256 en modo CFB. Los servidores de LoveLust nunca tienen acceso a ellos.",
      FAQ2Question: "¿Cómo cancelo mi suscripción?",
      FAQ2Answer:
        "Puedes cancelar en cualquier momento desde los ajustes de suscripción del App Store o Google Play. Eliminar la app no cancela la suscripción.",
      FAQ3Question: "¿Qué pasa si pierdo el móvil?",
      FAQ3Answer:
        "Si no has activado el backup cifrado, tus datos solo están en ese dispositivo. Te recomendamos activar la copia de seguridad en la configuración de la app.",
      FAQ4Question: "¿Cómo elimino todos mis datos?",
      FAQ4Answer:
        "Ve a Configuración dentro de la app y pulsa 'Eliminar todos los datos'. Desinstalar la app también borra todos los datos locales.",
      FAQ5Question: "¿Cuáles son mis derechos RGPD?",
      FAQ5Answer:
        "Bajo el RGPD tienes derecho de acceso, rectificación y supresión (Art. 15–17). Contáctanos en el email de abajo para ejercer estos derechos.",
      SurveySupport: "Mejora LoveLust",
      SurveySupportDescription:
        "Completa nuestra encuesta anónima y consigue 7 días premium gratis como agradecimiento.",
      SurveySupportButton: "Ir a la encuesta",
      PrivacyPolicy: "Política de privacidad",
      TermsAndConditions: "Términos y condiciones",
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
      Twitter: "Twitter",
      Issues: "Incidencias",
      Donations: "Donaciones",
      SupportOurWork: "Apoya Nuestro Trabajo",
      SupportOurWorkDescription:
        "Tu apoyo nos ayuda a construir y mantener esta app. Si te resulta útil y quieres contribuir a su desarrollo, puedes hacer una donación a través de cualquiera de los siguientes métodos. Cada aporte cuenta ¡gracias! 🙏",
      DonateViaRevolut: "Donar a través de Revolut",
      DonateViaRevolutDescription:
        "Puedes donar directamente a traves de Revolut:",
      RevolutUsername: "Usuario de Revolut",
      RevolutLink: "O usa este enlace",
      DonateWithCrypto: "Donar con Criptomonedas",
      DonateWithCryptoDescription:
        "También puedes apoyarnos con criptomonedas. Aquí están nuestras direcciones de wallet:",
      SupportedStablecoins: "Stablecoins aceptadas",
      SupportedStablecoinsDescription:
        "Actualmente aceptamos USDC en las siguientes redes:",
      SupportedStablecoinsFooter:
        "Si estas donando USDC, asegúrate de enviarlo a la dirección correcta y la red de la lista de arriba.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "es"],

    interpolation: {
      escapeValue: false,
    },

    // Prefer the NEXT_LOCALE cookie (set server-side by middleware), then
    // fall back to navigator for client-only environments.
    detection: {
      order: ["cookie", "navigator"],
      lookupCookie: "NEXT_LOCALE",
      caches: ["cookie"],
      cookieOptions: { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" },
    },

    // Synchronous init so the language is resolved before React's first render.
    initImmediate: false,
  });

export default i18n;
