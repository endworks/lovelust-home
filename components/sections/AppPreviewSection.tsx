"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import ThemeAwareScreenshot from "../ThemeAwareScreenshot";

/**
 * App preview section with 3-phone layout (desktop) / single phone (mobile).
 * Only rendered in development mode.
 */
export default function AppPreviewSection() {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (process.env.NODE_ENV !== "development") return null;

  const px = isMobile ? "1.25rem" : "2rem";

  return (
    <section
      style={{
        padding: isMobile ? "4rem 0" : "8rem 2rem 8rem",
        overflowX: "hidden",
        backgroundColor: "var(--bg-low)",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          textAlign: "center",
          marginBottom: isMobile ? "3rem" : "5rem",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <h2
          className="font-headline"
          style={{
            fontSize: "clamp(1.75rem,4vw,2.5rem)",
            fontWeight: 700,
            color: "var(--c-primary)",
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

      {isMobile ? (
        <div
          style={{
            display: "flex",
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
              borderRadius: "2.5rem",
              border: "5px solid var(--bg-low)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
              overflow: "hidden",
            }}
          >
            <ThemeAwareScreenshot
              language={i18n.language}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: 260,
              backgroundColor: "var(--bg-highest)",
              borderRadius: "3rem",
              border: "8px solid var(--bg-low)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
              overflow: "hidden",
            }}
          >
            <ThemeAwareScreenshot
              language={i18n.language}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            style={{
              flexShrink: 0,
              width: 290,
              backgroundColor: "var(--bg-highest)",
              borderRadius: "3rem",
              border: "8px solid var(--bg-low)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
              overflow: "hidden",
              transform: "translateY(-2rem)",
            }}
          >
            <ThemeAwareScreenshot
              language={i18n.language}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            style={{
              flexShrink: 0,
              width: 260,
              backgroundColor: "var(--bg-highest)",
              borderRadius: "3rem",
              border: "8px solid var(--bg-low)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
              overflow: "hidden",
            }}
          >
            <ThemeAwareScreenshot
              language={i18n.language}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
