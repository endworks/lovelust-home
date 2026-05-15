import { describe, it, expect } from "vitest";
import { buildStoreUrl } from "./useStoreUrl";

const utm = {
  utm_source: "pride",
  utm_medium: "fan",
  utm_campaign: "pride26",
  utm_content: "v1",
};

const PLAY = "https://play.google.com/store/apps/details?id=works.end.LoveLustR";
const APPSTORE =
  "https://apps.apple.com/us/app/lovelust-safe-sex-tracker/id6740049675";

describe("buildStoreUrl", () => {
  it("appends an url-encoded referrer for Google Play", () => {
    const out = buildStoreUrl("googlePlay", PLAY, utm)!;
    const referrer = new URL(out).searchParams.get("referrer")!;
    expect(new URLSearchParams(referrer).get("utm_campaign")).toBe("pride26");
    expect(new URL(out).searchParams.get("id")).toBe("works.end.LoveLustR");
  });

  it("sets the App Store campaign token from utm_campaign (≤40 chars)", () => {
    const out = buildStoreUrl("appStore", APPSTORE, utm)!;
    expect(new URL(out).searchParams.get("ct")).toBe("pride26");
  });

  it("returns the base URL untouched when there is no UTM", () => {
    expect(buildStoreUrl("googlePlay", PLAY, {})).toBe(PLAY);
    expect(buildStoreUrl("appStore", APPSTORE, {})).toBe(APPSTORE);
  });

  it("passes non-store URLs through (e.g. TestFlight)", () => {
    const tf = "https://testflight.apple.com/join/AvvDAJRt";
    expect(buildStoreUrl("appStore", tf, utm)).toBe(tf);
  });

  it("tolerates an undefined or invalid base URL", () => {
    expect(buildStoreUrl("appStore", undefined, utm)).toBeUndefined();
    expect(buildStoreUrl("googlePlay", "not a url", utm)).toBe("not a url");
  });
});
