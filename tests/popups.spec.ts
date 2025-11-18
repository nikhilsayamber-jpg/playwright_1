import{test,expect, chromium} from '@playwright/test';

test("popup",async()=>{


    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")
    // page.waitForEvent('popup');
    // await page.getByRole('button',{name:'Popup Windows'}).click();
    await Promise.all([page.waitForEvent('popup'),await page.getByRole('button',{name:'Popup Windows'}).dblclick()]);

    const ap=context.pages();
    console.log("number of pages",ap.length);
    console.log("url",ap[0].url());
    console.log("url",ap[1].url());
             
    
});
