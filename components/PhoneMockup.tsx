"use client";

import { LockIcon } from "@phosphor-icons/react";
import ThemeAwareScreenshot from "./ThemeAwareScreenshot";

interface PhoneMockupProps {
  language: string;
  isDark: boolean;
  isMobile: boolean;
}

/**
 * iPhone-style phone frame with dynamic island, glow rings, and floating pill.
 */
export default function PhoneMockup({
  language,
  isDark,
  isMobile,
}: PhoneMockupProps) {
  return (
    <div
      data-testid="phone-mockup"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: isMobile ? "center" : "flex-end",
        alignItems: "center",
        minWidth: 0,
      }}
    >
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
                language={language}
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
  );
}
