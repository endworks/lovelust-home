import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export function middleware(request: NextRequest) {
  if (!APP_URL) return NextResponse.next();

  const canonicalHost = new URL(APP_URL).hostname;
  const requestHost = request.headers.get("host")?.split(":")[0];

  if (requestHost && requestHost !== canonicalHost) {
    const url = new URL(request.url);
    const redirectUrl = new URL(url.pathname + url.search, APP_URL);
    return NextResponse.redirect(redirectUrl, { status: 307 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
