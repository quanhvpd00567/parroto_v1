import { test } from '@playwright/test';

test.beforeEach(async () => {
  // Increase timeout for slow dev server
  test.setTimeout(60000);
});

test('capture screenshots of new pages', async ({ page }) => {
  // Landing Page
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'landing-page.png', fullPage: true });

  // Lesson Library Page
  await page.goto('http://localhost:5173/lessons');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'lesson-library.png', fullPage: true });

  // Practice Session Page
  await page.goto('http://localhost:5173/practice');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'practice-session.png', fullPage: true });
});
