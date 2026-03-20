"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Header({
    isMobile,
    isDark,
    toggleDark,
    switchLanguage,
}: {
    isMobile: boolean;
    isDark: boolean;
    toggleDark: () => void;
    switchLanguage: (lang: string) => void;
}) {
    const { t, i18n } = useTranslation();

    return (
        <nav
            className="glass-nav"
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 50,
                backgroundColor: "var(--nav-bg)",
            }}
        >
            <div
                style={{
                    maxWidth: 1152,
                    margin: "0 auto",
                    padding: isMobile ? "1rem 1.25rem" : "1.5rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Link href="/" style={{ textDecoration: "none" }}>
                    <span
                        className="font-headline"
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 900,
                            color: "var(--c-primary)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        LoveLust
                    </span>
                </Link>
                <div
                    style={{
                        display: "flex",
                        gap: isMobile ? "0.5rem" : "1.5rem",
                        alignItems: "center",
                    }}
                >
                    <button
                        onClick={toggleDark}
                        title="Toggle dark mode"
                        style={{
                            background: "none",
                            border: "none",
                            borderRadius: "0.5rem",
                            padding: "0.5rem 0.75rem",
                            cursor: "pointer",
                            fontSize: "1rem",
                            lineHeight: 1,
                            color: "var(--text)",
                        }}
                    >
                        {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
                    </button>
                    <button
                        onClick={() => switchLanguage(i18n.language === "es" ? "en" : "es")}
                        style={{
                            background: "none",
                            border: "none",
                            borderRadius: "0.5rem",
                            padding: "0.5rem 0.75rem",
                            cursor: "pointer",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "var(--text)",
                            letterSpacing: "0.05em",
                        }}
                    >
                        {i18n.language === "es" ? "EN" : "ES"}
                    </button>

                    {!isMobile && (
                        <a
                            href={process.env.NEXT_PUBLIC_APPSTORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-headline btn-download"
                        >
                            {t("DownloadApp")}
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}
