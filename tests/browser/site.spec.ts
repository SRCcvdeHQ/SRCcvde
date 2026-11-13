import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
for (const path of [
  "/",
  "/services",
  "/start",
  "/privacy",
  "/terms",
  "/cookies",
  "/accessibility",
]) {
  test(`${path} has a direct route, metadata, and accessible content`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["content-security-policy"]).toContain(
      "frame-ancestors 'none'",
    );
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
      "href",
      `https://srccvde.com${path === "/" ? "/" : path}`,
    );
    expect(errors).toEqual([]);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  });
}
test("retired pages redirect to their home sections", async ({ request }) => {
  for (const [from, to] of [
    ["/process", "/#process"],
    ["/work", "/#work"],
    ["/about", "/#about"],
  ]) {
    const res = await request.get(from, { maxRedirects: 0 });
    expect(res.status()).toBe(301);
    expect(res.headers()["location"]).toContain(to);
  }
});
test("unknown URL returns a real 404", async ({ page }) => {
  expect((await page.goto("/not-a-real-page"))?.status()).toBe(404);
});
test("failed intake preserves the brief", async ({ page }) => {
  await page.route("**/api/inquiry", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({ error: "Please retry later." }),
    }),
  );
  await page.goto("/start");
  await page.getByLabel("Your name").fill("Test User");
  await page.getByLabel("Email", { exact: false }).fill("person@example.test");
  await page.getByRole("button", { name: "Website", exact: true }).click();
  await page
    .getByLabel("Tell us the idea")
    .fill("A small website for an isolated automated test.");
  await page.getByRole("button", { name: "Send my idea" }).click();
  await expect(page.getByRole("status")).toContainText("Please retry later.");
  await expect(page.getByLabel("Your name")).toHaveValue("Test User");
});
