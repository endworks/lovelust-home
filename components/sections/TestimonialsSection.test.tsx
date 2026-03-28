import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TestimonialsSection from "./TestimonialsSection";

const TESTIMONIALS = [
  { quote: "Great app!", name: "Alice", platform: "App Store", rating: 5 },
  { quote: "Very useful.", name: "Bob", platform: "Google Play", rating: 4 },
];

describe("TestimonialsSection", () => {
  it("renders all testimonials", () => {
    render(<TestimonialsSection testimonials={TESTIMONIALS} />);
    expect(screen.getByText("Great app!")).toBeInTheDocument();
    expect(screen.getByText("Very useful.")).toBeInTheDocument();
  });

  it("renders reviewer names", () => {
    render(<TestimonialsSection testimonials={TESTIMONIALS} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("renders platform labels", () => {
    render(<TestimonialsSection testimonials={TESTIMONIALS} />);
    expect(screen.getByText("App Store")).toBeInTheDocument();
    expect(screen.getByText("Google Play")).toBeInTheDocument();
  });

  it("renders empty state without crashing", () => {
    const { container } = render(<TestimonialsSection testimonials={[]} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<TestimonialsSection testimonials={TESTIMONIALS} />);
    // t() returns the key in tests
    expect(screen.getByText("TestimonialsTitle")).toBeInTheDocument();
  });
});
