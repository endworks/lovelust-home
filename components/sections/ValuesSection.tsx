"use client";

import {
  HeartIcon,
  PencilLineIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import SectionContainer from "../SectionContainer";

const VALUES = [
  { Icon: ShieldCheckIcon, titleKey: "Value1Title", descKey: "Value1Desc" },
  { Icon: HeartIcon, titleKey: "Value2Title", descKey: "Value2Desc" },
  { Icon: PencilLineIcon, titleKey: "Value3Title", descKey: "Value3Desc" },
] as const;

export default function ValuesSection() {
  const { t } = useTranslation();

  return (
    <SectionContainer id="values">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "var(--text-section)",
            fontWeight: "var(--header-weight)",
            color: "var(--accent)",
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
          gap: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        {VALUES.map(({ Icon, titleKey, descKey }) => (
          <div key={titleKey} style={{ textAlign: "center" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "var(--accent-0d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <Icon size={40} color="var(--accent)" />
            </div>
            <h3
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: "var(--header-alt-weight)",
                fontStyle: "italic",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {t(titleKey)}
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "var(--text-base)",
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
