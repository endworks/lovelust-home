"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import HeartCheckIcon from "./HeartCheckIcon";
import LogoSvg from "./LogoSvg";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        {/* Top row: brand + nav columns */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <span style={{ display: "block", marginBottom: "0.75rem" }}>
              <LogoSvg height={32} />
            </span>
            <p
              style={{
                fontSize: "var(--text-md)",
                color: "var(--text-muted)",
                lineHeight: 1.5,
                maxWidth: 320,
              }}
            >
              <span>{t("HeroTaglineMain")}</span>
              {". "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                {t("HeroTaglineAccent")}
              </span>
            </p>
          </div>

          {/* Legal links */}
          <div>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "var(--header-alt-weight)",
                fontSize: "var(--text-md)",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              Legal
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { href: "/privacy", label: t("PrivacyPolicy") },
                { href: "/terms", label: t("TermsAndConditions") },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support links */}
          <div>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "var(--header-alt-weight)",
                fontSize: "var(--text-md)",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {t("Support")}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[{ href: "/support", label: t("Support") }].map(
                ({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    {label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Language */}
          <div>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "var(--header-alt-weight)",
                fontSize: "var(--text-md)",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {t("Language")}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { lang: "en", label: "English" },
                { lang: "es", label: "Español" },
              ].map(({ lang, label }) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: lang === i18n.language ? "default" : "pointer",
                    fontSize: "var(--text-base)",
                    color:
                      lang === i18n.language
                        ? "var(--accent)"
                        : "var(--text-muted)",
                    textAlign: "left",
                    transition: "color 0.2s",
                    fontWeight: lang === i18n.language ? 600 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (lang !== i18n.language)
                      e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    if (lang !== i18n.language)
                      e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            backgroundColor: "var(--accent-12)",
            marginBottom: "clamp(1.5rem, 3vw, 2rem)",
          }}
        />

        {/* Bottom row: copyright + made by */}
        <div className="footer-bottom">
          <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} end.works LLC. {t("AllRightsReserved")}
          </p>
          <p
            style={{
              fontFamily: "var(--font-accent)",
              fontWeight: "var(--header-weight)",
              fontSize: "var(--text-base)",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            {t("MadeWithLove").split("♥")[0]}
            <HeartCheckIcon size={12} />
            {t("MadeWithLove").split("♥")[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}
