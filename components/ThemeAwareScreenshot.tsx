import Image from "next/image";

/**
 * Theme-aware screenshot that swaps light/dark images based on the
 * `dark` class on <html>. Uses CSS visibility to avoid layout shifts.
 *
 * Images are served from /public/screenshots/{name}-{theme}-{lang}.png
 *
 * Available names: home, paywall, timeline, stats, partner
 */
export default function ThemeAwareScreenshot({
  language,
  name,
  style = {},
  className = "",
}: {
  language: string;
  name: string;
  style?: React.CSSProperties;
  className?: string;
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
        className={`dark-only ${className}`}
        style={{ ...style, display: "block" }}
      />
      <Image
        src={light}
        alt=""
        width={1206}
        height={2622}
        className={`light-only ${className}`}
        style={{ ...style, display: "block" }}
      />
    </>
  );
}
