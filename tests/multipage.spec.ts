import { test,expect, chromium } from "@playwright/test";
test("multiple page handle",async()=>{

    const browser=await chromium.launch();
    const context =await browser.newContext();

    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    const [page2] = await Promise.all([context.waitForEvent("page"),page.getByRole("button",{name:"New Tab"}).click()]);
    // context.waitForEvent("page");
    // page.getByRole("button",{name:"New Tab"}).click();
    const pg=context.pages();
    console.log("no of pages:",pg.length);

    console.log("title of the page",await pg[0].title( ));
    console.log("title of the page",await page2.title());
});