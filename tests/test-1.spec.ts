import { test, expect } from '@playwright/test';

test.use({
  screenshot: 'on', 
  video: 'on',
 })

test('test', async ({ page }) => {
  await page.goto('https://www.acko.com/');

  await page.getByRole('link', { name: 'Bike & Scooter' }).click();
  await page.getByRole('textbox',{name:"e.g. MH05VF1234"}).click();  
  await page.getByRole('textbox',{name:"e.g. MH05VF1234"}).fill("mh141234");  
  await page.getByRole('button',{name:"Check ACKO price"}).click();

    await page.screenshot({ path: 'acko-bike-test.png', fullPage: true });

  
});