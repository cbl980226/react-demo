import { test, expect } from '@playwright/test';

test('homepage has Demo in title', async ({ page }) => {
  await page.goto('http://localhost:9999/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Demo/);
});
