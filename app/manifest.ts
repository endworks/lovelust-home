import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LoveLust: Sexual Health",
    short_name: "LoveLust",
    description:
      "Track your sexual encounters and birth control methods. Private, encrypted, and available on iOS and Android.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#f61e6d",
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
