"use client";

import { useEffect } from "react";
import { useTracking } from "./useTracking";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;
const STORAGE_KEY = "utm_params";

/**
 * UTM params from the landing URL, persisted across SPA navigation via
 * sessionStorage. Exported so conversion events (e.g. store_click) carry the
 * same attribution as the page event.
 */
export function getUtmProps(): Record<string, string> {
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
  const track = useTracking();

  useEffect(() => {
    track("page", { page: pageName, ...getUtmProps() });
  }, [track, pageName]);
}
