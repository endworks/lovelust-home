import type { Metadata } from "next";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with the LoveLust app. Contact our support team via email or social media.",
  openGraph: {
    url: "/support",
  },
};

export default function Page() {
  return <SupportClient />;
}
