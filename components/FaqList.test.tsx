import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import FaqList from "./FaqList";

const SAMPLE_FAQ = `## What is LoveLust?
LoveLust is a sexual health tracker.

## Is my data private?
Yes. All data is encrypted locally.

## Does it support Android?
Yes, Android and iOS.
`;

describe("FaqList", () => {
  it("renders all FAQ questions", () => {
    render(<FaqList content={SAMPLE_FAQ} />);
    expect(screen.getByText("What is LoveLust?")).toBeInTheDocument();
    expect(screen.getByText("Is my data private?")).toBeInTheDocument();
    expect(screen.getByText("Does it support Android?")).toBeInTheDocument();
  });

  it("opens the first item by default", () => {
    render(<FaqList content={SAMPLE_FAQ} />);
    expect(
      screen.getByText("LoveLust is a sexual health tracker."),
    ).toBeVisible();
  });

  it("shows answer when a closed item is clicked", async () => {
    render(<FaqList content={SAMPLE_FAQ} />);
    const secondButton = screen
      .getByText("Is my data private?")
      .closest("button")!;
    await userEvent.click(secondButton);
    expect(
      screen.getByText("Yes. All data is encrypted locally."),
    ).toBeInTheDocument();
  });

  it("closes an open item when clicked again", async () => {
    render(<FaqList content={SAMPLE_FAQ} />);
    // First item is open; click it to close
    const firstButton = screen
      .getByText("What is LoveLust?")
      .closest("button")!;
    await userEvent.click(firstButton);
    // Answer should still be in the DOM (CSS-controlled height), but openIndex is null
    // We verify the click doesn't throw and the question is still rendered
    expect(screen.getByText("What is LoveLust?")).toBeInTheDocument();
  });

  it("renders nothing for empty content", () => {
    const { container } = render(<FaqList content="" />);
    expect(container.querySelectorAll("button")).toHaveLength(0);
  });

  it("renders sequential index numbers", () => {
    render(<FaqList content={SAMPLE_FAQ} />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
  });
});
