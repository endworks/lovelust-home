import type { Metadata } from "next";
import fs from "fs";
import path from "path";
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
  const en = fs.readFileSync(path.join(process.cwd(), "content/privacy/en.md"), "utf-8");
  const es = fs.readFileSync(path.join(process.cwd(), "content/privacy/es.md"), "utf-8");
  return <PrivacyClient en={en} es={es} />;
}
