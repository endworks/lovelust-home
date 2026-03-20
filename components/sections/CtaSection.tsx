"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import StoreButton from "../StoreButton";

export default function CtaSection() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      style={{
        padding: isMobile ? "4rem 1.25rem" : "8rem 2rem",
        backgroundColor: "var(--bg-low)",
      }}
    >
      <div
        style={{
          maxWidth: 896,
          margin: "0 auto",
          backgroundColor: "var(--c-primary)",
          borderRadius: isMobile ? "2rem" : "3rem",
          padding: isMobile ? "2.5rem 1.5rem" : "4rem",
          textAlign: "center",
          color: "var(--c-on-primary)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 256,
            height: 256,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            filter: "blur(3rem)",
            transform: "translate(33%, -33%)",
          }}
        />

        <h2
          className="font-headline"
          style={{
            fontSize: "clamp(1.75rem,5vw,3.25rem)",
            fontWeight: 800,
            marginBottom: "1.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {t("CtaTitle")}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            marginBottom: "2.5rem",
            maxWidth: 480,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
            position: "relative",
            zIndex: 1,
          }}
        >
          {t("CtaDescription")}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <StoreButton platform="appStore" variant="cta" />
          <StoreButton platform="googlePlay" variant="cta" />
        </div>
      </div>
    </section>
  );
}
