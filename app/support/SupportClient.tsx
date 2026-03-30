"use client";

import {
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FaqList from "../../components/FaqList";
import PageLayout from "../../components/PageLayout";
import { usePageTracking } from "../../hooks/usePageTracking";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-accent)",
        fontStyle: "italic",
        fontWeight: "var(--header-weight)",
        fontSize: "var(--text-subhead)",
        color: "var(--accent)",
        marginBottom: "1rem",
        marginTop: "3rem",
      }}
    >
      {children}
    </h2>
  );
}

function SocialCard({
  label,
  href,
  handle,
  Icon,
}: {
  label: string;
  href: string;
  handle: string;
  Icon: React.ElementType;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="editorial-shadow"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: hovered ? "var(--accent-12)" : "var(--bg-lowest)",
        borderRadius: "var(--radius)",
        padding: "1.25rem",
        textDecoration: "none",
        transition: "background-color 0.2s, transform 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "var(--radius)",
          background: hovered ? "var(--accent)" : "var(--accent-12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
          flexShrink: 0,
        }}
      >
        <Icon
          size={18}
          color={hovered ? "#fff" : "var(--accent)"}
          weight="fill"
        />
      </div>
      <div>
        <p
          style={{
            fontWeight: "var(--header-weight)",
            color: "var(--text)",
            fontSize: "var(--text-base)",
            margin: "0 0 0.1rem",
          }}
        >
          {label}
        </p>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "var(--text-sm)",
            margin: 0,
          }}
        >
          {handle}
        </p>
      </div>
    </a>
  );
}

function SupportContent({ faqEn, faqEs }: { faqEn: string; faqEs: string }) {
  const { t, i18n } = useTranslation();
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <div>
      <p
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.75,
          fontSize: "var(--text-md)",
          marginBottom: "2.5rem",
          maxWidth: 560,
          borderLeft: "2px solid var(--accent)",
          paddingLeft: "1rem",
        }}
      >
        {t("ContactDescription")}
      </p>

      {/* Survey CTA — dev only */}
      {process.env.NODE_ENV === "development" && (
        <div
          className="editorial-shadow"
          style={{
            borderRadius: "var(--radius)",
            padding: "1.5rem",
            backgroundColor: "var(--bg-lowest)",
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
                fontWeight: "var(--header-weight)",
                color: "var(--accent)",
                marginBottom: "0.25rem",
              }}
            >
              {t("SurveySupport")}
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: 0,
                fontSize: "var(--text-base)",
              }}
            >
              {t("SurveySupportDescription")}
            </p>
          </div>
          <a
            href={process.env.NEXT_PUBLIC_SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download"
            style={{ textDecoration: "none" }}
          >
            {t("SurveySupportButton")}
          </a>
        </div>
      )}

      {/* Contact */}
      <SectionHeading>{t("Contact")}</SectionHeading>
      <p
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
          fontSize: "var(--text-base)",
        }}
      >
        {t("EmailSupportDescription")}
      </p>

      <a
        href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
        onMouseEnter={() => setEmailHovered(true)}
        onMouseLeave={() => setEmailHovered(false)}
        className="editorial-shadow"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          backgroundColor: emailHovered
            ? "var(--accent-12)"
            : "var(--bg-lowest)",
          borderRadius: "var(--radius)",
          padding: "1.25rem 1.5rem",
          textDecoration: "none",
          marginBottom: "2rem",
          transition: "background-color 0.2s, transform 0.2s",
          transform: emailHovered ? "translateY(-2px)" : "translateY(0)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "var(--radius)",
            background: emailHovered ? "var(--accent)" : "var(--accent-12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.2s",
          }}
        >
          <EnvelopeSimpleIcon
            size={20}
            color={emailHovered ? "#fff" : "var(--accent)"}
            weight="fill"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.1rem",
            flex: 1,
          }}
        >
          <span
            style={{
              fontWeight: "var(--header-weight)",
              color: "var(--text)",
              fontSize: "var(--text-base)",
            }}
          >
            {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
          </span>
          <span
            style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}
          >
            {t("EmailSupport")}
          </span>
        </div>
      </a>

      {/* Social */}
      <SectionHeading>{t("SocialMedia")}</SectionHeading>
      <p
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
          fontSize: "var(--text-base)",
        }}
      >
        {t("SocialMediaDescription")}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0.75rem",
          marginBottom: "0.5rem",
        }}
      >
        <SocialCard
          label="Instagram"
          href={`https://www.instagram.com/${process.env.NEXT_PUBLIC_SUPPORT_INSTAGRAM}`}
          handle={`@${process.env.NEXT_PUBLIC_SUPPORT_INSTAGRAM}`}
          Icon={InstagramLogoIcon}
        />
        <SocialCard
          label="Twitter"
          href={`https://x.com/${process.env.NEXT_PUBLIC_SUPPORT_TWITTER}`}
          handle={`@${process.env.NEXT_PUBLIC_SUPPORT_TWITTER}`}
          Icon={TwitterLogoIcon}
        />
      </div>

      {/* FAQ */}
      <SectionHeading>{t("FAQ")}</SectionHeading>
      <FaqList content={i18n.language === "es" ? faqEs : faqEn} />
    </div>
  );
}

export default function Support({
  faqEn,
  faqEs,
}: {
  faqEn: string;
  faqEs: string;
}) {
  const { t } = useTranslation();

  usePageTracking("support");

  return (
    <PageLayout title={t("Support")}>
      <SupportContent faqEn={faqEn} faqEs={faqEs} />
    </PageLayout>
  );
}
