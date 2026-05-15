/**
 * Analytics anonymity guard.
 *
 * The exempt-anonymous-measurement basis (premortem #6) only holds if NO
 * personal data ever reaches Aptabase. Rather than trust every future call
 * site, all events are funnelled through here: unknown event names and
 * unknown prop keys are dropped at runtime, and values are length-capped.
 * Adding a new field is a deliberate act (extend the allowlist) reviewed
 * against ANALYTICS-ANONYMITY.md — it cannot leak by accident.
 */

export const ALLOWED_EVENTS = ["page", "store_click"] as const;

export const ALLOWED_PROP_KEYS = [
  "page",
  "platform",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type AllowedEvent = (typeof ALLOWED_EVENTS)[number];

const MAX_VALUE_LENGTH = 120;

export function isAllowedEvent(name: string): name is AllowedEvent {
  return (ALLOWED_EVENTS as readonly string[]).includes(name);
}

/**
 * Keep only allowlisted keys with primitive string values, capped in
 * length. Anything else (objects, PII someone added, oversized blobs) is
 * silently dropped.
 */
export function sanitizeProps(
  props?: Record<string, unknown>,
): Record<string, string> {
  const out: Record<string, string> = {};
  if (!props) return out;
  for (const key of ALLOWED_PROP_KEYS) {
    const v = props[key];
    if (typeof v === "string" && v.length > 0) {
      out[key] = v.slice(0, MAX_VALUE_LENGTH);
    }
  }
  return out;
}
