import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
const DEV_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

const SUPPORTED = ["en", "es"] as const;
const LNG_COOKIE = "ll_lng";

function pickLanguage(request: NextRequest): string {
  // 1. Explicit ?lng (baked into the ES campaign short URLs)
  const q = request.nextUrl.searchParams.get("lng");
  if (q && (SUPPORTED as readonly string[]).includes(q)) return q;

  // 2. Returning visitor's stored choice
  const c = request.cookies.get(LNG_COOKIE)?.value;
  if (c && (SUPPORTED as readonly string[]).includes(c)) return c;

  // 3. Browser Accept-Language
  const first = (request.headers.get("accept-language") || "")
    .split(",")[0]
    ?.split("-")[0]
    ?.toLowerCase();
  if (first && (SUPPORTED as readonly string[]).includes(first)) return first;

  return "en";
}

/**
 * Forward the request with the resolved language so the layout SSRs the
 * correct language on the FIRST paint — no English flash for Spanish
 * campaign traffic on slow connections. See premortem failure mode #5.
 */
function withLanguage(request: NextRequest): NextResponse {
  const lng = pickLanguage(request);
  const headers = new Headers(request.headers);
  headers.set("x-ll-lng", lng);

  const res = NextResponse.next({ request: { headers } });
  res.cookies.set(LNG_COOKIE, lng, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export function proxy(request: NextRequest) {
  if (!APP_URL) return withLanguage(request);

  const canonicalHost = new URL(APP_URL).hostname;
  const requestHost = request.headers.get("host")?.split(":")[0];

  if (!requestHost || DEV_HOSTNAMES.has(requestHost))
    return withLanguage(request);

  // Canonical-host enforcement. The followed request resolves language.
  if (requestHost !== canonicalHost) {
    const url = new URL(request.url);
    const redirectUrl = new URL(url.pathname + url.search, APP_URL);
    return NextResponse.redirect(redirectUrl, { status: 307 });
  }

  return withLanguage(request);
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
