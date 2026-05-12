interface LogoTextProps {
  size?: string | number;
}

export default function LogoText({ size = "1.5rem" }: LogoTextProps) {
  return (
    <span
      style={{
        fontSize: size,
        fontFamily: "var(--font-accent), cursive",
        letterSpacing: "-0.03em",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      <span style={{ color: "var(--accent)" }}>Love</span>
      <span style={{ color: "var(--text)" }}>Lust</span>
    </span>
  );
}
