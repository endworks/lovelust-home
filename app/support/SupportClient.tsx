"use client";

import { useTranslation } from "react-i18next";
import { usePageTracking } from "../../hooks/usePageTracking";
import PageLayout from "../../components/PageLayout";
import FaqList from "../../components/FaqList";
import { EnvelopeSimpleIcon, ArrowRightIcon } from "@phosphor-icons/react";

function SupportContent({ faqEn, faqEs }: { faqEn: string; faqEs: string }) {
  const { t, i18n } = useTranslation();

  const h2Style = {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "1.375rem",
    fontWeight: 700,
    color: "var(--c-primary)",
    marginTop: "2.5rem",
    marginBottom: "0.75rem",
  };
  const h3Style = {
    fontFamily: "'Nunito', sans-serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "var(--c-primary)",
    marginTop: "1.75rem",
    marginBottom: "0.5rem",
  };
  const pStyle = { color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "0.75rem" };

  return (
    <div>
      {/* Survey CTA */}
      {process.env.NODE_ENV === "development" && (
        <div
          style={{
            borderRadius: "1.5rem",
            padding: "1.75rem 2rem",
            background: "linear-gradient(135deg, var(--c-primary-12), var(--c-primary-06))",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                color: "var(--c-primary)",
                marginBottom: "0.25rem",
              }}
            >
              {t("SurveySupport")}
            </p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              {t("SurveySupportDescription")}
            </p>
          </div>
          <a
            href="https://surveys.end.works/lovelust"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "var(--c-primary)",
              color: "var(--c-on-primary)",
              padding: "0.625rem 1.5rem",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.875rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {t("SurveySupportButton")}
          </a>
        </div>
      )}

      {/* Contact */}
      <h2 style={h2Style}>{t("Contact")}</h2>
      <p style={pStyle}>{t("ContactDescription")}</p>

      <h3 style={h3Style}>{t("EmailSupport")}</h3>
      <p style={pStyle}>{t("EmailSupportDescription")}</p>
      <a
        href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
        style={{
          display: "flex", alignItems: "center", gap: "1.25rem",
          background: "linear-gradient(135deg, var(--c-primary-12) 0%, var(--c-primary-06) 100%)",
          borderRadius: "1.25rem", padding: "1.25rem 1.5rem",
          textDecoration: "none", marginBottom: "1.5rem",
        }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          backgroundColor: "var(--c-primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <EnvelopeSimpleIcon size={20} color="#fff" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--c-primary)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {t("EmailSupport")}
          </span>
          <span style={{ fontWeight: 700, color: "var(--c-primary)", fontSize: "0.95rem" }}>
            {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
          </span>
        </div>
        <ArrowRightIcon size={20} color="var(--c-primary-60)" style={{ marginLeft: "auto" }} />
      </a>

      <h3 style={h3Style}>{t("SocialMedia")}</h3>
      <p style={pStyle}>{t("SocialMediaDescription")}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        {[
          {
            label: "Instagram",
            href: `https://www.instagram.com/${process.env.NEXT_PUBLIC_SUPPORT_INSTAGRAM}`,
            handle: `@${process.env.NEXT_PUBLIC_SUPPORT_INSTAGRAM}`,
          },
          {
            label: "Twitter",
            href: `https://x.com/${process.env.NEXT_PUBLIC_SUPPORT_TWITTER}`,
            handle: `@${process.env.NEXT_PUBLIC_SUPPORT_TWITTER}`,
          },
        ].map(({ label, href, handle }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              backgroundColor: "var(--bg-lowest)",
              border: "1px solid var(--ghost-border)",
              borderRadius: "0.75rem",
              padding: "0.75rem 1.25rem",
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: "var(--c-primary)",
                fontSize: "0.875rem",
              }}
            >
              {label}
            </span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
              {handle}
            </span>
          </a>
        ))}
      </div>

      {/* FAQ */}
      <h2 style={{ ...h2Style, marginTop: "3rem" }}>{t("FAQ")}</h2>
      <FaqList
        content={i18n.language === "es" ? faqEs : faqEn}
      />
    </div>
  );
}

export default function Support({ faqEn, faqEs }: { faqEn: string; faqEs: string }) {
  const { t } = useTranslation();

  usePageTracking("support");

  return (
    <PageLayout title={t("Support")}>
      <SupportContent faqEn={faqEn} faqEs={faqEs} />
    </PageLayout>
  );
}
