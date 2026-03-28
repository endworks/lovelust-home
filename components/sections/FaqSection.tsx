"use client";

import { useTranslation } from "react-i18next";
import FaqList from "../FaqList";
import SectionContainer from "../SectionContainer";

interface FaqSectionProps {
  faqEn: string;
  faqEs: string;
}

export default function FaqSection({ faqEn, faqEs }: FaqSectionProps) {
  const { t, i18n } = useTranslation();

  return (
    <SectionContainer maxWidth={800} id="faq">
      <div
        style={{
          textAlign: "center",
          marginBottom: "clamp(2.5rem, 4vw, 4rem)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-section)",
            fontWeight: 700,
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          {t("FAQ")}
        </h2>
      </div>
      <FaqList content={i18n.language === "es" ? faqEs : faqEn} />
    </SectionContainer>
  );
}
