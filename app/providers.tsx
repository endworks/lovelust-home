"use client";

import { AptabaseProvider } from "@aptabase/react";
import i18n from "../src/i18n";

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

  return (
    <AptabaseProvider
      appKey={process.env.NEXT_PUBLIC_APTABASE_APP_ID!}
      options={{ host: "https://analytics.end.works" }}
    >
      {children}
    </AptabaseProvider>
  );
}
