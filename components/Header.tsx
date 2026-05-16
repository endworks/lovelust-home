"use client";

import { ListIcon, MoonIcon, SunIcon, XIcon } from "@phosphor-icons/react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getUtmProps } from "../hooks/usePageTracking";
import LogoSvg from "./LogoSvg";

export default function Header({
  isDark,
  toggleDark,
}: {
  isDark: boolean;
  toggleDark: () => void;
}) {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Forward the visitor's session UTM to /download so the install keeps its
  // real campaign. Resolved post-mount (UTM lives in the browser) — start with
  // the bare path to avoid a hydration mismatch.
  const [downloadHref, setDownloadHref] = useState("/download");
  useEffect(() => {
    const qs = new URLSearchParams(getUtmProps()).toString();
    setDownloadHref(qs ? `/download?${qs}` : "/download");
  }, []);

  // Above-the-fold language toggle. The Footer switcher is below a fold
  // campaign visitors never reach. See premortem failure mode #5.
  const nextLang = i18n.language.startsWith("es") ? "en" : "es";

  const navLinks = [
    { href: "/#features", label: t("NavFeatures") },
    { href: "/#values", label: t("OurValues") },
    { href: "/#faq", label: t("FAQ") },
  ];

  return (
    <>
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
          <Link href="/#" style={{ textDecoration: "none" }}>
            <LogoSvg height={28} />
          </Link>
          <div className="nav-controls">
            <nav
              aria-label="Main navigation"
              className="hidden-mobile"
              style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
            >
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontWeight: 700,
                    fontSize: "var(--text-sm)",
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
                onClick={() => i18n.changeLanguage(nextLang)}
                aria-label={`Switch to ${nextLang === "es" ? "Español" : "English"}`}
                style={{
                  background: "none",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.5rem",
                  cursor: "pointer",
                  fontSize: "var(--text-sm)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--text)",
                }}
              >
                {nextLang.toUpperCase()}
              </button>
            </div>

            <span className="hidden-mobile">
              <a
                href={downloadHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-headline btn-download"
              >
                {t("DownloadApp")}
              </a>
            </span>

            {/* Hamburger — mobile only */}
            <button
              className="show-mobile"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                background: "none",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                cursor: "pointer",
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              {mobileOpen ? (
                <XIcon size={22} weight="bold" />
              ) : (
                <ListIcon size={22} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="show-mobile"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 49,
            backgroundColor: isDark
              ? "rgba(27,28,28,0.97)"
              : "rgba(252,249,248,0.97)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
          onClick={() => setMobileOpen(false)}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontWeight: 700,
                fontSize: "var(--text-2xl)",
                color: "var(--text)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={downloadHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline btn-download"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: "1rem" }}
          >
            {t("DownloadApp")}
          </a>
        </div>
      )}
    </>
  );
}
