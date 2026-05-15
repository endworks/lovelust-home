import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import type { StoreRatings } from "../../lib/storeRatings";
import HeroSection from "./HeroSection";

const noRatings: StoreRatings = { appStore: null, googlePlay: null };

describe("HeroSection", () => {
  it("renders the hero title and accent", () => {
    render(<HeroSection isDark={false} storeRatings={noRatings} />);
    // In our setup.ts, t returns the key itself
    expect(screen.getByText("HeroTaglineMain")).toBeInTheDocument();
    expect(screen.getByText("HeroTaglineAccent")).toBeInTheDocument();
  });

  it("renders the hero description", () => {
    render(<HeroSection isDark={false} storeRatings={noRatings} />);
    expect(screen.getByText("HeroDescription")).toBeInTheDocument();
  });

  it("renders both store badges", () => {
    render(<HeroSection isDark={false} storeRatings={noRatings} />);
    // StoreBadge renders images with the platform name as alt text.
    expect(screen.getAllByAltText("App Store").length).toBeGreaterThan(0);
    expect(screen.getByAltText("Google Play")).toBeInTheDocument();
  });

  it("falls back to a plain store chip when no rating is available", () => {
    render(<HeroSection isDark={false} storeRatings={noRatings} />);
    expect(screen.getByText("App Store")).toBeInTheDocument();
    expect(screen.getByText("Google Play")).toBeInTheDocument();
  });

  it("shows the real store rating and review count when available", () => {
    render(
      <HeroSection
        isDark={false}
        storeRatings={{
          appStore: { rating: 4.8, count: 312 },
          googlePlay: { rating: 4.7, count: 228 },
        }}
      />,
    );
    expect(screen.getByText("4.8")).toBeInTheDocument();
    expect(screen.getByText("(312)")).toBeInTheDocument();
    expect(screen.getByText("4.7")).toBeInTheDocument();
    // No hardcoded legacy rating.
    expect(screen.queryByText("4.9")).not.toBeInTheDocument();
  });

  it("renders the phone mockup", () => {
    render(<HeroSection isDark={false} storeRatings={noRatings} />);
    expect(screen.getByTestId("phone-mockup")).toBeInTheDocument();
  });
});
