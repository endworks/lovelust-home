"use client";

import { useTheme } from "../hooks/useTheme";
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

interface Testimonial {
  quote: string;
  name: string;
  platform: string;
  rating: number;
}

export default function HomeClient({
  faqEn,
  faqEs,
  testimonials,
}: {
  faqEn: string;
  faqEs: string;
  testimonials: Testimonial[];
}) {
  const { isDark, toggleDark } = useTheme();

  usePageTracking("home");

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-body), sans-serif",
      }}
    >
      <Header isDark={isDark} toggleDark={toggleDark} />

      <HeroSection isDark={isDark} />
      <FeaturesSection />
      <AppPreviewSection />
      <ValuesSection />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqEn={faqEn} faqEs={faqEs} />
      <CtaSection />
      <Footer />
    </div>
  );
}
