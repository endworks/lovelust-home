"use client";

import { useTranslation } from "react-i18next";
import { usePageTracking } from "../../hooks/usePageTracking";
import MarkdownContent from "../../components/MarkdownContent";
import PageLayout from "../../components/PageLayout";

export default function Terms({ en, es }: { en: string; es: string }) {
  const { t, i18n } = useTranslation();

  usePageTracking("terms");

  const legalEmail = process.env.NEXT_PUBLIC_LEGAL_EMAIL ?? "";
  const content = (i18n.language === "es" ? es : en).replaceAll("{{LEGAL_EMAIL}}", legalEmail);

  return (
    <PageLayout title={t("TermsAndConditions")}>
      <MarkdownContent content={content} />
    </PageLayout>
  );
}
