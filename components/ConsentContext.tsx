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
 * Prior, explicit opt-in for non-essential analytics. Required: this is an EU
 * controller around a sensitive-health topic, and analytics (especially GA)
 * was firing on load with no legal basis. See premortem failure mode #6.
 *
 * Nothing analytics-related runs until `status === "granted"`.
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
