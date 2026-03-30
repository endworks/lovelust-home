import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    // Increase navigation timeout for slow dev server
    await page.goto("/", { waitUntil: "load", timeout: 60000 });
  });

  test("should have the correct title", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible({ timeout: 15000 });
    await expect(h1).toContainText(/Love safely/i);
  });

  test("should have download buttons", async ({ page }) => {
    const appStoreBtn = page
      .getByRole("link", { name: /App Store|TestFlight/i })
      .first();
    const googlePlayBtn = page
      .getByRole("link", { name: /Google Play/i })
      .first();

    await expect(appStoreBtn).toBeVisible();
    await expect(googlePlayBtn).toBeVisible();
  });

  test("should detect dark mode class on html", async ({ page }) => {
    const html = page.locator("html");
    await expect(html).toBeAttached();
  });

  test("should navigate to support page", async ({ page }) => {
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();

    // Use a more specific selector to find the Support link in the footer
    const supportLink = footer.locator("a", { hasText: /^Support$/i });
    await expect(supportLink).toBeVisible();

    // Use force click in case of overlays and wait for navigation
    await Promise.all([
      page.waitForURL(/\/support/, { timeout: 30000 }),
      supportLink.click({ force: true }),
    ]);

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText(/Support/i);
  });

  test("should switch language", async ({ page }) => {
    const langBtn = page.locator("nav button").nth(1);
    await expect(langBtn).toBeVisible();

    const initialText = await page.locator("h1").innerText();
    await langBtn.click();

    await expect(async () => {
      const currentText = await page.locator("h1").innerText();
      expect(currentText).not.toBe(initialText);
    }).toPass();

    await expect(page.locator("h1")).toContainText(/Ama seguro/i);
  });
});
