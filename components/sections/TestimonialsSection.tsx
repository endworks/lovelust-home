"use client";

import { useTranslation } from "react-i18next";
import RatingStars from "../RatingStars";

interface Testimonial {
  quote: string;
  name: string;
  platform: string;
  rating: number;
}

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const { t } = useTranslation();

  return (
    <section className="section section--alt">
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "var(--text-section)",
              fontWeight: "var(--header-weight)",
              color: "var(--accent)",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {testimonials.map(({ quote, name, platform, rating }) => (
            <div
              key={name}
              className="editorial-shadow"
              style={{
                backgroundColor: "var(--bg-lowest)",
                borderRadius: "var(--radius)",
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
                  fontSize: "var(--text-base)",
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
                    fontWeight: "var(--header-alt-weight)",
                    color: "var(--accent)",
                    fontSize: "var(--text-base)",
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontSize: "var(--text-sm)",
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
