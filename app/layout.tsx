import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-body",
});

const accentFont = localFont({
  src: [
    { path: "./fonts/AlbraTRIAL-Semi.otf", weight: "600", style: "normal" },
    {
      path: "./fonts/AlbraTRIAL-Semi-Italic.otf",
      weight: "600",
      style: "italic",
    },
    { path: "./fonts/AlbraTRIAL-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/AlbraTRIAL-Black.otf", weight: "900", style: "normal" },
  ],
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
  // Use a static default language for the server-side render.
  // The client-side i18next detector in src/i18n.ts will automatically
  // switch to the user's preferred language after hydration.
  const lng = "en";

  return (
    <html
      lang={lng}
      className={`${bodyFont.variable} ${accentFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline theme script runs before React — prevents any dark/light flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="antialiased font-sans">
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  );
}
