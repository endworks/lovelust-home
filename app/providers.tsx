"use client";

import { AptabaseProvider } from "@aptabase/react";
import i18n from "../src/i18n";
import Analytics from "../components/Analytics";
import ConsentBanner from "../components/ConsentBanner";
import { ConsentProvider } from "../components/ConsentContext";

export default function Providers({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: string;
}) {
  // Apply the server-detected language synchronously before children render.
  // Since i18n is initialized with initImmediate:false, this is a synchronous
  // change — the correct language is active for the very first render.
  if (i18n.isInitialized && i18n.language !== lng) {
    i18n.changeLanguage(lng);
  }

  // AptabaseProvider mounting sends nothing on its own (cookieless, no
  // identifiers until trackEvent). Every event is gated on consent via
  // useTracking; GA is only injected post-consent by <Analytics />.
  return (
    <ConsentProvider>
      <AptabaseProvider
        appKey={process.env.NEXT_PUBLIC_APTABASE_APP_ID!}
        options={{ host: "https://analytics.end.works" }}
      >
        {children}
        <Analytics />
        <ConsentBanner />
      </AptabaseProvider>
    </ConsentProvider>
  );
}
