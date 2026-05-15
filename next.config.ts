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

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return campaignRedirects.map(({ source, destination }) => ({
      source,
      destination,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
