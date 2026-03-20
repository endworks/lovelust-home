"use client";

import { StarIcon, StarHalfIcon } from "@phosphor-icons/react";

interface RatingStarsProps {
  rating: number;
  size?: number;
  color?: string;
}

export default function RatingStars({
  rating,
  size = 18,
  color = "var(--c-primary)",
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const remainder = rating % 1;
  const hasHalfStar = remainder >= 0.25 && remainder < 0.75;
  const extraFullStar = remainder >= 0.75 ? 1 : 0;

  const totalFullStars = fullStars + extraFullStar;
  const emptyStars = Math.max(0, 5 - totalFullStars - (hasHalfStar ? 1 : 0));

  return (
    <div style={{ display: "flex", gap: "0.2rem" }}>
      {/* Full Stars */}
      {Array.from({ length: totalFullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} size={size} color={color} weight="fill" />
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <StarHalfIcon size={size} color={color} weight="fill" />
      )}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={`empty-${i}`} size={size} color={color} weight="regular" />
      ))}
    </div>
  );
}
