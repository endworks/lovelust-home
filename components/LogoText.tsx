"use client";

interface LogoTextProps {
  size?: string | number;
}

export default function LogoText({ size = "1.5rem" }: LogoTextProps) {
  return (
    <span
      style={{
        fontSize: size,
        letterSpacing: "-0.03em",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          fontWeight: 900,
          color: "var(--text)",
        }}
      >
        Love
      </span>
      <span
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          fontWeight: 900,
          fontStyle: "italic",
          color: "var(--c-primary)",
        }}
      >
        Lust
      </span>
    </span>
  );
}
