import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  it("renders the hero title and accent", () => {
    render(<HeroSection isDark={false} />);

    // In our setup.ts, t returns the key itself
    expect(screen.getByText("HeroTaglineMain")).toBeInTheDocument();
    expect(screen.getByText("HeroTaglineAccent")).toBeInTheDocument();
  });

  it("renders the hero description", () => {
    render(<HeroSection isDark={false} />);
    expect(screen.getByText("HeroDescription")).toBeInTheDocument();
  });

  it("renders both store badges", () => {
    render(<HeroSection isDark={false} />);
    // StoreBadge renders images with the platform name as alt text.
    expect(screen.getAllByAltText("App Store").length).toBeGreaterThan(0);
    expect(screen.getByAltText("Google Play")).toBeInTheDocument();
  });

  it("shows store chips instead of a hardcoded rating", () => {
    render(<HeroSection isDark={false} />);
    expect(screen.getByText("App Store")).toBeInTheDocument();
    expect(screen.getByText("Google Play")).toBeInTheDocument();
    expect(screen.queryByText("4.9")).not.toBeInTheDocument();
  });

  it("renders the phone mockup", () => {
    render(<HeroSection isDark={false} />);
    expect(screen.getByTestId("phone-mockup")).toBeInTheDocument();
  });
});
