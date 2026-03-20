"use client";

import { useMediaQuery } from "../hooks/useMediaQuery";

interface SectionContainerProps {
  children: React.ReactNode;
  /** Override the default background color */
  background?: string;
  /** Additional CSS class names */
  className?: string;
  /** Override max-width (default: 1152) */
  maxWidth?: number;
  /** HTML id for anchor-linking */
  id?: string;
}

/**
 * Standardizes section layout: max-width container with responsive padding.
 */
export default function SectionContainer({
  children,
  background = "var(--bg)",
  className,
  maxWidth = 1152,
  id,
}: SectionContainerProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      id={id}
      className={className}
      style={{
        padding: isMobile ? "4rem 1.25rem" : "6rem 2rem",
        backgroundColor: background,
      }}
    >
      <div style={{ maxWidth, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
