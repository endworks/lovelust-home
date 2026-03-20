import type { Metadata } from "next";
import fs from "fs";
import path from "path";
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
  const en = fs.readFileSync(path.join(process.cwd(), "content/terms/en.md"), "utf-8");
  const es = fs.readFileSync(path.join(process.cwd(), "content/terms/es.md"), "utf-8");
  return <TermsClient en={en} es={es} />;
}
