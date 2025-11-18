import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Mobiles & Tablets' }).click();
  await page.getByRole('link', { name: 'Mobiles', exact: true }).click();
      await page.waitForLoadState("networkidle");

  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Samsung Galaxy F07 (Green, 64 GB)').click();
  const page1 = await page1Promise;
       await page1.waitForLoadState("networkidle");

  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
});

