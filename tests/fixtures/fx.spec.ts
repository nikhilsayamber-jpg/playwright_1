import{test, expect}from '../fixtures/fixture';

test('verify secure page', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('#flash')).toContainText('You logged into a secure area!');
});