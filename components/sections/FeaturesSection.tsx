"use client";

import {
  ChartLineUpIcon,
  CrownIcon,
  LockIcon,
  UserPlusIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import ThemeAwareScreenshot from "../ThemeAwareScreenshot";

export default function FeaturesSection() {
  const { t, i18n } = useTranslation();

  return (
    <section id="features" className="section section--alt">
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(2.5rem, 4vw, 4rem)" }}>
          <h2
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-section)",
              fontWeight: 700,
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            {t("CraftedForTrust")}
          </h2>
          <div
            style={{
              height: 4,
              width: 96,
              backgroundColor: "var(--accent)",
              borderRadius: 9999,
              opacity: 1,
            }}
          />
        </div>

        <div className="features-grid">
          {/* Card 1: Privacy (spans 2 cols on desktop) */}
          <div
            className="editorial-shadow features-grid__span-2"
            style={{
              backgroundColor: "var(--bg-lowest)",
              padding: "clamp(2rem, 3vw, 2.5rem)",
              borderRadius: "var(--radius)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LockIcon
              size={40}
              color="var(--accent)"
              style={{ display: "block", marginBottom: "1.5rem" }}
            />
            <h3
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-2xl)",
                fontWeight: 600,
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {t("BentoPrivacyTitlePrefix")}
              <span style={{ fontStyle: "italic" }}>
                {t("BentoPrivacyTitleAccent")}
              </span>
              {t("BentoPrivacyTitleSuffix")}
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
              backgroundColor: "var(--accent)",
              color: "var(--on-accent)",
              padding: "clamp(2rem, 3vw, 2.5rem)",
              borderRadius: "var(--radius)",
            }}
          >
            <UserPlusIcon
              size={40}
              color="rgba(255,255,255,0.8)"
              style={{ display: "block", marginBottom: "1.5rem" }}
            />
            <h3
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-2xl)",
                fontWeight: 600,
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
              backgroundColor: "var(--secondary-bg)",
              padding: "clamp(2rem, 3vw, 2.5rem)",
              borderRadius: "var(--radius)",
            }}
          >
            <ChartLineUpIcon
              size={40}
              color="var(--accent)"
              style={{ display: "block", marginBottom: "1.5rem" }}
            />
            <h3
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "var(--text-2xl)",
                fontWeight: 600,
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {t("BentoStatsTitle")}
            </h3>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              {t("BentoStatsDesc")}
            </p>
          </div>

          {/* Card 4: Premium (spans 2 cols on desktop) */}
          <div
            className="editorial-shadow features-grid__span-2"
            style={{
              backgroundColor: "var(--bg-lowest)",
              padding: "clamp(2rem, 3vw, 2.5rem)",
              borderRadius: "var(--radius)",
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 200 }}>
              <CrownIcon
                size={40}
                color="var(--accent)"
                style={{ display: "block", marginBottom: "1.5rem" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 600,
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                {t("BentoPremiumTitle")}
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                {t("BentoPremiumDesc")}
              </p>
            </div>
            <div
              className="hidden-mobile"
              style={{
                width: 160,
                borderRadius: "var(--radius)",
                overflow: "hidden",
                backgroundColor: "var(--bg-high)",
                flexShrink: 0,
              }}
            >
              <ThemeAwareScreenshot
                language={i18n.language}
                name="paywall"
                style={{ width: "100%", height: "auto", opacity: 0.7 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
