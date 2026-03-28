import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PhoneMockup from "./PhoneMockup";

// Mock ThemeAwareScreenshot since it might load images or have complex logic
vi.mock("./ThemeAwareScreenshot", () => ({
  default: () => <div data-testid="screenshot" />,
}));

describe("PhoneMockup", () => {
  it("renders the screenshot", () => {
    render(<PhoneMockup language="en" isDark={false} />);
    expect(screen.getByTestId("screenshot")).toBeInTheDocument();
  });

  it("renders privacy pill (visibility controlled by CSS)", () => {
    render(<PhoneMockup language="en" isDark={false} />);
    expect(screen.getByText("AesCfbEncrypted")).toBeInTheDocument();
  });

  it("renders decorative elements", () => {
    const { container } = render(<PhoneMockup language="en" isDark={false} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
