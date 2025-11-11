import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.acko.com/');
  await page.getByRole('link', { name: 'Car insurance Fair prices.' }).click();
  await page.getByRole('textbox', { name: 'e.g. MH05VF1234' }).click();
  await page.getByRole('textbox', { name: 'e.g. MH05VF1234' }).fill('mh14lj2345');
  await page.getByRole('button', { name: 'Check ACKO price' }).click();
  await page.goto('https://www.acko.com/gi/auto-storefront/fresh-car/vehicle-prequote?proposal_ekey=zvW_kVl7Z8tTynHanlGEdQ&current_node=previous_claim_confirmation_node&registration_number=MH14LJ2345');
});