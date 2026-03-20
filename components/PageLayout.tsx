"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  trackPage: string;
}

export default function PageLayout({
  children,
  title,
  trackPage,
}: PageLayoutProps) {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (evt: MediaQueryListEvent) => {
      setIsDark(evt.matches);
      document.documentElement.classList.toggle("dark", evt.matches);
      const expires = new Date(
        Date.now() + 365 * 24 * 60 * 60 * 1000,
      ).toUTCString();
      document.cookie = `theme=${evt.matches ? "dark" : "light"};path=/;expires=${expires};samesite=lax`;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.title = `${title} | LoveLust`;
  }, [title]);

  void trackPage;

  function switchLanguage(lang: string) {
    i18n.changeLanguage(lang);
    const expires = new Date(
      Date.now() + 365 * 24 * 60 * 60 * 1000,
    ).toUTCString();
    document.cookie = `NEXT_LOCALE=${lang};path=/;expires=${expires};samesite=lax`;
  }

  function toggleDark() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    const expires = new Date(
      Date.now() + 365 * 24 * 60 * 60 * 1000,
    ).toUTCString();
    document.cookie = `theme=${next ? "dark" : "light"};path=/;expires=${expires};samesite=lax`;
  }

  const px = isMobile ? "1.25rem" : "2rem";

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "'Nunito', sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <Header
        isMobile={isMobile}
        isDark={isDark}
        toggleDark={toggleDark}
        switchLanguage={switchLanguage}
      />

      {/* ── Page content ────────────────────────────────────────────── */}
      <main
        style={{
          flex: 1,
          paddingTop: isMobile ? "5rem" : "7rem",
          paddingBottom: "6rem",
          paddingLeft: px,
          paddingRight: px,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Page title */}
          <div style={{ marginBottom: "3rem", paddingBottom: "2rem" }}>
            <h1
              className="font-headline"
              style={{
                fontSize: "clamp(2rem,5vw,3rem)",
                fontWeight: 800,
                color: "var(--c-primary)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
          </div>

          {children}
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <Footer isMobile={isMobile} px={px} />
    </div>
  );
}
