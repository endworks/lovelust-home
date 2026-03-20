/* eslint-disable @next/next/no-img-element */
"use client";

import { useAptabase } from "@aptabase/react";
import {
  AppStoreLogoIcon,
  ChartLineUpIcon,
  CrownIcon,
  GooglePlayLogoIcon,
  HeartIcon,
  LockIcon,
  PencilLineIcon,
  ShieldCheckIcon,
  StarIcon,
  UserPlusIcon,
} from "@phosphor-icons/react";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import FaqList from "../components/FaqList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RatingStars from "../components/RatingStars";

function ThemeAwareScreenshot({
  language,
  style = {},
  className = "",
}: {
  language: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const isEs = language === "es";
  return (
    <>
      <img
        src={isEs ? "/screenshotDarkSpanish.png" : "/screenshotDark.png"}
        alt=""
        className={`dark-only ${className}`}
        style={{ ...style, display: "block" }}
      />
      <img
        src={isEs ? "/screenshotSpanish.png" : "/screenshot.png"}
        alt=""
        className={`light-only ${className}`}
        style={{ ...style, display: "block" }}
      />
    </>
  );
}

export default function HomeClient({
  faqEn,
  faqEs,
}: {
  faqEn: string;
  faqEs: string;
}) {
  const { t, i18n } = useTranslation();
  const { trackEvent } = useAptabase();
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
    trackEvent("page", { page: "home" });
  }, [trackEvent]);

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
  }

  useEffect(() => {
    document.title = t("Title") + ": " + t("Subtitle");
  }, [i18n, t]);


  const px = isMobile ? "1.25rem" : "2rem";

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* ── Fixed Nav ─────────────────────────────────────────────────── */}
      <Header
        isMobile={isMobile}
        isDark={isDark}
        toggleDark={toggleDark}
        switchLanguage={switchLanguage}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100svh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background gradient blobs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-10%",
              right: "-5%",
              width: "55%",
              height: "70%",
              background:
                "radial-gradient(ellipse at center, var(--c-primary-18) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "-10%",
              width: "45%",
              height: "60%",
              background:
                "radial-gradient(ellipse at center, var(--c-primary-0d) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "40%",
              width: "30%",
              height: "40%",
              background:
                "radial-gradient(ellipse at center, var(--c-secondary)08 0%, transparent 70%)",
            }}
          />
        </div>

        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: isMobile ? "7rem 1.25rem 4rem" : "0 2rem",
            width: "100%",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
            gap: isMobile ? "3rem" : "5rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left: text */}
          <div style={{ minWidth: 0 }}>
            <h1
              className="font-headline"
              style={{
                fontSize: "clamp(2.75rem,5.5vw,5.25rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                marginBottom: "1.5rem",
                color: "var(--text)",
              }}
            >
              <span style={{ whiteSpace: "nowrap", display: "block" }}>
                {t("HeroTaglineMain")}
              </span>
              <span style={{ whiteSpace: "nowrap", display: "block", color: "var(--c-primary)" }}>
                {t("HeroTaglineAccent")}
              </span>
            </h1>

            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                lineHeight: 1.75,
                color: "var(--text-muted)",
                maxWidth: 440,
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              {t("HeroDescription")}
            </p>

            {/* Star rating */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "2.5rem",
              }}
            >
              <RatingStars rating={4.9} size={18} />
              <span
                style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}
              >
                <strong style={{ color: "var(--text)" }}>4.9</strong> ·{" "}
                {t("ThousandsOfUsers")}
              </span>
            </div>

            {/* Download buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href={
                  process.env.NEXT_PUBLIC_BETA === "true"
                    ? process.env.NEXT_PUBLIC_TESTFLIGHT_URL
                    : process.env.NEXT_PUBLIC_APPSTORE_URL
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-store"
              >
                <AppStoreLogoIcon size={24} />
                <div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      opacity: 0.8,
                    }}
                  >
                    {process.env.NEXT_PUBLIC_BETA === "true"
                      ? t("AvailableOnTestFlight")
                      : t("DownloadOnThe")}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: "0.975rem" }}>
                    {process.env.NEXT_PUBLIC_BETA === "true"
                      ? "TestFlight"
                      : "App Store"}
                  </div>
                </div>
              </a>

              <a
                href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-store"
              >
                <GooglePlayLogoIcon size={24} />
                <div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      opacity: 0.8,
                    }}
                  >
                    {t("GetItOn")}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "0.975rem",
                    }}
                  >
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: "center",
              minWidth: 0,
            }}
          >
            {/* Wrapper for phone + rings to keep them aligned together to the right */}
            <div
              style={{
                position: "relative",
                width: isMobile ? "100%" : 420,
                height: isMobile ? "100%" : 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Glow ring behind phone */}
              <div
                style={{
                  position: "absolute",
                  width: "65%",
                  height: "35%",
                  bottom: "8%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--c-primary)",
                  borderRadius: "50%",
                  filter: "blur(50px)",
                  opacity: isDark ? 0.3 : 0.18,
                }}
              />
              {/* Outer decorative ring */}
              <div
                style={{
                  position: "absolute",
                  width: isMobile ? 300 : 420,
                  height: isMobile ? 300 : 420,
                  borderRadius: "50%",
                  border: "1px solid var(--c-primary-20)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: isMobile ? 240 : 340,
                  height: isMobile ? 240 : 340,
                  borderRadius: "50%",
                  border: "1px solid var(--c-primary-15)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* iPhone frame */}
              <div style={{ position: "relative", zIndex: 2 }}>
                {/* Chassis */}
                <div
                  style={{
                    position: "relative",
                    width: isMobile ? 232 : 320,
                    background:
                      "linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 45%, #2c2c2e 100%)",
                    borderRadius: isMobile ? "46px" : "56px",
                    padding: "13px",
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.13), 0 50px 100px -20px rgba(0,0,0,${isDark ? "0.7" : "0.45"}), 0 0 0 1px rgba(0,0,0,0.5), 0 20px 60px -10px rgba(246,30,109,${isDark ? "0.35" : "0.2"})`,
                  }}
                >
                  {/* Mute switch */}
                  <div
                    style={{
                      position: "absolute",
                      left: -3,
                      top: "13%",
                      width: 3,
                      height: 18,
                      background: "#2a2a2c",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  {/* Volume up */}
                  <div
                    style={{
                      position: "absolute",
                      left: -3,
                      top: "20%",
                      width: 3,
                      height: 30,
                      background: "#2a2a2c",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  {/* Volume down */}
                  <div
                    style={{
                      position: "absolute",
                      left: -3,
                      top: "29%",
                      width: 3,
                      height: 30,
                      background: "#2a2a2c",
                      borderRadius: "2px 0 0 2px",
                    }}
                  />
                  {/* Power button */}
                  <div
                    style={{
                      position: "absolute",
                      right: -3,
                      top: "21%",
                      width: 3,
                      height: 54,
                      background: "#2a2a2c",
                      borderRadius: "0 2px 2px 0",
                    }}
                  />

                  {/* Screen */}
                  <div
                    style={{
                      borderRadius: isMobile ? "34px" : "44px",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: "#000",
                    }}
                  >
                    {/* Dynamic Island */}
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "32%",
                        height: 30,
                        backgroundColor: "#000",
                        borderRadius: 20,
                        zIndex: 10,
                      }}
                    />
                    <ThemeAwareScreenshot
                      language={i18n.language}
                      style={{ width: "100%", height: "auto" }}
                    />
                    {/* Home indicator */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "28%",
                        height: 4,
                        backgroundColor: "rgba(255,255,255,0.3)",
                        borderRadius: 2,
                        zIndex: 10,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating privacy pill */}
              {!isMobile && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "12%",
                    left: "-4%",
                    zIndex: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "var(--bg-lowest)",
                    borderRadius: "2rem",
                    padding: "0.625rem 1rem",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <LockIcon size={16} color="var(--c-primary)" />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--c-primary)",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    AES-CFB Encrypted
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bento features — "Crafted for trust." ─────────────────────── */}
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
                    style={{
                      width: "100%",
                      height: "auto",
                      opacity: 0.7,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── App Preview — "Elegant by design." ───────────────────────── */}
      {process.env.NODE_ENV === "development" && (
        <section
          style={{
            padding: isMobile ? "4rem 0" : "8rem 2rem 8rem",
            overflowX: "hidden",
            backgroundColor: "var(--bg-low)",
          }}
        >
          <div
            style={{
              maxWidth: 1152,
              margin: "0 auto",
              textAlign: "center",
              marginBottom: isMobile ? "3rem" : "5rem",
              paddingLeft: px,
              paddingRight: px,
            }}
          >
            <h2
              className="font-headline"
              style={{
                fontSize: "clamp(1.75rem,4vw,2.5rem)",
                fontWeight: 700,
                color: "var(--c-primary)",
                marginBottom: "1.5rem",
              }}
            >
              {t("ElegantByDesign")}
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t("ElegantByDesignDesc")}
            </p>
          </div>
          {isMobile ? (
            /* Mobile: single centered phone */
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "72%",
                  maxWidth: 260,
                  backgroundColor: "var(--bg-highest)",
                  borderRadius: "2.5rem",
                  border: "5px solid var(--bg-low)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
                  overflow: "hidden",
                }}
              >
                <ThemeAwareScreenshot
                  language={i18n.language}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          ) : (
            /* Desktop: 3 phones, section clips overflow */
            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingTop: "3rem",
                paddingBottom: "3rem",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 260,
                  backgroundColor: "var(--bg-highest)",
                  borderRadius: "3rem",
                  border: "8px solid var(--bg-low)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                }}
              >
                <ThemeAwareScreenshot
                  language={i18n.language}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                style={{
                  flexShrink: 0,
                  width: 290,
                  backgroundColor: "var(--bg-highest)",
                  borderRadius: "3rem",
                  border: "8px solid var(--bg-low)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
                  overflow: "hidden",
                  transform: "translateY(-2rem)",
                }}
              >
                <ThemeAwareScreenshot
                  language={i18n.language}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                style={{
                  flexShrink: 0,
                  width: 260,
                  backgroundColor: "var(--bg-highest)",
                  borderRadius: "3rem",
                  border: "8px solid var(--bg-low)",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                }}
              >
                <ThemeAwareScreenshot
                  language={i18n.language}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          )}
        </section>
      )}

      {/* ── Our Values ────────────────────────────────────────────────── */}
      <section
        style={{
          padding: isMobile ? "4rem 1.25rem" : "6rem 2rem",
          backgroundColor: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              className="font-headline"
              style={{
                fontSize: "clamp(1.75rem,4vw,2.5rem)",
                fontWeight: 700,
                color: "var(--c-primary)",
                marginBottom: "1rem",
              }}
            >
              {t("OurValues")}
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t("OurValuesDesc")}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: isMobile ? "2rem" : "3rem",
            }}
          >
            {[
              {
                Icon: ShieldCheckIcon,
                titleKey: "Value1Title",
                descKey: "Value1Desc",
              },
              {
                Icon: HeartIcon,
                titleKey: "Value2Title",
                descKey: "Value2Desc",
              },
              {
                Icon: PencilLineIcon,
                titleKey: "Value3Title",
                descKey: "Value3Desc",
              },
            ].map(({ Icon, titleKey, descKey }) => (
              <div key={titleKey} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "var(--c-primary-0d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <Icon size={40} color="var(--c-primary)" />
                </div>
                <h3
                  className="font-headline"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--c-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  {t(titleKey)}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                  }}
                >
                  {t(descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      {process.env.NODE_ENV === "development" && (
        <section
          style={{
            padding: isMobile ? "4rem 1.25rem" : "6rem 2rem",
            backgroundColor: "var(--bg-low)",
          }}
        >
          <div style={{ maxWidth: 1152, margin: "0 auto" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: isMobile ? "2.5rem" : "4rem",
              }}
            >
              <h2
                className="font-headline"
                style={{
                  fontSize: "clamp(1.75rem,4vw,2.5rem)",
                  fontWeight: 700,
                  color: "var(--c-primary)",
                  marginBottom: "1rem",
                }}
              >
                {t("TestimonialsTitle")}
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  maxWidth: 480,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                {t("TestimonialsDesc")}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  quote:
                    "Finally an app that takes privacy seriously. My data stays on my phone, no accounts, no cloud. Exactly what I needed.",
                  name: "Sophie R.",
                  platform: "App Store",
                  rating: 5,
                },
                {
                  quote:
                    "The design is beautiful and the tracking is incredibly thoughtful. I use it every week and it has genuinely improved how I think about my health.",
                  name: "Marco T.",
                  platform: "Google Play",
                  rating: 4.5,
                },
                {
                  quote:
                    "Love the dark mode and how clean everything looks. The stats section is so well done — gives me real insights without feeling clinical.",
                  name: "Alicia M.",
                  platform: "App Store",
                  rating: 5,
                },
                {
                  quote:
                    "Simple to use but surprisingly deep. The partner tracking and notes feature are brilliant. Highly recommend.",
                  name: "James K.",
                  platform: "Google Play",
                  rating: 4.5,
                },
                {
                  quote:
                    "I was skeptical at first but the privacy-first approach won me over. No sign-up required and everything is encrypted.",
                  name: "Lea V.",
                  platform: "App Store",
                  rating: 4,
                },
                {
                  quote:
                    "Best intimate health app I've tried. The interface feels premium and the data export works perfectly. Worth every penny.",
                  name: "David N.",
                  platform: "Google Play",
                  rating: 5,
                },
              ].map(({ quote, name, platform, rating }) => (
                <div
                  key={name}
                  className="editorial-shadow"
                  style={{
                    backgroundColor: "var(--bg-lowest)",
                    borderRadius: "1.5rem",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <RatingStars rating={rating} showScore={false} />
                  {/* Quote */}
                  <p
                    style={{
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      fontSize: "0.9rem",
                      flex: 1,
                    }}
                  >
                    {quote}
                  </p>
                  {/* Reviewer */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: "var(--c-primary)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {name}
                    </span>
                    <span
                      style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                    >
                      {platform}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: isMobile ? "4rem 1.25rem" : "6rem 2rem",
          backgroundColor: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "2.5rem" : "4rem",
            }}
          >
            <h2
              className="font-headline"
              style={{
                fontSize: "clamp(1.75rem,4vw,2.5rem)",
                fontWeight: 700,
                color: "var(--c-primary)",
                marginBottom: "1rem",
              }}
            >
              {t("FAQ")}
            </h2>
          </div>
          <FaqList content={i18n.language === "es" ? faqEs : faqEn} />
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        style={{
          padding: isMobile ? "4rem 1.25rem" : "8rem 2rem",
          backgroundColor: "var(--bg-low)",
        }}
      >
        <div
          style={{
            maxWidth: 896,
            margin: "0 auto",
            backgroundColor: "var(--c-primary)",
            borderRadius: isMobile ? "2rem" : "3rem",
            padding: isMobile ? "2.5rem 1.5rem" : "4rem",
            textAlign: "center",
            color: "var(--c-on-primary)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 256,
              height: 256,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              filter: "blur(3rem)",
              transform: "translate(33%, -33%)",
            }}
          />
          <h2
            className="font-headline"
            style={{
              fontSize: "clamp(1.75rem,5vw,3.25rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {t("CtaTitle")}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              marginBottom: "2.5rem",
              maxWidth: 480,
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
              position: "relative",
              zIndex: 1,
            }}
          >
            {t("CtaDescription")}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href={
                process.env.NEXT_PUBLIC_BETA === "true"
                  ? process.env.NEXT_PUBLIC_TESTFLIGHT_URL
                  : process.env.NEXT_PUBLIC_APPSTORE_URL
              }
              target="_blank"
              rel="noopener noreferrer"
              className="btn-store cta"
              style={{ fontWeight: 700 }}
            >
              <AppStoreLogoIcon size={24} />
              <span>App Store</span>
            </a>
            <a
              href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-store cta"
              style={{ fontWeight: 700 }}
            >
              <GooglePlayLogoIcon size={24} />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <Footer isMobile={isMobile} px={px} />
    </div>
  );
}
