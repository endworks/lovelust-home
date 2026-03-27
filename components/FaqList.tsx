"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

interface FaqListProps {
  content: string;
}

function parseFaq(md: string) {
  return md
    .split(/^## /m)
    .filter(Boolean)
    .map(block => {
      const newline = block.indexOf("\n");
      const question = block.slice(0, newline).trim();
      const answer = block.slice(newline).trim();
      return { question, answer };
    });
}

function FaqItem({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        borderRadius: "1.25rem",
        background: isOpen
          ? "linear-gradient(135deg, var(--c-primary-12) 0%, var(--c-primary-06) 100%)"
          : hovered
          ? "var(--bg-low)"
          : "var(--bg-lowest)",
        overflow: "hidden",
        transition: "background 0.25s",
      }}
    >
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.125rem 1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.65rem",
            fontWeight: 800,
            color: "var(--c-primary)",
            letterSpacing: "0.08em",
            flexShrink: 0,
            opacity: 0.6,
            minWidth: "1.5rem",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 700,
            color: isOpen ? "var(--c-primary)" : "var(--text)",
            fontSize: "0.9rem",
            flex: 1,
            lineHeight: 1.5,
            transition: "color 0.2s",
          }}
        >
          {question}
        </span>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isOpen ? "var(--c-primary)" : "var(--c-primary-12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.25s",
          }}
        >
          <CaretDownIcon
            size={14}
            color={isOpen ? "#fff" : "var(--c-primary)"}
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
        </div>
      </button>

      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "600px" : "0",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ padding: "0 1.5rem 1.25rem 3.75rem" }}>
          <div
            style={{
              width: "2rem",
              height: "1px",
              background: "var(--c-primary-40)",
              marginBottom: "0.75rem",
            }}
          />
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              margin: 0,
              fontSize: "0.875rem",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqList({ content }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = parseFaq(content);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {items.map(({ question, answer }, i) => (
        <FaqItem
          key={i}
          index={i}
          question={question}
          answer={answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
