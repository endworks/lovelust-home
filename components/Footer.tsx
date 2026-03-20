"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer({ isMobile, px }: { isMobile: boolean; px: string }) {
    const { t } = useTranslation();

    return (
        <footer
            style={{
                backgroundColor: "var(--bg)",
                paddingTop: isMobile ? "3rem" : "5rem",
                paddingBottom: isMobile ? "2.5rem" : "4rem",
                paddingLeft: px,
                paddingRight: px,
            }}
        >
            <div style={{ maxWidth: 1152, margin: "0 auto" }}>
                {/* Top row: brand + nav columns */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
                        gap: isMobile ? "2.5rem" : "4rem",
                        marginBottom: isMobile ? "2.5rem" : "4rem",
                    }}
                >
                    {/* Brand */}
                    <div>
                        <span
                            className="font-headline"
                            style={{
                                fontSize: "1.75rem",
                                fontWeight: 900,
                                color: "var(--c-primary)",
                                letterSpacing: "-0.04em",
                                display: "block",
                                marginBottom: "0.75rem",
                            }}
                        >
                            LoveLust
                        </span>
                        <p
                            style={{
                                fontSize: "0.9rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.7,
                                maxWidth: 320,
                            }}
                        >
                            {t("HeroDescription")}
                        </p>
                    </div>

                    {/* Legal links */}
                    <div>
                        <p
                            style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "var(--c-primary)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "1rem",
                            }}
                        >
                            Legal
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                            }}
                        >
                            {[
                                { href: "/privacy", label: t("PrivacyPolicy") },
                                { href: "/terms", label: t("TermsAndConditions") },
                            ].map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    style={{
                                        fontSize: "0.875rem",
                                        color: "var(--text-muted)",
                                        textDecoration: "none",
                                        transition: "color 0.2s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = "var(--c-primary)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = "var(--text-muted)")
                                    }
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Support links */}
                    <div>
                        <p
                            style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "var(--c-primary)",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "1rem",
                            }}
                        >
                            {t("Support")}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                            }}
                        >
                            {[{ href: "/support", label: t("Support") }].map(
                                ({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "var(--text-muted)",
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.color = "var(--c-primary)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.color = "var(--text-muted)")
                                        }
                                    >
                                        {label}
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: 1,
                        backgroundColor: "var(--c-primary-12)",
                        marginBottom: isMobile ? "1.5rem" : "2rem",
                    }}
                />

                {/* Bottom row: copyright + made by */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: "0.75rem",
                    }}
                >
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        © {new Date().getFullYear()} end.works LLC.{" "}
                        {t("AllRightsReserved")}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        Made with <span style={{ color: "var(--c-primary)" }}>♥</span> for
                        your privacy
                    </p>
                </div>
            </div>
        </footer>
    );
}
