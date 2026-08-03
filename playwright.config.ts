import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 3,
  use: {
    baseURL: 'https://www.wikipedia.org',
    headless: true,
  },
});
