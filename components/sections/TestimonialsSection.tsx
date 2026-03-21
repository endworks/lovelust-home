"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import RatingStars from "../RatingStars";

const TESTIMONIALS = [
  {
    quote:
      "I just downloaded it. It seems good so far. I'll update my comment after using it for a while.",
    name: "Jimmy Jump888",
    platform: "Google Play",
    rating: 5,
  },
  {
    quote:
      "He utilizado la app durante estos días y la verdad es que si eres muy activo/a es algo que no viene nada mal. Sobre todo para quitarte quebraderos de cabeza y siempre estar al día con lo que ha podido pasar.",
    name: "Senbetsu",
    platform: "App Store",
    rating: 5,
  },
  {
    quote:
      "La aplicación es muy clara y fácil de utilizar me permite registrar todo bien y que tenga el Apple salud es un extra muy bueno.",
    name: "Adan López",
    platform: "App Store",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
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
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {TESTIMONIALS.map(({ quote, name, platform, rating }) => (
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
              <RatingStars rating={rating} />
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
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
