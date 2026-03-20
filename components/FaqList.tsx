"use client";

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

export default function FaqList({ content }: FaqListProps) {
  const items = parseFaq(content);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map(({ question, answer }, i) => (
        <div
          key={i}
          style={{
            padding: "1.5rem 0",
            borderBottom: i < items.length - 1 ? "1px solid var(--ghost-border)" : "none",
          }}
        >
          <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: "var(--c-primary)", marginBottom: "0.5rem" }}>
            {question}
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>{answer}</p>
        </div>
      ))}
    </div>
  );
}
