import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with the LoveLust app. Browse the FAQ or contact our support team via email, Telegram, or social media.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support | LoveLust",
    description:
      "Get help with the LoveLust app. Browse the FAQ or contact our support team via email, Telegram, or social media.",
    url: "/support",
  },
  twitter: {
    title: "Support | LoveLust",
    description:
      "Get help with the LoveLust app. Browse the FAQ or contact our support team via email, Telegram, or social media.",
  },
};

export default function Page() {
  const faqEn = fs.readFileSync(path.join(process.cwd(), "content/faq/en.md"), "utf-8");
  const faqEs = fs.readFileSync(path.join(process.cwd(), "content/faq/es.md"), "utf-8");
  return <SupportClient faqEn={faqEn} faqEs={faqEs} />;
}
