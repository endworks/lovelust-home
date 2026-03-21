"use client";

import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import RatingStars from "../RatingStars";

const TESTIMONIALS = [
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
      "Love the dark mode and how clean everything looks. The stats section is so well done, gives me real insights without feeling clinical.",
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
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1.25rem",
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
