import type { Metadata } from "next";
import fs from "fs";
import path from "path";
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
  const faqEn = fs.readFileSync(path.join(process.cwd(), "content/faq/en.md"), "utf-8");
  const faqEs = fs.readFileSync(path.join(process.cwd(), "content/faq/es.md"), "utf-8");
  return <SupportClient faqEn={faqEn} faqEs={faqEs} />;
}
