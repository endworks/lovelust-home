"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import LogoSvg from "./LogoSvg";

export default function Header({
  isDark,
  toggleDark,
  switchLanguage,
}: {
  isDark: boolean;
  toggleDark: () => void;
  switchLanguage: (lang: string) => void;
}) {
  const { t, i18n } = useTranslation();

  return (
    <nav
      className="glass-nav"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: isDark ? "var(--nav-bg)" : "transparent",
      }}
    >
      <div className="nav-inner">
        <a href="/#" style={{ textDecoration: "none" }}>
          <LogoSvg height={28} />
        </a>
        <div className="nav-controls">
          <nav
            aria-label="Main navigation"
            className="hidden-mobile"
            style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
          >
            {[
              { href: "/#features", label: t("NavFeatures") },
              { href: "/#values", label: t("OurValues") },
              { href: "/#faq", label: t("FAQ") },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  //fontFamily: "var(--font-accent)",
                  fontWeight: "var(--header-weight)",
                  fontSize: "var(--text-md)",
                  color: "var(--text)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <div
            style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}
          >
            <button
              onClick={toggleDark}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              style={{
                background: "none",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.5rem 0.5rem",
                cursor: "pointer",
                fontSize: "var(--text-md)",
                lineHeight: 1,
                color: "var(--text)",
              }}
            >
              {isDark ? (
                <SunIcon size={16} weight="fill" />
              ) : (
                <MoonIcon size={16} weight="fill" />
              )}
            </button>
            <button
              onClick={() =>
                switchLanguage(i18n.language === "es" ? "en" : "es")
              }
              aria-label={
                i18n.language === "es"
                  ? "Switch to English"
                  : "Cambiar a Español"
              }
              style={{
                background: "none",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.5rem 0.5rem",
                cursor: "pointer",
                fontSize: "var(--text-md)",
                fontWeight: "var(--header-weight)",
                color: "var(--text)",
                letterSpacing: "0.05em",
              }}
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
          </div>

          <span className="hidden-mobile">
            <a
              href={process.env.NEXT_PUBLIC_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-headline btn-download"
            >
              {t("DownloadApp")}
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
