"use client";

import { StarIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import type { StoreRating, StoreRatings } from "../../lib/storeRatings";
import PhoneMockup from "../PhoneMockup";
import RatingStars from "../RatingStars";
import StoreBadge from "../StoreBadge";

const chipStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.3rem 0.7rem",
  borderRadius: "999px",
  border: "1px solid var(--border)",
  fontSize: "var(--text-sm)",
  color: "var(--text)",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

function StoreChip({
  label,
  rating,
}: {
  label: string;
  rating: StoreRating | null;
}) {
  return (
    <span style={chipStyle}>
      {rating ? (
        <>
          <RatingStars rating={rating.rating} size={13} />
          <strong>{rating.rating.toFixed(1)}</strong>
          {rating.count > 0 && (
            <span style={{ color: "var(--text-muted)" }}>
              ({rating.count.toLocaleString()})
            </span>
          )}
          <span style={{ color: "var(--text-muted)" }}>· {label}</span>
        </>
      ) : (
        <>
          <StarIcon size={14} weight="fill" color="var(--accent)" />
          {label}
        </>
      )}
    </span>
  );
}

interface HeroSectionProps {
  isDark: boolean;
  storeRatings: StoreRatings;
}

export default function HeroSection({
  isDark,
  storeRatings,
}: HeroSectionProps) {
  const { t, i18n } = useTranslation();

  return (
    <section
      style={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: "var(--bg)",
      }}
    >
      {/* Background overlays */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "55%",
            height: "70%",
            background:
              "radial-gradient(ellipse at center, var(--accent-18) 0%, transparent 70%)",
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
              "radial-gradient(ellipse at center, var(--accent-0d) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="hero-inner">
        {/* Left: text */}
        <div style={{ minWidth: 0 }}>
          <h1
            className="font-headline"
            style={{
              fontSize: "var(--text-display)",
              fontWeight: "var(--header-weight)",
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-accent)",
                color: "var(--text-muted)",
              }}
            >
              {t("HeroTaglineMain")}
            </span>
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-accent)",
                color: "var(--accent)",
                fontStyle: "italic",
                marginLeft: "10%",
              }}
            >
              {t("HeroTaglineAccent")}
            </span>
          </h1>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "stretch",
              maxWidth: 400,
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: 3,
                borderRadius: 9999,
                flexShrink: 0,
                background: "var(--accent)",
              }}
            />
            <p
              style={{
                fontSize: "var(--text-md)",
                lineHeight: 1.75,
                color: "var(--text-muted)",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {t("HeroDescription")}
            </p>
          </div>

          {/* Download buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <StoreBadge platform="appStore" />
            <StoreBadge platform="googlePlay" />
          </div>

          {/* Social proof — link out to the real, verifiable store
              listings instead of a hardcoded rating that contradicts the
              actual stores at the install handoff. Premortem failure #4. */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <StoreChip label="App Store" rating={storeRatings.appStore} />
            <StoreChip label="Google Play" rating={storeRatings.googlePlay} />
          </div>
        </div>

        {/* Right: phone mockup */}
        <PhoneMockup language={i18n.language} isDark={isDark} />
      </div>
    </section>
  );
}
