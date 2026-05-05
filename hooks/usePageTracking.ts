"use client";

import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;
const STORAGE_KEY = "utm_params";

function getUtmProps(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const fromUrl: Record<string, string> = {};
  const params = new URLSearchParams(window.location.search);
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  }

  if (Object.keys(fromUrl).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {}
    return fromUrl;
  }

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return {};
}

/**
 * Fire an Aptabase "page" event once when the component mounts.
 * Attaches utm_* params from the landing URL (persisted across SPA nav
 * via sessionStorage) so attribution survives client-side route changes.
 */
export function usePageTracking(pageName: string) {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("page", { page: pageName, ...getUtmProps() }).catch(() => {});
  }, [trackEvent, pageName]);
}
