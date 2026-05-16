export type Platform = "appStore" | "googlePlay";

/**
 * Append campaign attribution to a store URL so an install can be traced back
 * to the physical channel that drove it. Without this the chain breaks one
 * click before conversion: UTM identifies a page view, nothing connects a
 * flyer to an actual install. See premortem failure mode #8.
 *
 * - Google Play: `&referrer=<url-encoded utm string>` — surfaced in-app via
 *   the Play Install Referrer API.
 * - App Store: `ct` (campaign text, ≤40 chars) + optional `pt` provider token
 *   — surfaced in App Store Connect App Analytics / via attribution APIs.
 *
 * Only real store hosts are rewritten (TestFlight / other links pass through).
 * Pure (no React, no client APIs) so it is unit-testable and usable from the
 * server (`/download` route handler) as well as the client hook.
 */
export function buildStoreUrl(
  platform: Platform,
  baseUrl: string | undefined,
  utm: Record<string, string>,
): string | undefined {
  if (!baseUrl) return baseUrl;

  let url: URL;
  try {
    url = new URL(baseUrl);
  } catch {
    return baseUrl;
  }

  const hasUtm = Object.keys(utm).length > 0;
  if (!hasUtm) return baseUrl;

  if (platform === "googlePlay" && url.hostname.endsWith("play.google.com")) {
    const referrer = new URLSearchParams(utm).toString();
    url.searchParams.set("referrer", referrer);
    return url.toString();
  }

  if (platform === "appStore" && url.hostname.endsWith("apps.apple.com")) {
    const ct = (utm.utm_campaign || utm.utm_source || "").slice(0, 40);
    if (ct) url.searchParams.set("ct", ct);
    const pt = process.env.NEXT_PUBLIC_ASA_PROVIDER_TOKEN;
    if (pt) url.searchParams.set("pt", pt);
    return url.toString();
  }

  return baseUrl;
}
