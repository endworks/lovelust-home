"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePageTracking } from "../../hooks/usePageTracking";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import PageLayout from "../../components/PageLayout";
import FaqList from "../../components/FaqList";
import {
  EnvelopeSimpleIcon,
  ArrowRightIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  HeartIcon,
} from "@phosphor-icons/react";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.5rem",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          width: "0.3rem",
          height: "1.5rem",
          borderRadius: "9999px",
          background: "linear-gradient(180deg, var(--c-primary) 0%, var(--c-primary-60) 100%)",
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1.375rem",
          fontWeight: 800,
          color: "var(--text)",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "0.7rem",
        fontWeight: 700,
        color: "var(--c-primary)",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        margin: "0 0 0.5rem",
        opacity: 0.8,
      }}
    >
      {children}
    </p>
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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.625rem",
        backgroundColor: hovered ? "var(--c-primary-12)" : "var(--bg-lowest)",
        borderRadius: "1.25rem",
        padding: "1.25rem",
        textDecoration: "none",
        transition: "background-color 0.2s, transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 28px var(--c-primary-20)" : "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "0.875rem",
          background: hovered ? "var(--c-primary)" : "var(--c-primary-12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
          boxShadow: hovered ? "0 4px 12px var(--c-primary-40)" : "none",
        }}
      >
        <Icon size={20} color={hovered ? "#fff" : "var(--c-primary)"} weight="fill" />
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 800,
            color: "var(--text)",
            fontSize: "0.875rem",
            margin: "0 0 0.15rem",
          }}
        >
          {label}
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", margin: 0 }}>{handle}</p>
      </div>
    </a>
  );
}

function SupportContent({ faqEn, faqEs }: { faqEn: string; faqEs: string }) {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <div>
      {/* Hero intro card */}
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--c-primary-12) 0%, var(--c-primary-06) 60%, transparent 100%)",
          borderRadius: "1.75rem",
          padding: "2rem",
          marginBottom: "2.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            right: "-2rem",
            top: "-2rem",
            width: "9rem",
            height: "9rem",
            borderRadius: "50%",
            background: "var(--c-primary-18)",
            filter: "blur(28px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "4rem",
            bottom: "-1.5rem",
            width: "5rem",
            height: "5rem",
            borderRadius: "50%",
            background: "var(--c-primary-25)",
            filter: "blur(16px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "0.875rem",
              background: "var(--c-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px var(--c-primary-40)",
              flexShrink: 0,
            }}
          >
            <HeartIcon size={20} color="#fff" weight="fill" />
          </div>
          <SubLabel>{t("Support")}</SubLabel>
        </div>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            color: "var(--text)",
            fontSize: "1rem",
            margin: 0,
            lineHeight: 1.6,
            position: "relative",
          }}
        >
          {t("ContactDescription")}
        </p>
      </div>

      {/* Survey CTA — dev only */}
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
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: 0,
                fontSize: "0.9rem",
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

      {/* Email */}
      <SubLabel>{t("EmailSupport")}</SubLabel>
      <p
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: "1rem",
          fontSize: "0.9rem",
        }}
      >
        {t("EmailSupportDescription")}
      </p>
      <a
        href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
        onMouseEnter={() => setEmailHovered(true)}
        onMouseLeave={() => setEmailHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          background: emailHovered
            ? "linear-gradient(135deg, var(--c-primary-20) 0%, var(--c-primary-12) 100%)"
            : "linear-gradient(135deg, var(--c-primary-12) 0%, var(--c-primary-06) 100%)",
          borderRadius: "1.25rem",
          padding: "1.25rem 1.5rem",
          textDecoration: "none",
          marginBottom: "2rem",
          transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
          transform: emailHovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: emailHovered
            ? "0 12px 28px var(--c-primary-25)"
            : "0 2px 8px var(--c-primary-12)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "0.875rem",
            background: "var(--c-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 4px 14px var(--c-primary-40)",
          }}
        >
          <EnvelopeSimpleIcon size={22} color="#fff" weight="fill" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", flex: 1 }}>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "var(--c-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              opacity: 0.7,
            }}
          >
            {t("EmailSupport")}
          </span>
          <span
            style={{
              fontWeight: 800,
              color: "var(--text)",
              fontSize: "0.95rem",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
          </span>
        </div>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: emailHovered ? "var(--c-primary)" : "var(--c-primary-12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
            transform: emailHovered ? "translateX(2px)" : "translateX(0)",
            flexShrink: 0,
          }}
        >
          <ArrowRightIcon size={16} color={emailHovered ? "#fff" : "var(--c-primary)"} />
        </div>
      </a>

      {/* Social */}
      <SubLabel>{t("SocialMedia")}</SubLabel>
      <p
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.7,
          marginBottom: "1rem",
          fontSize: "0.9rem",
        }}
      >
        {t("SocialMediaDescription")}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
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

export default function Support({ faqEn, faqEs }: { faqEn: string; faqEs: string }) {
  const { t } = useTranslation();

  usePageTracking("support");

  return (
    <PageLayout title={t("Support")}>
      <SupportContent faqEn={faqEn} faqEs={faqEs} />
    </PageLayout>
  );
}
