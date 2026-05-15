"use client";

import { useAptabase } from "@aptabase/react";
import { useCallback } from "react";
import { useConsent } from "../components/ConsentContext";

/**
 * Tier 1 analytics: Aptabase (cookieless, no persistent identifiers,
 * aggregate/anonymous). Runs by default as exempt anonymous measurement so
 * campaign funnel data isn't lost, but honors an explicit opt-out — fires
 * unless the visitor has declined (status === "denied").
 *
 * Tier 2 (Google Analytics, identifiers/third-party) stays opt-in and is
 * handled separately in <Analytics />. See premortem failure mode #6.
 *
 * NOTE: the exempt-analytics basis for Aptabase requires DPO/legal sign-off
 * that the configuration is genuinely anonymous (pre-launch gate).
 */
export function useTracking() {
  const { trackEvent } = useAptabase();
  const { status } = useConsent();

  return useCallback(
    (name: string, props?: Record<string, string>) => {
      if (status === "denied") return;
      trackEvent(name, props).catch(() => {});
    },
    [trackEvent, status],
  );
}
