import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using the LoveLust app, including subscription billing, health disclaimer, and privacy practices.",
  openGraph: {
    url: "/terms",
  },
};

export default function Page() {
  return <TermsClient />;
}
