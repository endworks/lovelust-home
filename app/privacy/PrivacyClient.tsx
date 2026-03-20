"use client";

import { useTranslation } from "react-i18next";
import { usePageTracking } from "../../hooks/usePageTracking";
import MarkdownContent from "../../components/MarkdownContent";
import PageLayout from "../../components/PageLayout";

export default function PrivacyPolicy({ en, es }: { en: string; es: string }) {
  const { t, i18n } = useTranslation();

  usePageTracking("privacy-policy");

  return (
    <PageLayout title={t("PrivacyPolicy")}>
      <MarkdownContent content={i18n.language === "es" ? es : en} />
    </PageLayout>
  );
}
