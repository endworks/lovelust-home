"use client";

import {
  ChartLineUpIcon,
  CrownIcon,
  LockIcon,
  UserPlusIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import ThemeAwareScreenshot from "../ThemeAwareScreenshot";

export default function FeaturesSection() {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      id="features"
      style={{
        padding: isMobile ? "4rem 1.25rem" : "6rem 2rem",
        backgroundColor: "var(--bg-low)",
        borderRadius: "4rem 4rem 0 0",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div style={{ marginBottom: isMobile ? "2.5rem" : "4rem" }}>
          <h2
            className="font-headline"
            style={{
              fontSize: "clamp(1.75rem,4vw,2.5rem)",
              fontWeight: 700,
              color: "var(--c-primary)",
              marginBottom: "1rem",
            }}
          >
            {t("CraftedForTrust")}
          </h2>
          <div
            style={{
              height: 4,
              width: 96,
              backgroundColor: "var(--c-primary-container)",
              borderRadius: 9999,
              opacity: 0.3,
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "1rem" : "2rem",
          }}
        >
          {/* Card 1: Privacy (spans 2 cols on desktop) */}
          <div
            className="editorial-shadow"
            style={{
              gridColumn: isMobile ? "span 1" : "span 2",
              backgroundColor: "var(--bg-lowest)",
              padding: isMobile ? "2rem" : "2.5rem",
              borderRadius: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LockIcon
              size={40}
              color="var(--c-primary)"
              style={{ display: "block", marginBottom: "1.5rem" }}
            />
            <h3
              className="font-headline"
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--c-primary)",
                marginBottom: "1rem",
              }}
            >
              {t("BentoPrivacyTitle")}
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              {t("BentoPrivacyDesc")}
            </p>
          </div>

          {/* Card 2: Onboarding */}
          <div
            className="editorial-shadow"
            style={{
              backgroundColor: "var(--c-primary)",
              color: "var(--c-on-primary)",
              padding: isMobile ? "2rem" : "2.5rem",
              borderRadius: "2rem",
            }}
          >
            <UserPlusIcon
              size={40}
              color="rgba(255,255,255,0.8)"
              style={{ display: "block", marginBottom: "1.5rem" }}
            />
            <h3
              className="font-headline"
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              {t("BentoOnboardingTitle")}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              {t("BentoOnboardingDesc")}
            </p>
          </div>

          {/* Card 3: Stats */}
          <div
            className="editorial-shadow"
            style={{
              backgroundColor: "var(--c-secondary-container)",
              padding: isMobile ? "2rem" : "2.5rem",
              borderRadius: "2rem",
            }}
          >
            <ChartLineUpIcon
              size={40}
              color="var(--c-primary)"
              style={{ display: "block", marginBottom: "1.5rem" }}
            />
            <h3
              className="font-headline"
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--c-primary)",
                marginBottom: "1rem",
              }}
            >
              {t("BentoStatsTitle")}
            </h3>
            <p style={{ color: "#4d444b", lineHeight: 1.7 }}>
              {t("BentoStatsDesc")}
            </p>
          </div>

          {/* Card 4: Premium (spans 2 cols on desktop) */}
          <div
            className="editorial-shadow"
            style={{
              gridColumn: isMobile ? "span 1" : "span 2",
              backgroundColor: "var(--bg-lowest)",
              padding: isMobile ? "2rem" : "2.5rem",
              borderRadius: "2rem",
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 200 }}>
              <CrownIcon
                size={40}
                color="var(--c-primary)"
                style={{ display: "block", marginBottom: "1.5rem" }}
              />
              <h3
                className="font-headline"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--c-primary)",
                  marginBottom: "1rem",
                }}
              >
                {t("BentoPremiumTitle")}
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                {t("BentoPremiumDesc")}
              </p>
            </div>
            {!isMobile && (
              <div
                style={{
                  width: 160,
                  borderRadius: "1rem",
                  overflow: "hidden",
                  backgroundColor: "var(--bg-high)",
                  flexShrink: 0,
                }}
              >
                <ThemeAwareScreenshot
                  language={i18n.language}
                  style={{ width: "100%", height: "auto", opacity: 0.7 }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
