"use client";

import Script from "next/script";
import { useConsent } from "./ConsentContext";

/**
 * Google Analytics — loaded ONLY after explicit consent. Previously injected
 * unconditionally in <head>, setting identifiers and beaconing to a third
 * party before any interaction, on a sensitive-health site for an EU
 * audience. See premortem failure mode #6.
 */
export default function Analytics() {
  const { status } = useConsent();
  const id = process.env.NEXT_PUBLIC_GA_ID;

  if (!id || status !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
