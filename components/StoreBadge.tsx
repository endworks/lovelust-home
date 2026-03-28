"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

type Platform = "appStore" | "googlePlay";

interface StoreBadgeProps {
  platform: Platform;
}

/**
 * A badge-style button using official store images.
 * Theme logic: White badge on Light mode, Black badge on Dark mode (Inverted).
 */
export default function StoreBadge({ platform }: StoreBadgeProps) {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith("es");
  const suffix = isSpanish ? "Spanish" : "";

  const href =
    platform === "appStore"
      ? process.env.NEXT_PUBLIC_APPSTORE_URL
      : process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL;

  const commonStyle: React.CSSProperties = {
    display: "inline-block",
    height: "60px",
  };

  const imgStyle: React.CSSProperties = {
    height: "100%",
    width: "auto",
    display: "block",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="store-badge-link"
      style={commonStyle}
    >
      {platform === "googlePlay" ? (
        <Image
          src={`/getItOnGooglePlay${suffix}.png`}
          alt="Google Play"
          width={564}
          height={168}
          style={{ height: "60px", width: "auto", display: "block" }}
        />
      ) : (
        <>
          {/* Light Mode: Show white badge (inverted logic) */}
          <img
            src={`/downloadAppStoreWhite${suffix}.svg`}
            alt="App Store"
            className="light-only"
            style={imgStyle}
          />
          {/* Dark Mode: Show black badge (inverted logic) */}
          <img
            src={`/downloadAppStore${suffix}.svg`}
            alt="App Store"
            className="dark-only"
            style={imgStyle}
          />
        </>
      )}
    </a>
  );
}
