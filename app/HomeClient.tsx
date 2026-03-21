"use client";

import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { usePageTracking } from "../hooks/usePageTracking";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import AppPreviewSection from "../components/sections/AppPreviewSection";
import ValuesSection from "../components/sections/ValuesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FaqSection from "../components/sections/FaqSection";
import CtaSection from "../components/sections/CtaSection";

export default function HomeClient({
  faqEn,
  faqEs,
}: {
  faqEn: string;
  faqEs: string;
}) {
  const { i18n } = useTranslation();
  const { isDark, toggleDark } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  usePageTracking("home");

  function switchLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  const px = isMobile ? "1.25rem" : "2rem";

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-nunito), sans-serif",
      }}
    >
      <Header
        isMobile={isMobile}
        isDark={isDark}
        toggleDark={toggleDark}
        switchLanguage={switchLanguage}
      />

      <HeroSection isDark={isDark} />
      <FeaturesSection />
      <AppPreviewSection />
      <ValuesSection />
      <TestimonialsSection />
      <FaqSection faqEn={faqEn} faqEs={faqEs} />
      <CtaSection />
      <Footer isMobile={isMobile} px={px} />
    </div>
  );
}
