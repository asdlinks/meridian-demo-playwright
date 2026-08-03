import { Page, Locator, expect } from '@playwright/test';

/** Page object for the Wikipedia portal. All selectors and actions live here; specs should
 *  only call these business-level methods. */
export class SearchPage {
  private readonly searchInput: Locator;
  private readonly searchSubmit: Locator;
  private readonly firstHeading: Locator;
  private readonly languageLinks: Locator;
  private readonly tableOfContents: Locator;

  constructor(private readonly page: Page) {
    this.searchInput = page.getByRole('searchbox');
    this.searchSubmit = page.getByRole('button', { name: /search/i });
    this.firstHeading = page.getByRole('heading', { level: 1 });
    this.languageLinks = page.locator('.central-featured').getByRole('link');
    this.tableOfContents = page.getByRole('navigation', { name: /contents/i });
  }

  async open() {
    await this.page.goto(process.env.BASE_URL || 'https://www.wikipedia.org');
    await expect(this.searchInput).toBeVisible();
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await this.searchSubmit.click();
  }

  async expectHeadingVisible() {
    await expect(this.firstHeading).toBeVisible();
  }

  async getLanguageLinksCount(): Promise<number> {
    return this.languageLinks.count();
  }

  async fillSearchBox(term: string) {
    await this.searchInput.fill(term);
  }

  async expectSearchBoxHasValue(term: string) {
    await expect(this.searchInput).toHaveValue(term);
  }

  async expectTableOfContentsVisible() {
    await expect(this.tableOfContents).toBeVisible();
  }
}
