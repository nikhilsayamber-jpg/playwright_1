import{test,expect} from '@playwright/test';

test("result",async({page})=>{

    await page.goto("https://www.google.com/search");

    await page.getByLabel("Search").first().click();

    await page.getByLabel("Search").first().fill("playwright tutorial");

    await page.getByLabel("Search").first().press("Enter");

    const results = page.locator("#search"); 
    console.log(results);
    
    await expect(results).toBeVisible();

    


})