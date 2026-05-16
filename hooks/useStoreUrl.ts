"use client";

import { useEffect, useState } from "react";
import { type Platform, buildStoreUrl } from "../lib/storeUrl";
import { getUtmProps } from "./usePageTracking";

// Re-exported so existing consumers/tests can keep importing from this hook.
export { buildStoreUrl } from "../lib/storeUrl";

/**
 * Reactive variant of {@link buildStoreUrl}. Returns the base URL on the
 * server / first render (UTM lives in the browser) and the attributed URL
 * after mount, avoiding a hydration mismatch.
 */
export function useStoreUrl(
  platform: Platform,
  baseUrl: string | undefined,
): string | undefined {
  const [url, setUrl] = useState(baseUrl);

  useEffect(() => {
    setUrl(buildStoreUrl(platform, baseUrl, getUtmProps()));
  }, [platform, baseUrl]);

  return url;
}
