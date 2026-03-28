import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ThemeAwareScreenshot from "./ThemeAwareScreenshot";

vi.mock("next/image", () => ({
  default: ({ src, className }: { src: string; className: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} className={className} alt="" />
  ),
}));

describe("ThemeAwareScreenshot", () => {
  it("renders both light and dark images", () => {
    const { container } = render(
      <ThemeAwareScreenshot language="en" name="home" />,
    );
    const imgs = container.querySelectorAll("img");
    expect(imgs).toHaveLength(2);
  });

  it("uses the provided name in image src", () => {
    const { container } = render(
      <ThemeAwareScreenshot language="en" name="paywall" />,
    );
    const srcs = Array.from(container.querySelectorAll("img")).map((img) =>
      img.getAttribute("src"),
    );
    expect(srcs.every((s) => s?.includes("paywall"))).toBe(true);
  });

  it("uses en suffix for English", () => {
    const { container } = render(
      <ThemeAwareScreenshot language="en" name="home" />,
    );
    const srcs = Array.from(container.querySelectorAll("img")).map((img) =>
      img.getAttribute("src"),
    );
    expect(srcs.every((s) => s?.endsWith("-en.png"))).toBe(true);
  });

  it("uses es suffix for Spanish", () => {
    const { container } = render(
      <ThemeAwareScreenshot language="es" name="home" />,
    );
    const srcs = Array.from(container.querySelectorAll("img")).map((img) =>
      img.getAttribute("src"),
    );
    expect(srcs.every((s) => s?.endsWith("-es.png"))).toBe(true);
  });

  it("falls back to en for unknown languages", () => {
    const { container } = render(
      <ThemeAwareScreenshot language="fr" name="home" />,
    );
    const srcs = Array.from(container.querySelectorAll("img")).map((img) =>
      img.getAttribute("src"),
    );
    expect(srcs.every((s) => s?.endsWith("-en.png"))).toBe(true);
  });

  it("applies dark-only and light-only CSS classes", () => {
    const { container } = render(
      <ThemeAwareScreenshot language="en" name="home" />,
    );
    expect(container.querySelector(".dark-only")).toBeInTheDocument();
    expect(container.querySelector(".light-only")).toBeInTheDocument();
  });
});
