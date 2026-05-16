import { NextRequest, NextResponse } from "next/server";

import { buildStoreUrl } from "../../lib/storeUrl";

// /download — production install link. The Header forwards the visitor's
// current session UTM as query params (?utm_source=...). We pick the store by
// User-Agent (Apple → App Store, else Play), then attach attribution via the
// shared buildStoreUrl helper so the install keeps its real campaign. When no
// UTM is present (bare /download from email/print/no-JS) we fall back to a
// fixed web_download campaign. 302 — never cached, store URL can change.

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const FALLBACK_UTM = {
  utm_source: "website",
  utm_medium: "download_button",
  utm_campaign: "web_download",
};

export function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  const isApple = /(iPhone|iPad|iPod|Macintosh|Mac OS)/.test(ua);

  const platform = isApple ? "appStore" : "googlePlay";
  const base = isApple
    ? process.env.NEXT_PUBLIC_APPSTORE_URL
    : process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL;

  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const v = req.nextUrl.searchParams.get(key);
    if (v) utm[key] = v;
  }
  const effective = Object.keys(utm).length > 0 ? utm : FALLBACK_UTM;

  const dest = buildStoreUrl(platform, base, effective);
  const target =
    dest && /^https?:\/\//.test(dest)
      ? dest
      : (process.env.NEXT_PUBLIC_APP_URL ?? req.nextUrl.origin);

  return NextResponse.redirect(target, 302);
}
