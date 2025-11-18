import{test,expect}from '@playwright/test';

test('keyboard actions',async({page})=>{

    await page.goto("https://www.google.com/search")

    await page.getByLabel("Search").first().click();

    await page.getByLabel("Search").first().fill("testers talk");

    await page.getByLabel("Search").first().press('Enter');

    // await page.getByLabel("Search").first().click();

    // await page.keyboard.press('Control+A');

    // await page.keyboard.press("Delete");

    //  await page.getByLabel("Search",{exact:true}).first().click();

    // await page.keyboard.press('Tab');

    // await page.keyboard.press("Enter");
})