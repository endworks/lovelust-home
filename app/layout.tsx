/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
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
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
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
