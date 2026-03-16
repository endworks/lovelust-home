"use client";

import { useAptabase } from "@aptabase/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Donations() {
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
    trackEvent("page", { page: "donations" });
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
        {t("Donations")}
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
            {t("SupportOurWork")}
          </h2>

          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            {t("SupportOurWorkDescription")}
          </p>

          <h3 className="text-lg pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t("DonateViaRevolut")}
          </h3>

          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            {t("DonateViaRevolutDescription")}
          </p>

          <ul>
            <li>
              {t("RevolutUsername")}:{" "}
              <a
                href={
                  "https://revolut.me/" + process.env.NEXT_PUBLIC_DONATION_REVOLUT
                }
              >
                @{process.env.NEXT_PUBLIC_DONATION_REVOLUT}
              </a>
            </li>
            <li>
              {t("RevolutLink")}:{" "}
              <a
                href={
                  "https://revolut.me/" + process.env.NEXT_PUBLIC_DONATION_REVOLUT
                }
              >
                revolut.me/{process.env.NEXT_PUBLIC_DONATION_REVOLUT}
              </a>
            </li>
          </ul>

          <h3 className="text-lg pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t("DonateWithCrypto")}
          </h3>

          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            {t("DonateWithCryptoDescription")}
          </p>

          <h4 className="text-lg pt-2 tracking-tight text-gray-900 dark:text-gray-100">
            {t("Bitcoin")}
          </h4>

          <p>
            <pre>{process.env.NEXT_PUBLIC_DONATION_BTC}</pre>
          </p>

          <h4 className="text-lg pt-2 tracking-tight text-gray-900 dark:text-gray-100">
            {t("BitcoinCash")}
          </h4>

          <p>
            <pre>{process.env.NEXT_PUBLIC_DONATION_BCH}</pre>
          </p>

          <h4 className="text-lg pt-2 tracking-tight text-gray-900 dark:text-gray-100">
            {t("Ethereum")}
          </h4>

          <p>
            <pre>{process.env.NEXT_PUBLIC_DONATION_ETH}</pre>
          </p>

          <h4 className="text-lg pt-2 tracking-tight text-gray-900 dark:text-gray-100">
            {t("XRPLedger")}
          </h4>

          <p>
            <pre>{process.env.NEXT_PUBLIC_DONATION_XRP}</pre>
          </p>

          <h4 className="text-lg pt-2 tracking-tight text-gray-900 dark:text-gray-100">
            {t("Stellar")}
          </h4>

          <p>
            <pre>{process.env.NEXT_PUBLIC_DONATION_XLM}</pre>
          </p>

          <h4 className="text-lg pt-2 tracking-tight text-gray-900 dark:text-gray-100">
            {t("Solana")}
          </h4>

          <p>
            <pre>{process.env.NEXT_PUBLIC_DONATION_SOL}</pre>
          </p>

          <h4 className="text-lg pt-2 tracking-tight text-gray-900 dark:text-gray-100">
            {t("TON")}
          </h4>

          <p>
            <pre>{process.env.NEXT_PUBLIC_DONATION_TON}</pre>
          </p>

          <h4 className="text-lg mt-4 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t("SupportedStablecoins")}
          </h4>

          <p>{t("SupportedStablecoinsDescription")}</p>

          <ul>
            <li>{t("Ethereum")}</li>
            <li>{t("XRPLedger")}</li>
            <li>{t("Stellar")}</li>
            <li>{t("Solana")}</li>
          </ul>

          <p>{t("SupportedStablecoinsFooter")}</p>
        </div>
      </div>
    </div>
  );
}
