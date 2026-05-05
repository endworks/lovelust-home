"use client";

import { useAptabase } from "@aptabase/react";
import { useEffect } from "react";

/**
 * Fire an Aptabase "page" event once when the component mounts.
 */
export function usePageTracking(pageName: string) {
  const { trackEvent } = useAptabase();

  useEffect(() => {
    trackEvent("page", { page: pageName }).catch(() => {});
  }, [trackEvent, pageName]);
}
