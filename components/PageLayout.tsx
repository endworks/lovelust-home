"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../hooks/useMediaQuery";
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
  const isMobile = useMediaQuery("(max-width: 768px)");

  function switchLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  const px = isMobile ? "1.25rem" : "2rem";

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-nunito), sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        isMobile={isMobile}
        isDark={isDark}
        toggleDark={toggleDark}
        switchLanguage={switchLanguage}
      />

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

      <Footer isMobile={isMobile} px={px} />
    </div>
  );
}
