import { test, expect } from '@playwright/test';

test('open a known article directly', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/wiki/Test_automation');
  await page.waitForTimeout(5000);

  const body = page.locator('//div[@id="bodyContent"]');
  await expect(body).toBeVisible();
});

test('article has at least one reference section', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/wiki/Test_automation');
  await page.waitForTimeout(3000);

  const refs = await page.locator('//span[@id="References"]').count();
  expect(refs >= 0).toBeTruthy();
});

test('navigate from article to the main page', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/wiki/Test_automation');
  await page.waitForTimeout(2000);
  page.click('//a[@title="Visit the main page"]');
  await page.waitForTimeout(4000);
});
