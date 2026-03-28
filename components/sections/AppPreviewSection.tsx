"use client";

import { useTranslation } from "react-i18next";
import ThemeAwareScreenshot from "../ThemeAwareScreenshot";

const DESKTOP_PHONES = [
  { name: "partner", width: 220, translateY: "0" },
  { name: "stats", width: 260, translateY: "-2.5rem" },
  { name: "timeline", width: 220, translateY: "0" },
] as const;

export default function AppPreviewSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="section section--alt" style={{ overflowX: "hidden" }}>
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          textAlign: "center",
          marginBottom: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-section)",
            fontWeight: 700,
            color: "var(--accent)",
            marginBottom: "1.5rem",
          }}
        >
          {t("ElegantByDesign")}
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {t("ElegantByDesignDesc")}
        </p>
      </div>

      {/* Mobile: single centered phone */}
      <div
        className="preview-mobile-only"
        style={{
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          style={{
            width: "72%",
            maxWidth: 260,
            backgroundColor: "var(--bg-highest)",
            borderRadius: "var(--radius)",
            border: "5px solid var(--bg-low)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
            overflow: "hidden",
          }}
        >
          <ThemeAwareScreenshot
            language={i18n.language}
            name={DESKTOP_PHONES[1].name}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Desktop: 3-phone pyramid */}
      <div
        className="preview-desktop-only"
        style={{
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        {DESKTOP_PHONES.map(({ name, width, translateY }) => (
          <div
            key={name}
            style={{
              flexShrink: 0,
              width,
              backgroundColor: "var(--bg-highest)",
              borderRadius: "var(--radius)",
              border: "8px solid var(--bg-low)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
              overflow: "hidden",
              transform: `translateY(${translateY})`,
            }}
          >
            <ThemeAwareScreenshot
              language={i18n.language}
              name={name}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
