import ReactMarkdown from "react-markdown";

/**
 * Shared markdown renderer with styled typography matching the design system.
 * Used by Privacy Policy and Terms & Conditions pages.
 */
export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2
            style={{
              fontStyle: "italic",
              fontSize: "var(--text-lg)",
              fontWeight: "var(--header-alt-weight)",
              color: "var(--accent)",
              marginTop: "2rem",
              marginBottom: "0.75rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--bg-low)",
            }}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--header-alt-weight)",
              color: "var(--accent)",
              marginTop: "1.25rem",
              marginBottom: "0.5rem",
            }}
          >
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "0.75rem",
            }}
          >
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              paddingLeft: "1.25rem",
              marginBottom: "0.75rem",
            }}
          >
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              paddingLeft: "1.25rem",
              marginBottom: "0.75rem",
            }}
          >
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li style={{ marginBottom: "0.4rem" }}>{children}</li>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            style={{
              color: "var(--accent)",
              textDecoration: "underline",
              textDecorationColor: "var(--accent-40)",
            }}
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong
            style={{
              color: "var(--text-muted)",
              fontWeight: "var(--header-weight)",
            }}
          >
            {children}
          </strong>
        ),
        hr: () => (
          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--ghost-border)",
              margin: "2rem 0 0",
            }}
          />
        ),
        em: ({ children }) => (
          <em
            style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}
          >
            {children}
          </em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
