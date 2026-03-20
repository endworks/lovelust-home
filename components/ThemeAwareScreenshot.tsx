/* eslint-disable @next/next/no-img-element */
"use client";

/**
 * Theme-aware screenshot that swaps light/dark images based on the
 * `dark` class on <html>. Uses CSS visibility to avoid layout shifts.
 */
export default function ThemeAwareScreenshot({
  language,
  style = {},
  className = "",
}: {
  language: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const isEs = language === "es";
  return (
    <>
      <img
        src={isEs ? "/screenshotDarkSpanish.png" : "/screenshotDark.png"}
        alt=""
        className={`dark-only ${className}`}
        style={{ ...style, display: "block" }}
      />
      <img
        src={isEs ? "/screenshotSpanish.png" : "/screenshot.png"}
        alt=""
        className={`light-only ${className}`}
        style={{ ...style, display: "block" }}
      />
    </>
  );
}
