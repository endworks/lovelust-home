import fs from "fs";
import type { Metadata } from "next";
import path from "path";
import HomeClient from "./HomeClient";
import { parseFaq } from "../lib/parseFaq";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://lovelust.health";

export const metadata: Metadata = {
  title: "LoveLust: Sexual Health Tracker",
  description:
    "LoveLust lets you track your sexual encounters and birth control methods, ensuring a healthier sexual life. Private, encrypted, available on iOS and Android.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default async function Page() {
  const faqEn = fs.readFileSync(
    path.join(process.cwd(), "content/faq/en.md"),
    "utf-8",
  );
  const faqEs = fs.readFileSync(
    path.join(process.cwd(), "content/faq/es.md"),
    "utf-8",
  );

  const faqItems = parseFaq(faqEn, { collapseNewlines: true });

  const testimonials: {
    quote: string;
    name: string;
    platform: string;
    rating: number;
  }[] = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content/testimonials.json"),
      "utf-8",
    ),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${APP_URL}/#website`,
        url: APP_URL,
        name: "LoveLust",
        description:
          "Sexual Health Tracker. Private, encrypted, available on iOS and Android.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${APP_URL}/support?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${APP_URL}/#organization`,
        name: "LoveLust",
        url: APP_URL,
        logo: {
          "@type": "ImageObject",
          url: `${APP_URL}/icon.png`,
          width: 1024,
          height: 1024,
        },
        sameAs: [
          "https://twitter.com/lovelust_health",
          "https://www.instagram.com/lovelust.health",
          `https://apps.apple.com/us/app/lovelust-safe-sex-tracker/id6740049675`,
          `https://play.google.com/store/apps/details?id=works.end.LoveLustR`,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email:
            process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@lovelust.health",
          contactType: "customer support",
        },
      },
      {
        "@type": "MobileApplication",
        "@id": `${APP_URL}/#app`,
        name: "LoveLust",
        description:
          "Track your sexual encounters and birth control methods with LoveLust. All data is stored locally with AES-256 encryption. Your privacy is guaranteed.",
        applicationCategory: "HealthApplication",
        operatingSystem: ["iOS", "Android"],
        downloadUrl: [
          process.env.NEXT_PUBLIC_APPSTORE_URL ??
            "https://apps.apple.com/us/app/lovelust-safe-sex-tracker/id6740049675",
          process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL ??
            "https://play.google.com/store/apps/details?id=works.end.LoveLustR",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: { "@id": `${APP_URL}/#organization` },
      },
      ...(faqItems.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${APP_URL}/#faq`,
              mainEntity: faqItems.map(({ question, answer }) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient faqEn={faqEn} faqEs={faqEs} testimonials={testimonials} />
    </>
  );
}
