"use client";

import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import Footer from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const { i18n } = useTranslation();
  const { isDark, toggleDark } = useTheme();

  function switchLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-body), sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        isDark={isDark}
        toggleDark={toggleDark}
        switchLanguage={switchLanguage}
      />

      <main className="page-main">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", paddingBottom: "2rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-page)",
                fontWeight: "var(--header-weight)",
                color: "var(--accent)",
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

      <Footer />
    </div>
  );
}
