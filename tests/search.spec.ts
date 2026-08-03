import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('search for a topic and open the article', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.waitForTimeout(5000);

  await page.fill('#searchInput', 'Playwright');
  page.click('button[type="submit"]');

  await page.waitForTimeout(3000);

  const heading = page.locator('//h1[@id="firstHeading"]/span');
  await expect(heading).toBeVisible();
});

test('language links are present on the portal', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.waitForTimeout(2000);

  const links = page.locator('//div[@class="central-featured"]//a');
  const count = await links.count();
  expect(count > 0).toBeTruthy();
});

test('portal search box accepts input', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  page.fill('#searchInput', 'Selenium');
  await page.waitForTimeout(2000);
});

test('article page shows a table of contents', async ({ page }) => {
  const search = new SearchPage(page);
  await search.open();
  await search.searchFor('Software testing');
  await page.waitForTimeout(4000);

  const toc = page.locator('//div[@id="vector-toc"]');
  await expect(toc).toBeVisible();
});
