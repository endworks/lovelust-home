"use client";

import { LockIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import ThemeAwareScreenshot from "./ThemeAwareScreenshot";

interface PhoneMockupProps {
  language: string;
  isDark: boolean;
}

/**
 * iPhone-style phone frame with dynamic island, glow rings, and floating pill.
 */
export default function PhoneMockup({ language, isDark }: PhoneMockupProps) {
  const { t } = useTranslation();
  return (
    <div className="phone-wrap" data-testid="phone-mockup">
      <div className="phone-container">
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
          className="phone-ring-outer"
          style={{
            position: "absolute",
            borderRadius: "50%",
            border: "1px solid var(--c-primary-20)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="phone-ring-inner"
          style={{
            position: "absolute",
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
            className="phone-chassis"
            style={{
              position: "relative",
              background:
                "linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 45%, #2c2c2e 100%)",
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
              className="phone-chassis-screen"
              style={{
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
                language={language}
                name="home"
                priority
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

        {/* Floating privacy pill — hidden on mobile via CSS */}
        <div
          className="phone-pill"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "-4%",
            zIndex: 3,
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
            {t("AesCfbEncrypted")}
          </span>
        </div>
      </div>
    </div>
  );
}
