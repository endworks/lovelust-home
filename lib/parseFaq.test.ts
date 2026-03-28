import { describe, it, expect } from "vitest";
import { parseFaq } from "./parseFaq";

const SAMPLE = `## What is LoveLust?
LoveLust is a sexual health tracker.

## Is my data private?
Yes. All data is encrypted locally.

## Does it support Android?
Yes, Android and iOS.
`;

describe("parseFaq", () => {
  it("parses all entries from markdown", () => {
    const result = parseFaq(SAMPLE);
    expect(result).toHaveLength(3);
  });

  it("extracts questions correctly", () => {
    const result = parseFaq(SAMPLE);
    expect(result[0].question).toBe("What is LoveLust?");
    expect(result[1].question).toBe("Is my data private?");
    expect(result[2].question).toBe("Does it support Android?");
  });

  it("extracts answers correctly", () => {
    const result = parseFaq(SAMPLE);
    expect(result[0].answer).toBe("LoveLust is a sexual health tracker.");
  });

  it("preserves newlines by default", () => {
    const md = `## Question\nLine one.\n\nLine two.\n`;
    const [{ answer }] = parseFaq(md);
    expect(answer).toContain("\n");
  });

  it("collapses newlines when option is set", () => {
    const md = `## Question\nLine one.\n\nLine two.\n`;
    const [{ answer }] = parseFaq(md, { collapseNewlines: true });
    expect(answer).not.toContain("\n");
    expect(answer).toBe("Line one. Line two.");
  });

  it("returns empty array for empty string", () => {
    expect(parseFaq("")).toEqual([]);
  });

  it("filters out blocks with no question or answer", () => {
    const md = `## \nsome answer\n\n## Valid question\nValid answer\n`;
    const result = parseFaq(md);
    expect(result).toHaveLength(1);
    expect(result[0].question).toBe("Valid question");
  });

  it("returns empty array for whitespace-only string", () => {
    expect(parseFaq("   \n  \n  ")).toEqual([]);
  });
});
