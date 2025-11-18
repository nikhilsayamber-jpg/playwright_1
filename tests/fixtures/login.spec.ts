import{test as base,expect,Page}from '@playwright/test';
type Fixtures = {
  loggedInPage: Page;
};
export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');

    await page.click('button[type="submit"]');

    await use(page);
  }
});
test('dashboard loads after login', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('#flash')).toContainText('You logged into a secure area!');
});
