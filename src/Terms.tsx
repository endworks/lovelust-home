import { useAptabase } from "@aptabase/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function Terms() {
  const { t } = useTranslation();
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
    trackEvent("page", { page: "terms" });
  }, [trackEvent]);

  useEffect(() => {
    document.title = t("Title") + ": " + t("Subtitle");
  }, [t]);

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
        {t("TermsAndConditions")}
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            1. Overview
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            LoveLust is a mobile application that helps users track sexual
            activity and related health data. By using LoveLust, you confirm
            that you are at least <strong>16 years old</strong> and capable of
            entering into a binding agreement.
            <br />
            <br />
            <strong>Note:</strong> LoveLust does not require user accounts. All
            data is stored on your device unless otherwise stated.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            2. Subscriptions & Billing
          </h2>
          <p className="mt-2 mb-4 text-lg  text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            LoveLust offers optional paid subscriptions to unlock additional
            features:
          </p>
          <ul className="mt-2 mb-4">
            <li>
              Auto-Renewing Subscriptions: Subscriptions renew automatically
              unless cancelled at least 24 hours before the end of the current
              period.
            </li>
            <li>
              Types of Subscriptions: Monthly, yearly, and lifetime plans are
              available.
            </li>
            <li>
              Free Trials & Discounts: Free trials or introductory pricing may
              be offered. Once the trial ends, you will be charged unless you
              cancel beforehand.
            </li>
            <li>
              Payment: Payment is charged to your Apple or Google account upon
              confirmation.
            </li>
            <li>
              Cancellation: You can cancel anytime via your App Store or Google
              Play subscription settings. Deleting the app does not cancel your
              subscription.
            </li>
            <li>
              Refunds: We do not issue refunds for unused portions of
              subscriptions. Refund requests must be handled through Apple or
              Google support.
            </li>
          </ul>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            3. Health Disclaimer
          </h2>
          <p className="mt-2 mb-4 text-lg  text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            LoveLust is not a medical device or diagnostic tool. Always consult
            with a healthcare professional for medical advice. Use of the app is
            at your own risk.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            4. User Conduct
          </h2>
          <p className="mt-2 mb-4 text-lg  text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            You agree to use the app respectfully and lawfully. Although
            LoveLust does not manage user accounts, abusive or unlawful use may
            violate platform policies. We reserve the right to report
            violations, and your access could be affected only if Apple or
            Google takes broader action.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            5. Privacy
          </h2>
          <p className="mt-2 mb-4 text-lg  text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            Your data is handled in accordance with our{" "}
            <Link
              to="/privacy"
              className="text-indigo-700 dark:text-indigo-300"
            >
              Privacy Policy
            </Link>
            . By using the app, you consent to our data practices.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            6. Changes to the Terms
          </h2>
          <p className="mt-2 mb-4 text-lg  text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            We may update these Terms from time to time. Continued use of the
            app after changes means you accept the new terms.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            7. Contact
          </h2>
          <p className="mt-2 mb-4 text-lg  text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            For questions or support, contact:{" "}
            {import.meta.env.VITE_SUPPORT_EMAIL}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
