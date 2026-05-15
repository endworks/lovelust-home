import Image from "next/image";

/**
 * Theme-aware screenshot that swaps light/dark images based on the
 * `dark` class on <html>. Uses CSS visibility to avoid layout shifts.
 *
 * Images are served from /public/screenshots/{name}-{theme}-{lang}.png
 *
 * Available names: home, paywall, edit, stats, partner, activity
 */
export default function ThemeAwareScreenshot({
  language,
  name,
  priority = false,
  style = {},
  className = "",
  // The phone chassis renders at <=320px, but the source PNG is 1206px wide.
  // Without `sizes`, next/image serves the full-res image — megabytes on
  // cold venue cellular. This makes it ship a ~320px WebP instead. See
  // premortem failure mode #3.
  sizes = "(max-width: 768px) 240px, 320px",
}: {
  language: string;
  name: string;
  priority?: boolean;
  style?: React.CSSProperties;
  className?: string;
  sizes?: string;
}) {
  const lang = language === "es" ? "es" : "en";
  const dark = `/screenshots/${name}-dark-${lang}.png`;
  const light = `/screenshots/${name}-light-${lang}.png`;

  return (
    <>
      <Image
        src={dark}
        alt=""
        width={1206}
        height={2622}
        priority={priority}
        sizes={sizes}
        className={`dark-only ${className}`}
        style={{ ...style, display: "block" }}
      />
      <Image
        src={light}
        alt=""
        width={1206}
        height={2622}
        priority={priority}
        sizes={sizes}
        className={`light-only ${className}`}
        style={{ ...style, display: "block" }}
      />
    </>
  );
}
