import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es"];
const LOCALE_COOKIE = "NEXT_LOCALE";

function detectLocale(acceptLanguage: string): string {
  const langs = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, ...rest] = part.trim().split(";");
      const q = rest.find((r) => r.trim().startsWith("q="));
      return {
        lang: lang.trim().split("-")[0].toLowerCase(),
        q: q ? parseFloat(q.split("=")[1]) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of langs) {
    if (SUPPORTED_LOCALES.includes(lang)) return lang;
  }
  return "en";
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only set the locale cookie if it hasn't been set yet (let user override later)
  if (!request.cookies.get(LOCALE_COOKIE)) {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const locale = detectLocale(acceptLanguage);
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon|.*\\..*).*)"],
};
