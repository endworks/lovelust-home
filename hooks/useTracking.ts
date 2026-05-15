"use client";

import { useAptabase } from "@aptabase/react";
import { useCallback } from "react";
import { useConsent } from "../components/ConsentContext";

/**
 * Consent-gated tracking. Returns a function that only forwards events to
 * Aptabase once the visitor has explicitly granted analytics consent — a
 * no-op otherwise. All analytics must go through this. See failure mode #6.
 */
export function useTracking() {
  const { trackEvent } = useAptabase();
  const { status } = useConsent();

  return useCallback(
    (name: string, props?: Record<string, string>) => {
      if (status !== "granted") return;
      trackEvent(name, props).catch(() => {});
    },
    [trackEvent, status],
  );
}
