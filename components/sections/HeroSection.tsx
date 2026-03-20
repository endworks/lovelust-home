"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import RatingStars from "../RatingStars";
import StoreButton from "../StoreButton";
import PhoneMockup from "../PhoneMockup";

interface HeroSectionProps {
  isDark: boolean;
}

export default function HeroSection({ isDark }: HeroSectionProps) {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      style={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background gradient blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, var(--c-primary-18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "45%",
            height: "60%",
            background:
              "radial-gradient(ellipse at center, var(--c-primary-0d) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "40%",
            width: "30%",
            height: "40%",
            background:
              "radial-gradient(ellipse at center, var(--c-secondary)08 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: isMobile ? "7rem 1.25rem 4rem" : "0 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
          gap: isMobile ? "3rem" : "5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: text */}
        <div style={{ minWidth: 0 }}>
          <h1
            className="font-headline"
            style={{
              fontSize: "clamp(2.75rem,5.5vw,5.25rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}
          >
            <span style={{ whiteSpace: "nowrap", display: "block" }}>
              {t("HeroTaglineMain")}
            </span>
            <span
              style={{
                whiteSpace: "nowrap",
                display: "block",
                color: "var(--c-primary)",
              }}
            >
              {t("HeroTaglineAccent")}
            </span>
          </h1>

          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              lineHeight: 1.75,
              color: "var(--text-muted)",
              maxWidth: 440,
              marginBottom: "2rem",
              fontWeight: 400,
            }}
          >
            {t("HeroDescription")}
          </p>

          {/* Star rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              marginBottom: "2.5rem",
            }}
          >
            <RatingStars rating={4.9} size={18} />
            <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              <strong style={{ color: "var(--text)" }}>4.9</strong> ·{" "}
              {t("ThousandsOfUsers")}
            </span>
          </div>

          {/* Download buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <StoreButton platform="appStore" />
            <StoreButton platform="googlePlay" />
          </div>
        </div>

        {/* Right: phone mockup */}
        <PhoneMockup
          language={i18n.language}
          isDark={isDark}
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}
