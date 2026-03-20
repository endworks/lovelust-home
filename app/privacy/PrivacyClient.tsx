"use client";

import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import PageLayout from "../../components/PageLayout";

function PrivacyContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 style={{
            fontFamily: "'Nunito', sans-serif", fontSize: "1.1rem", fontWeight: 700,
            color: "var(--c-primary)", marginTop: "2rem", marginBottom: "0.75rem",
            paddingTop: "1.5rem", borderTop: "1px solid var(--bg-low)",
          }}>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 style={{
            fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", fontWeight: 700,
            color: "var(--c-primary)", marginTop: "1.25rem", marginBottom: "0.5rem",
          }}>{children}</h3>
        ),
        p: ({ children }) => (
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "0.75rem" }}>{children}</p>
        ),
        ul: ({ children }) => (
          <ul style={{ color: "var(--text-muted)", lineHeight: 1.8, paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>{children}</ul>
        ),
        ol: ({ children }) => (
          <ol style={{ color: "var(--text-muted)", lineHeight: 1.8, paddingLeft: "1.25rem", marginBottom: "0.75rem" }}>{children}</ol>
        ),
        li: ({ children }) => (
          <li style={{ marginBottom: "0.4rem" }}>{children}</li>
        ),
        a: ({ href, children }) => (
          <a href={href} style={{ color: "var(--c-primary)", textDecoration: "underline", textDecorationColor: "var(--c-primary-40)" }}>{children}</a>
        ),
        strong: ({ children }) => (
          <strong style={{ color: "var(--text-muted)", fontWeight: 700 }}>{children}</strong>
        ),
        hr: () => (
          <hr style={{ border: "none", borderTop: "1px solid var(--ghost-border)", margin: "2rem 0 0" }} />
        ),
        em: ({ children }) => (
          <em style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{children}</em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default function PrivacyPolicy({ en, es }: { en: string; es: string }) {
  const { t, i18n } = useTranslation();
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("page", { page: "privacy-policy" });
  }, [trackEvent]);

  const content = i18n.language === "es" ? es : en;

  return (
    <PageLayout title={t("PrivacyPolicy")} trackPage="privacy-policy">
      <PrivacyContent content={content} />
    </PageLayout>
  );
}
