"use client";

import { useCallback } from "react";
import { getUtmProps } from "./usePageTracking";
import { useTracking } from "./useTracking";

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
  const track = useTracking();

  return useCallback(() => {
    track("store_click", { platform, ...getUtmProps() });
  }, [track, platform]);
}
