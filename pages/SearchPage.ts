import { Page } from '@playwright/test';

/** Page object for the Wikipedia portal. Specs are supposed to go through this, but several
 *  reach past it and use raw selectors directly — which is exactly what the scan should flag. */
export class SearchPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://www.wikipedia.org');
    await this.page.waitForTimeout(2000);
  }

  async searchFor(term: string) {
    await this.page.fill('#searchInput', term);
    await this.page.click('button[type="submit"]');
    await this.page.waitForTimeout(3000);
  }
}
