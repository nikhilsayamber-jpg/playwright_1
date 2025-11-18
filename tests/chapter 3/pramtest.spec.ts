import { test, expect } from '@playwright/test';

const datas = ['Playwright by testers talk','cypress by testers talk', 'API testing by testers talk ']


for (const data of datas) {

    test(`paramatrize tests ${data}`,async({page})=>{

    await page.goto("https://www.google.com/");

    // await page.goto("https://www.google.com/search")

     await page.getByLabel("Search").first().click();

    await page.getByLabel("Search",{exact:true}).first().fill(data);

    await page.getByLabel("Search").first().press('Enter');

    await page.getByRole("link",{name:data}).first().click();

    await expect(page).toHaveTitle(data+" - Google Search")
})
}