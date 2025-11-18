import{test,expect, firefox, chromium} from "@playwright/test";

test("locators",async({page})=>{
    const browser =await chromium.launch();
    const context=await browser.newContext();
    await page.goto("https://www.flipkart.com/");

    await page.getByLabel("Mobiles & Tablets",{exact:true}).first().click();
    await page.getByTitle("Mobiles",{exact:true}).first().click();
     const page1Promise = page.waitForEvent('popup');
    await page.getByText("OPPO K13x 5G 6000mAh and 45W SUPERVOOC Charger & AI (Midnight Violet, 128 GB)",{exact:true}).first().click();
     const page1 = await page1Promise;
    
     await page1.waitForLoadState("networkidle");

    await page1.locator("//*[@id='container']/div/div[3]/div[1]/div[1]/div[2]/div/ul/li[1]/button").click();
    //await page1.getByText("Login",{exact:true}).first().click();
     //await page1.getByRole('button',{name:'Add to cart'}).first().click();
     //await page1.waitForLoadState();
     await page1.getByRole('button',{name:"Place Order"}).click();

    });