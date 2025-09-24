import { useAptabase } from "@aptabase/react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./App.css";
import downloadAppStore from "/downloadAppStore.svg";
import downloadAppStoreSpanish from "/downloadAppStoreSpanish.svg";
import downloadAppStoreWhite from "/downloadAppStoreWhite.svg";
import downloadAppStoreWhiteSpanish from "/downloadAppStoreWhiteSpanish.svg";
import downloadTestFlight from "/downloadTestFlight.png";
import downloadTestFlightSpanish from "/downloadTestFlightSpanish.png";
import getItOnGooglePlay from "/getItOnGooglePlay.png";
import getItOnGooglePlaySpanish from "/getItOnGooglePlaySpanish.png";
import screenshot from "/screenshot.png";
import screenshotDark from "/screenshotDark.png";
import screenshotDarkSpanish from "/screenshotDarkSpanish.png";
import screenshotSpanish from "/screenshotSpanish.png";

function App() {
  const { t, i18n } = useTranslation();
  const { trackEvent } = useAptabase();
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
    trackEvent("page", { page: "home" });
  }, [trackEvent]);

  useEffect(() => {
    document.title = t("Title") + ": " + t("Subtitle");
  }, [i18n, t]);

  const screenshotImage = useMemo(() => {
    if (isDark) {
      if (i18n.language === "es") {
        return screenshotDarkSpanish;
      }
      return screenshotDark;
    } else {
      if (i18n.language === "es") {
        return screenshotSpanish;
      }
      return screenshot;
    }
  }, [isDark, i18n]);

  const downloadAppStoreButton = useMemo(() => {
    if (isDark) {
      if (i18n.language === "es") {
        return downloadAppStoreSpanish;
      }
      return downloadAppStore;
    } else {
      if (i18n.language === "es") {
        return downloadAppStoreWhiteSpanish;
      }
      return downloadAppStoreWhite;
    }
  }, [isDark, i18n]);

  const downloadTestFlightButton = useMemo(() => {
    if (i18n.language === "es") {
      return downloadTestFlightSpanish;
    }
    return downloadTestFlight;
  }, [i18n]);

  const getItOnGooglePlayButton = useMemo(() => {
    if (i18n.language === "es") {
      return getItOnGooglePlaySpanish;
    }
    return getItOnGooglePlay;
  }, [i18n]);

  return (
    <>
      <div className="light:bg-white dark:bg-black">
        <main>
          <div className="relative isolate pt-14">
            <svg
              className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-gray-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg
                x="50%"
                y="-1"
                className="overflow-visible fill-gray-50 dark:fill-gray-950"
              >
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto text-center sm:text-start">
                <div className="flex"></div>
                <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                  {t("Title")}
                </h1>
                <div className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
                  {t("Description")}
                </div>
                <div className="mt-10 flex items-center gap-x-6 justify-center sm:justify-start">
                  {import.meta.env.VITE_BETA == "true" ? (
                    <a
                      href={import.meta.env.VITE_TESTFLIGHT_URL}
                      target="_blank"
                    >
                      <img
                        src={downloadTestFlightButton}
                        alt={t("AvailableOnTestFlight")}
                        className="download-app"
                      />
                    </a>
                  ) : (
                    <a href={import.meta.env.VITE_APPSTORE_URL} target="_blank">
                      <img
                        src={downloadAppStoreButton}
                        alt={t("DownloadOnTheAppStore")}
                        className="download-app"
                      />
                    </a>
                  )}

                  <a
                    href={import.meta.env.VITE_GOOGLE_PLAY_STORE_URL}
                    target="_blank"
                  >
                    <img
                      src={getItOnGooglePlayButton}
                      alt={t("GetItOnGooglePlay")}
                      className="download-app"
                    />
                  </a>
                </div>
              </div>
              <div className="mx-auto mt-10">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                  <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img
                      src={screenshotImage}
                      className="block w-[272px] h-[572px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="sm:absolute mt-5 sm:mt-0 inset-x-0 bottom-0 z-50 w-full text-center mb-5">
        <Link
          to="/privacy"
          className="text-sm font-semibold leading-6 mr-2 text-gray-900 dark:text-gray-100 hover:underline"
        >
          {t("PrivacyPolicy")}
        </Link>
        <Link
          to="/terms"
          className="text-sm font-semibold leading-6 mr-2 text-gray-900 dark:text-gray-100 hover:underline"
        >
          {t("TermsAndConditions")}
        </Link>
        <Link
          to="/support"
          className="text-sm font-semibold leading-6 mr-2 ml-2 text-gray-900 dark:text-gray-100 hover:underline"
        >
          {t("Support")}
        </Link>
        <Link
          to="/donations"
          className="text-sm font-semibold leading-6 ml-2 text-gray-900 dark:text-gray-100 hover:underline"
        >
          {t("Donations")}
        </Link>
        <div>
          <small className="text-xs font-thin leading-6 text-gray-800 dark:text-gray-200">
            2025 <strong>end.works LLC</strong>. {t("AllRightsReserved")}
          </small>
        </div>
      </footer>
    </>
  );
}

export default App;
