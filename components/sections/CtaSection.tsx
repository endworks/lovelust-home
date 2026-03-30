"use client";

import { useTranslation } from "react-i18next";
import StoreButton from "../StoreButton";

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="section--cta">
      <div
        style={{
          maxWidth: 896,
          margin: "0 auto",
          backgroundColor: "var(--accent)",
          borderRadius: "var(--radius)",
          padding: "clamp(2.5rem, 5vw, 4rem)",
          textAlign: "center",
          color: "var(--on-accent)",
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
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-section)",
            fontWeight: "var(--header-weight)",
            fontStyle: "italic",
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
