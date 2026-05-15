"use client";

import dynamic from "next/dynamic";
import type { StoreRatings } from "../lib/storeRatings";
import { useTheme } from "../hooks/useTheme";
import { usePageTracking } from "../hooks/usePageTracking";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";

// Below-fold sections: still SSR'd (kept for SEO / no layout shift) but
// their client JS is code-split so it doesn't block the first paint on
// cold venue cellular. See premortem failure mode #3.
const AppPreviewSection = dynamic(
  () => import("../components/sections/AppPreviewSection"),
);
const ValuesSection = dynamic(
  () => import("../components/sections/ValuesSection"),
);
const TestimonialsSection = dynamic(
  () => import("../components/sections/TestimonialsSection"),
);
const FaqSection = dynamic(() => import("../components/sections/FaqSection"));
const CtaSection = dynamic(() => import("../components/sections/CtaSection"));

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
  storeRatings,
}: {
  faqEn: string;
  faqEs: string;
  testimonials: Testimonial[];
  storeRatings: StoreRatings;
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

      <HeroSection isDark={isDark} storeRatings={storeRatings} />
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
