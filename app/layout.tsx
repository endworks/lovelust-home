import type { Metadata, Viewport } from "next";
import { Nunito, Pacifico } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Providers from "./providers";

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-body",
});

const accentFont = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-accent",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://lovelust.health";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  applicationName: "LoveLust",
  title: {
    template: "%s | LoveLust",
    default: "LoveLust: Sexual Health",
  },
  description:
    "LoveLust lets you track your sexual encounters and birth control methods, ensuring a healthier sexual life. Private, encrypted, and available on iOS and Android.",
  keywords: [
    "sexual health",
    "sex tracker",
    "birth control tracker",
    "sexual wellness",
    "intimacy tracker",
    "safe sex",
    "STI prevention",
    "contraception tracker",
    "condom reminder",
    "sexual health app",
    "period tracker",
    "privacy",
    "encrypted health app",
    "iOS health app",
    "Android health app",
    "LoveLust",
    "partner tracker",
    "GDPR health app",
  ],
  authors: [{ name: "LoveLust", url: APP_URL }],
  creator: "LoveLust",
  publisher: "LoveLust",
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.png", sizes: "1024x1024", type: "image/png" }],
  },
  other: {
    "apple-itunes-app":
      "app-id=6740049675,app-clip-bundle-id=works.end.LoveLust.clip, app-clip-display=card",
    "google-play-app": "app-id=works.end.LoveLustR",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "LoveLust",
    "mobile-web-app-capable": "yes",
  },
  openGraph: {
    type: "website",
    siteName: "LoveLust",
    locale: "en_US",
    title: "LoveLust: Sexual Health",
    description:
      "Track your sexual encounters and birth control methods with LoveLust. Private, encrypted, available on iOS and Android.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovelust_health",
    creator: "@lovelust_health",
    title: "LoveLust: Sexual Health",
    description:
      "Track your sexual encounters and birth control methods with LoveLust. Private, encrypted, available on iOS and Android.",
  },
};

// Inline script that runs synchronously before React — no dark mode flash.
// Always matches system theme.
const themeScript = `
(function () {
  try {
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`.trim();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Language is resolved on the server by middleware (?lng → cookie →
  // Accept-Language) so the first paint is already correct — no English
  // flash for Spanish campaign traffic. See premortem failure mode #5.
  const lng = (await headers()).get("x-ll-lng") === "es" ? "es" : "en";

  return (
    <html
      lang={lng}
      className={`${bodyFont.variable} ${accentFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline theme script runs before React — prevents any dark/light flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Google Analytics is loaded post-consent by <Analytics /> — never
            in <head> unconditionally. See premortem failure mode #6. */}
      </head>
      <body className="antialiased font-sans">
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  );
}
