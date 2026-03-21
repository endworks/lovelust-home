"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import FaqList from "../FaqList";
import SectionContainer from "../SectionContainer";

interface FaqSectionProps {
  faqEn: string;
  faqEs: string;
}

export default function FaqSection({ faqEn, faqEs }: FaqSectionProps) {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <SectionContainer maxWidth={800} id="faq">
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "2.5rem" : "4rem",
        }}
      >
        <h2
          className="font-headline"
          style={{
            fontSize: "clamp(1.75rem,4vw,2.5rem)",
            fontWeight: 700,
            color: "var(--c-primary)",
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
