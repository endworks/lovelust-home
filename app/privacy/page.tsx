import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read LoveLust's privacy policy to understand how we handle your personal data and health information.",
  openGraph: {
    url: "/privacy",
  },
};

export default function Page() {
  return <PrivacyClient />;
}
