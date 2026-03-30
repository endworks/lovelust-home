"use client";

import { useTranslation } from "react-i18next";
import PhoneMockup from "../PhoneMockup";
import RatingStars from "../RatingStars";
import StoreBadge from "../StoreBadge";

interface HeroSectionProps {
  isDark: boolean;
}

export default function HeroSection({ isDark }: HeroSectionProps) {
  const { t, i18n } = useTranslation();

  return (
    <section
      style={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "var(--bg)",
      }}
    >
      {/* Background overlays */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, var(--accent-18) 0%, transparent 70%)",
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
              "radial-gradient(ellipse at center, var(--accent-0d) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="hero-inner">
        {/* Left: text */}
        <div style={{ minWidth: 0 }}>
          <h1
            className="font-headline"
            style={{
              fontSize: "var(--text-display)",
              fontWeight: "var(--header-weight)",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-accent)",
                color: "var(--accent)",
              }}
            >
              {t("HeroTaglineMain")}
            </span>
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-accent)",
                color: "var(--text)",
                fontStyle: "italic",
                marginLeft: "10%",
              }}
            >
              {t("HeroTaglineAccent")}
            </span>
          </h1>

          <p
            style={{
              fontSize: "var(--text-md)",
              lineHeight: 1.75,
              color: "var(--text-muted)",
              maxWidth: 400,
              marginBottom: "2.5rem",
              fontWeight: 400,
              borderLeft: "2px solid var(--accent-20)",
              paddingLeft: "1rem",
            }}
          >
            {t("HeroDescription")}
          </p>

          {/* Download buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <StoreBadge platform="appStore" />
            <StoreBadge platform="googlePlay" />
          </div>

          {/* Star rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <RatingStars rating={4.9} size={16} />
            <span
              style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}
            >
              <strong style={{ color: "var(--text)" }}>4.9</strong>
              {" · "}
              {t("ThousandsOfUsers")}
            </span>
          </div>
        </div>

        {/* Right: phone mockup */}
        <PhoneMockup language={i18n.language} isDark={isDark} />
      </div>
    </section>
  );
}
