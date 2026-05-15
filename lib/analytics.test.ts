import { describe, it, expect } from "vitest";
import {
  ALLOWED_EVENTS,
  ALLOWED_PROP_KEYS,
  isAllowedEvent,
  sanitizeProps,
} from "./analytics";

describe("analytics anonymity guard", () => {
  it("only the two known events are allowed", () => {
    expect([...ALLOWED_EVENTS]).toEqual(["page", "store_click"]);
    expect(isAllowedEvent("page")).toBe(true);
    expect(isAllowedEvent("store_click")).toBe(true);
    expect(isAllowedEvent("identify")).toBe(false);
    expect(isAllowedEvent("user")).toBe(false);
  });

  it("keeps allowlisted props", () => {
    const out = sanitizeProps({
      page: "home",
      platform: "appStore",
      utm_source: "pride",
      utm_campaign: "pride26",
    });
    expect(out).toEqual({
      page: "home",
      platform: "appStore",
      utm_source: "pride",
      utm_campaign: "pride26",
    });
  });

  it("drops any prop that is not allowlisted (PII can't leak by accident)", () => {
    const out = sanitizeProps({
      page: "home",
      email: "user@example.com",
      userId: "abc-123",
      ip: "1.2.3.4",
      name: "Jane Doe",
    } as Record<string, unknown>);
    expect(out).toEqual({ page: "home" });
    expect(Object.keys(out)).not.toContain("email");
    expect(Object.keys(out)).not.toContain("userId");
  });

  it("drops non-string and empty values, caps length", () => {
    const out = sanitizeProps({
      platform: 123,
      page: "",
      utm_source: "x".repeat(500),
    } as unknown as Record<string, unknown>);
    expect(out).not.toHaveProperty("platform");
    expect(out).not.toHaveProperty("page");
    expect(out.utm_source.length).toBe(120);
  });

  it("the allowlist contains no identifier-shaped keys", () => {
    for (const k of ALLOWED_PROP_KEYS) {
      expect(k).not.toMatch(/id|email|name|ip|user|device|session/i);
    }
  });
});
