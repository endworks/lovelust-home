"use client";

import { AptabaseProvider } from "@aptabase/react";
import "../src/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AptabaseProvider
      appKey={process.env.NEXT_PUBLIC_APTABASE_APP_ID!}
      options={{ host: "https://analytics.end.works" }}
    >
      {children}
    </AptabaseProvider>
  );
}
