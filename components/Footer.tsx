"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import LogoText from "./LogoText";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        {/* Top row: brand + nav columns */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <span style={{ display: "block", marginBottom: "0.75rem" }}>
              <LogoText size="1.75rem" />
            </span>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 320,
              }}
            >
              {t("HeroDescription")}
            </p>
          </div>

          {/* Legal links */}
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "var(--c-primary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
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
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--c-primary)")
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
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "var(--c-primary)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
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
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--c-primary)")
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
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            backgroundColor: "var(--c-primary-12)",
            marginBottom: "clamp(1.5rem, 3vw, 2rem)",
          }}
        />

        {/* Bottom row: copyright + made by */}
        <div className="footer-bottom">
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} end.works LLC. {t("AllRightsReserved")}
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            {t("MadeWithLove").split("♥")[0]}
            <span style={{ color: "var(--c-primary)" }}>♥</span>
            {t("MadeWithLove").split("♥")[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}
