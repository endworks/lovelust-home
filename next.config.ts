import type { NextConfig } from "next";

// Campaign short URLs printed on physical media (QR codes). These MUST resolve
// in production — they are server-side 301 redirects, so the app is always
// deployed as a Node server (`output: "standalone"`). Do not reintroduce a
// static-export build: it silently drops every redirect below and 404s all
// already-printed QR codes. See premortem failure mode #2.
const campaignRedirects: { source: string; destination: string }[] = [
  {
    source: "/card-26",
    destination:
      "/?utm_source=always-on&utm_medium=card&utm_campaign=alwayson26&utm_content=v1",
  },
  {
    source: "/rollup-26",
    destination:
      "/?utm_source=always-on&utm_medium=rollup&utm_campaign=alwayson26&utm_content=v1",
  },
  {
    source: "/erospain-26",
    destination:
      "/?utm_source=erospain&utm_medium=flyer&utm_campaign=erospain26&utm_content=v1",
  },
  {
    source: "/pride-fan-26",
    destination:
      "/?utm_source=pride&utm_medium=fan&utm_campaign=pride26&utm_content=v1",
  },
  {
    source: "/pride-condom-26",
    destination:
      "/?utm_source=pride&utm_medium=condom&utm_campaign=pride26&utm_content=v1",
  },
  {
    source: "/pride-sticker-26",
    destination:
      "/?utm_source=nightlife&utm_medium=sticker&utm_campaign=pride26&utm_content=v1",
  },
  {
    source: "/healthcare-26",
    destination:
      "/?utm_source=healthcare&utm_medium=trifold&utm_campaign=healthcare26&utm_content=v1",
  },
  {
    source: "/nightlife-26",
    destination:
      "/?utm_source=nightlife&utm_medium=sticker&utm_campaign=nightlife26&utm_content=v1",
  },
  {
    source: "/instagram",
    destination:
      "/?utm_source=instagram&utm_medium=social_organic&utm_campaign=alwayson26&utm_content=bio",
  },
];

// In-app links: the mobile app points its Privacy/Terms/Support menu items here
// so app-origin web hits are attributable (utm_source=app) instead of looking
// like organic traffic. These are 302 (temporary) — unlike the printed QR
// redirects above — so app webviews don't cache-pin stale UTM if we retune the
// campaign later.
const appRedirects: { source: string; destination: string }[] = [
  {
    source: "/app/privacy",
    destination:
      "/privacy?utm_source=app&utm_medium=in_app_link&utm_campaign=app_referral&utm_content=privacy",
  },
  {
    source: "/app/terms",
    destination:
      "/terms?utm_source=app&utm_medium=in_app_link&utm_campaign=app_referral&utm_content=terms",
  },
  {
    source: "/app/support",
    destination:
      "/support?utm_source=app&utm_medium=in_app_link&utm_campaign=app_referral&utm_content=support",
  },
];

// /beta — public beta enrollment. One short URL, platform-sniffed server-side:
// Apple (iPhone/iPad/iPod/Mac) → TestFlight, everything else → Play open
// testing. Beta URLs are env-driven and rotate, so 302 (never cache) and fall
// back to the normal store link if the beta env var is unset.
const TESTFLIGHT_URL =
  process.env.NEXT_PUBLIC_TESTFLIGHT_URL ||
  process.env.NEXT_PUBLIC_APPSTORE_URL;
const PLAY_BETA_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_BETA_URL ||
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_STORE_URL;

const betaRedirects = [
  TESTFLIGHT_URL && {
    source: "/beta",
    has: [
      {
        type: "header",
        key: "user-agent",
        value: ".*(iPhone|iPad|iPod|Macintosh|Mac OS).*",
      },
    ],
    destination: TESTFLIGHT_URL,
    statusCode: 302,
  },
  PLAY_BETA_URL && {
    source: "/beta",
    destination: PLAY_BETA_URL,
    statusCode: 302,
  },
].filter(Boolean) as {
  source: string;
  has?: { type: string; key: string; value: string }[];
  destination: string;
  statusCode: number;
}[];

// /download is a Route Handler (app/download/route.ts), not a static redirect:
// it reads the visitor's session UTM (forwarded as query by the Header) so an
// install keeps its real campaign, falling back to web_download only when none.

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      ...campaignRedirects.map(({ source, destination }) => ({
        source,
        destination,
        statusCode: 301,
      })),
      ...appRedirects.map(({ source, destination }) => ({
        source,
        destination,
        statusCode: 302,
      })),
      ...betaRedirects,
    ];
  },
};

export default nextConfig;
