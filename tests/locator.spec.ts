import{test,expect, firefox} from "@playwright/test";

test("locators",async({page})=>{

    await page.goto("https://www.flipkart.com/");

    await page.getByLabel("Mobiles & Tablets",{exact:true}).first().click();
    await page.getByTitle("Mobiles",{exact:true}).first().click();
    await page.getByText("OPPO K13x 5G 6000mAh and 45W SUPERVOOC Charger & AI (Midnight Violet, 128 GB)",{exact:true}).first().click();
   // await page.locator('//button[@class="QqFHMw vslbG+ In9uk2"]').first().click();
    await page.getByText("Login",{exact:true}).first().click();
    
});