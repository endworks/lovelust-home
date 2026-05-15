"use client";

import { useTranslation } from "react-i18next";
import { useConsent } from "./ConsentContext";

/**
 * Bottom consent bar. Visible only until the visitor makes an explicit
 * choice. No pre-ticked option; declining is one tap and equally weighted.
 * See premortem failure mode #6.
 */
export default function ConsentBanner() {
  const { t } = useTranslation();
  const { status, ready, accept, decline } = useConsent();

  if (!ready || status !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("ConsentTitle")}
      style={{
        position: "fixed",
        left: "1rem",
        right: "1rem",
        bottom: "1rem",
        zIndex: 1000,
        maxWidth: "640px",
        margin: "0 auto",
        background: "var(--bg)",
        color: "var(--text)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "1rem 1.25rem",
        boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.9rem", flex: "1 1 280px" }}>
        {t("ConsentText")}{" "}
        <a
          href="/privacy"
          style={{ color: "var(--c-primary)", textDecoration: "underline" }}
        >
          {t("ConsentPrivacyLink")}
        </a>
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
        <button
          type="button"
          onClick={decline}
          style={{
            cursor: "pointer",
            padding: "0.55rem 1rem",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: "transparent",
            color: "var(--text)",
            fontWeight: 600,
            fontSize: "0.85rem",
          }}
        >
          {t("ConsentDecline")}
        </button>
        <button
          type="button"
          onClick={accept}
          style={{
            cursor: "pointer",
            padding: "0.55rem 1rem",
            borderRadius: "999px",
            border: "none",
            background: "var(--c-primary)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.85rem",
          }}
        >
          {t("ConsentAccept")}
        </button>
      </div>
    </div>
  );
}
