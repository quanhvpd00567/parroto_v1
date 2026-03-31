import { test, expect } from '@playwright/test';

test('memory e2e test to get evidence screenshot', async ({ page }) => {
  // Navigate to the memory page
  await page.goto('/memory.html');

  // Wait for the elements to be present
  const clozeTexts = page.locator('.cloze-text');
  await expect(clozeTexts.first()).toBeVisible();

  // Click all cloze-text spans to reveal the memory words
  const count = await clozeTexts.count();
  for (let i = 0; i < count; i++) {
    await clozeTexts.nth(i).click();
  }

  // Ensure they revealed successfully (asterisks gone from at least the first one)
  const firstText = await clozeTexts.first().textContent();
  expect(firstText).not.toContain('*');

  // Take an evidence screenshot
  await page.screenshot({ path: 'tests/screenshots/memory_evd.png', fullPage: true });
});
