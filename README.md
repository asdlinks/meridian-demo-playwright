# meridian-demo-playwright

A small Playwright suite against Wikipedia, used to demonstrate Meridian's Automation Quality
Governance scan, the Take Action & Optimize flow, and pull-request generation.

**This suite deliberately contains anti-patterns.** It is a fixture, not an example to copy:
hardcoded waits, brittle XPath selectors, un-awaited actions, tests with no assertions, weak
assertions, hardcoded production URLs, and no CI workflow. The scan is expected to score it poorly
and propose fixes.
