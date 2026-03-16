import type { Metadata } from "next";
import Script from "next/script";
import { cookies, headers } from "next/headers";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://endworks.github.io/lovelust-home"
  ),
  title: {
    template: "%s | LoveLust",
    default: "LoveLust: Sexual Health",
  },
  description:
    "LoveLust lets you track your sexual encounters and birth control methods, ensuring a healthier sexual life. Available on iOS and Android.",
  keywords: [
    "sexual health",
    "sex tracker",
    "birth control tracker",
    "sexual wellness",
    "intimacy tracker",
  ],
  icons: {
    icon: "/lovelust.svg",
  },
  other: {
    "apple-itunes-app":
      "app-id=6740049675,app-clip-bundle-id=works.end.LoveLust.clip, app-clip-display=card",
  },
  openGraph: {
    type: "website",
    siteName: "LoveLust",
    title: "LoveLust: Sexual Health",
    description:
      "Track your sexual encounters and birth control methods with LoveLust. Available on iOS and Android.",
    images: [
      {
        url: "/icon.png",
        type: "image/png",
        width: 1024,
        height: 1024,
        alt: "LoveLust app icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "LoveLust: Sexual Health",
    description:
      "Track your sexual encounters and birth control methods with LoveLust. Available on iOS and Android.",
    images: ["/icon.png"],
  },
};

const SUPPORTED_LOCALES = ["en", "es"];

function detectLocaleFromHeader(acceptLanguage: string): string {
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

// Inline script that runs synchronously before React — no dark mode flash.
// On first visit: reads matchMedia and sets the cookie.
// On subsequent visits: the server already sets the class, this is a no-op.
const themeScript = `
(function () {
  try {
    var cookie = document.cookie.match(/(?:^|; )theme=([^;]+)/);
    var theme = cookie ? cookie[1] : null;
    var dark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
    if (!theme) {
      var expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = 'theme=' + (dark ? 'dark' : 'light') + ';path=/;expires=' + expires + ';samesite=lax';
    }
  } catch (e) {}
})();
`.trim();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const headersList = await headers();

  // Locale: prefer the NEXT_LOCALE cookie (set by middleware on first request),
  // fall back to parsing the Accept-Language header directly.
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value;
  const acceptLanguage = headersList.get("accept-language") ?? "";
  const lng = localeCookie && SUPPORTED_LOCALES.includes(localeCookie)
    ? localeCookie
    : detectLocaleFromHeader(acceptLanguage);

  // Dark mode: server sets the class so the initial HTML is correct.
  const themeCookie = cookieStore.get("theme")?.value;
  const isDark = themeCookie === "dark";

  return (
    <html
      lang={lng}
      className={isDark ? "dark" : ""}
      suppressHydrationWarning
    >
      <head>
        {/* Inline theme script runs before React — prevents any dark/light flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YRL4VQRLFD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YRL4VQRLFD');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  );
}
