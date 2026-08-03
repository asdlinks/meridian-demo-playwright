# meridian-demo-playwright

A small Playwright suite against Wikipedia, used to demonstrate Meridian's Automation Quality
Governance scan, the Take Action & Optimize flow, and pull-request generation.

**This suite deliberately contains anti-patterns.** It is a fixture, not an example to copy:
hardcoded waits, brittle XPath selectors, un-awaited actions, tests with no assertions, weak
assertions, hardcoded production URLs, and no CI workflow. The scan is expected to score it poorly
and propose fixes.

## Configuration

This suite uses an environment-driven base URL instead of hardcoded production endpoints.

- `BASE_URL`: the base URL used by `playwright.config.ts`, `pages/SearchPage.ts`, and
  `tests/article.spec.ts`. Defaults to `https://www.wikipedia.org` if not set.

Example:

```sh
BASE_URL=https://www.wikipedia.org npx playwright test
```

Set `BASE_URL` in your local `.env` file or CI environment to point the suite at a staging
environment rather than production.
