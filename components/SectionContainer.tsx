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
  background,
  className,
  maxWidth = 1152,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`section${className ? ` ${className}` : ""}`}
      style={background ? { backgroundColor: background } : undefined}
    >
      <div style={{ maxWidth, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
