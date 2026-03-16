import type { Metadata } from "next";
import DonationsClient from "./DonationsClient";

export const metadata: Metadata = {
  title: "Support Our Work",
  description:
    "Support LoveLust development with a donation. Every contribution helps us keep building and improving the app.",
  openGraph: {
    url: "/donations",
  },
};

export default function Page() {
  return <DonationsClient />;
}
