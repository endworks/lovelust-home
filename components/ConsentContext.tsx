"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type ConsentStatus = "unknown" | "granted" | "denied";

const STORAGE_KEY = "ll_analytics_consent";

interface ConsentValue {
  status: ConsentStatus;
  /** True once the client has read the stored choice (avoids SSR flash). */
  ready: boolean;
  accept: () => void;
  decline: () => void;
}

const ConsentCtx = createContext<ConsentValue>({
  status: "unknown",
  ready: false,
  accept: () => {},
  decline: () => {},
});

/**
 * Two-tier model (EU controller, sensitive-health topic — premortem #6):
 *  - "granted"  → Tier 1 (Aptabase, anonymous) + Tier 2 (GA) both run.
 *  - "unknown"  → Tier 1 runs as exempt anonymous measurement; Tier 2 off.
 *  - "denied"   → explicit opt-out; nothing runs (incl. Tier 1).
 */
export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>("unknown");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "granted" || v === "denied") setStatus(v);
    } catch {}
    setReady(true);
  }, []);

  const persist = useCallback((s: ConsentStatus) => {
    setStatus(s);
    try {
      localStorage.setItem(STORAGE_KEY, s);
    } catch {}
  }, []);

  return (
    <ConsentCtx.Provider
      value={{
        status,
        ready,
        accept: () => persist("granted"),
        decline: () => persist("denied"),
      }}
    >
      {children}
    </ConsentCtx.Provider>
  );
}

export const useConsent = () => useContext(ConsentCtx);
