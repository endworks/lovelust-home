"use client";

import {
  AppStoreLogoIcon,
  GooglePlayLogoIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

type Platform = "appStore" | "googlePlay";
type Variant = "primary" | "cta";

interface StoreButtonProps {
  platform: Platform;
  variant?: Variant;
}

/**
 * Reusable App Store / Google Play download button.
 */
export default function StoreButton({
  platform,
  variant = "primary",
}: StoreButtonProps) {
  const { t } = useTranslation();
  const isBeta = process.env.NEXT_PUBLIC_BETA === "true";

  const href =
    platform === "appStore"
      ? isBeta
        ? process.env.NEXT_PUBLIC_TESTFLIGHT_URL
        : process.env.NEXT_PUBLIC_APPSTORE_URL
      : process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL;

  const Icon =
    platform === "appStore" ? AppStoreLogoIcon : GooglePlayLogoIcon;

  const label =
    platform === "appStore"
      ? isBeta
        ? "TestFlight"
        : "App Store"
      : "Google Play";

  const sublabel =
    platform === "appStore"
      ? isBeta
        ? t("AvailableOnTestFlight")
        : t("DownloadOnThe")
      : t("GetItOn");

  const className =
    variant === "cta" ? "btn-store cta" : "btn-store";

  if (variant === "cta") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={{ fontWeight: 700 }}
      >
        <Icon size={24} />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Icon size={24} />
      <div>
        <div
          style={{
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            opacity: 0.8,
          }}
        >
          {sublabel}
        </div>
        <div style={{ fontWeight: 800, fontSize: "0.975rem" }}>
          {label}
        </div>
      </div>
    </a>
  );
}
