import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function Support() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  useEffect(() => {
    document.title = t("Title") + ": " + t("Subtitle");
  }, [i18n]);

  return (
    <div className="text-center mt-20">
      <Link to="/" className="hover:underline">
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
            <em>{import.meta.env.VITE_SUPPORT_EMAIL}</em>
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
              <a href={"https://t.me/" + import.meta.env.VITE_SUPPORT_TELEGRAM}>
                @{import.meta.env.VITE_SUPPORT_TELEGRAM}
              </a>
            </li>
            <li>
              <b>{t("Twitter")}</b>:{" "}
              <a href={"https://x.com/" + import.meta.env.VITE_SUPPORT_TWITTER}>
                @{import.meta.env.VITE_SUPPORT_TWITTER}
              </a>
            </li>
            {/* <li>
              <b>{t("Instagram")}</b>:{" "}
              <a
                href={
                  "https://www.instagram.com/" +
                  import.meta.env.VITE_SUPPORT_INSTAGRAM
                }
              >
                @{import.meta.env.VITE_SUPPORT_INSTAGRAM}
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
