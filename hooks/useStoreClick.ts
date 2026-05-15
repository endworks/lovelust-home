"use client";

import { useAptabase } from "@aptabase/react";
import { useCallback } from "react";
import { getUtmProps } from "./usePageTracking";

type Platform = "appStore" | "googlePlay";

/**
 * Returns a click handler that records the bottom-of-funnel conversion event.
 *
 * Without this the funnel ends at the page view: we know who landed (page +
 * UTM) but never who clicked "Download". `store_click` carries the same UTM
 * attribution as the page event, so a scan→click rate per campaign is
 * computable. See premortem failure modes #1 and #8.
 */
export function useStoreClick(platform: Platform) {
  const { trackEvent } = useAptabase();

  return useCallback(() => {
    trackEvent("store_click", { platform, ...getUtmProps() }).catch(() => {});
  }, [trackEvent, platform]);
}
