"use client";

import {
  HeartIcon,
  PencilLineIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import SectionContainer from "../SectionContainer";

const VALUES = [
  { Icon: ShieldCheckIcon, titleKey: "Value1Title", descKey: "Value1Desc" },
  { Icon: HeartIcon, titleKey: "Value2Title", descKey: "Value2Desc" },
  { Icon: PencilLineIcon, titleKey: "Value3Title", descKey: "Value3Desc" },
] as const;

export default function ValuesSection() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <SectionContainer id="values">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          className="font-headline"
          style={{
            fontSize: "clamp(1.75rem,4vw,2.5rem)",
            fontWeight: 700,
            color: "var(--c-primary)",
            marginBottom: "1rem",
          }}
        >
          {t("OurValues")}
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {t("OurValuesDesc")}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: isMobile ? "2rem" : "3rem",
        }}
      >
        {VALUES.map(({ Icon, titleKey, descKey }) => (
          <div key={titleKey} style={{ textAlign: "center" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "var(--c-primary-0d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <Icon size={40} color="var(--c-primary)" />
            </div>
            <h3
              className="font-headline"
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--c-primary)",
                marginBottom: "1rem",
              }}
            >
              {t(titleKey)}
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
              }}
            >
              {t(descKey)}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
