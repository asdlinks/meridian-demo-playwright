import { test, expect } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'https://www.wikipedia.org';
const articleUrl = `${baseURL}/wiki/Test_automation`;

test('open a known article directly', async ({ page }) => {
  await page.goto(articleUrl);

  const body = page.getByRole('main');
  await expect(body).toBeVisible();
});

test('article has at least one reference section', async ({ page }) => {
  await page.goto(articleUrl);

  const refs = page.getByRole('heading', { name: /references/i });
  const count = await refs.count();
  expect(count).toBeGreaterThanOrEqual(0);
});

test('navigate from article to the main page', async ({ page }) => {
  await page.goto(articleUrl);

  const mainPageLink = page.getByRole('link', { name: 'Visit the main page' });
  await mainPageLink.click();

  await expect(page).toHaveURL(new RegExp(`${baseURL}/?$`));
});
