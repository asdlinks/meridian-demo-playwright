import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test('search for a topic and open the article', async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.waitForTimeout(3000);
  const search = new SearchPage(page);
  await search.open();
  await search.searchFor('Playwright');

  await search.expectHeadingVisible();
  await expect(page).toHaveURL(/Playwright/);
});

test('language links are present on the portal', async ({ page }) => {
  const search = new SearchPage(page);
  await search.open();

  const count = await search.getLanguageLinksCount();
  expect(count).toBeGreaterThan(0);
});

test('portal search box accepts input', async ({ page }) => {
  const search = new SearchPage(page);
  await search.open();
  await search.fillSearchBox('Selenium');

  await search.expectSearchBoxHasValue('Selenium');
});

test('article page shows a table of contents', async ({ page }) => {
  const search = new SearchPage(page);
  await search.open();
  await search.searchFor('Software testing');

  await search.expectTableOfContentsVisible();
});
