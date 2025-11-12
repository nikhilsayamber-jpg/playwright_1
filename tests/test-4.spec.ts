import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Mobiles & Tablets' }).click();
  await page.getByRole('link', { name: 'Mobiles', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'OPPO K13x 5G 6000mAh and 45W SUPERVOOC Charger & AI (Midnight Violet, 128 GB)' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
});