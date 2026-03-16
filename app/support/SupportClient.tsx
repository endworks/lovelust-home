"use client";

import { useAptabase } from "@aptabase/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Support() {
  const { t } = useTranslation();
  const { trackEvent } = useAptabase();
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (evt: MediaQueryListEvent) => {
      setIsDark(evt.matches);
      document.documentElement.classList.toggle("dark", evt.matches);
      const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `theme=${evt.matches ? "dark" : "light"};path=/;expires=${expires};samesite=lax`;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    trackEvent("page", { page: "support" });
  }, [trackEvent]);

  useEffect(() => {
    document.title = t("Title") + ": " + t("Subtitle");
  }, [t]);

  return (
    <div className="text-center mt-20">
      <Link href="/" className="hover:underline">
        <h1
          className="text-3xl tracking-tight prose-sm prose prose-slate mx-auto"
          style={{
            color: isDark
              ? "var(--tw-prose-invert-headings)"
              : "var(--tw-prose-headings)",
          }}
        >
          {t("LoveLust")}
        </h1>
      </Link>
      <h1 className="text-5xl font-extrabold tracking-tight light:text-slate-900 dark:text-gray-100">
        {t("Support")}
      </h1>
      <div className="mx-auto max-w-4xl mb-10 px-6">
        <div
          className="prose-slate text-wrap whitespace-pre mt-14 text-start mx-auto"
          style={{
            color: isDark
              ? "var(--tw-prose-invert-body)"
              : "var(--tw-prose-body)",
          }}
        >
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t("Contact")}
          </h2>

          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            {t("ContactDescription")}
          </p>

          <h3 className="text-lg pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t("EmailSupport")}
          </h3>

          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            {t("EmailSupportDescription")}
          </p>

          <p className="mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            <em>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</em>
          </p>

          <h3 className="text-lg pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t("SocialMedia")}
          </h3>

          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            {t("SocialMediaDescription")}
          </p>

          <ul>
            <li>
              <b>{t("Telegram")}</b>:{" "}
              <a href={"https://t.me/" + process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM}>
                @{process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM}
              </a>
            </li>
            <li>
              <b>{t("Twitter")}</b>:{" "}
              <a href={"https://x.com/" + process.env.NEXT_PUBLIC_SUPPORT_TWITTER}>
                @{process.env.NEXT_PUBLIC_SUPPORT_TWITTER}
              </a>
            </li>
            {/* <li>
              <b>{t("Instagram")}</b>:{" "}
              <a
                href={
                  "https://www.instagram.com/" +
                  process.env.NEXT_PUBLIC_SUPPORT_INSTAGRAM
                }
              >
                @{process.env.NEXT_PUBLIC_SUPPORT_INSTAGRAM}
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
