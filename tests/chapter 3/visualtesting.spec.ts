import{test,expect}from '@playwright/test';

test("visual compariosn",async({page})=>{

    await page.goto("https://github.com/login");

    await expect(page).toHaveScreenshot("githubliginpage.png");

    await page.getByRole("textbox",{name:'username'}).fill("abcdefg");

    await expect(page).toHaveScreenshot("githubliginpage.png");


})

test("element visual compariosn",async({page})=>{

    await page.goto("https://github.com/login");

    await expect(page).toHaveScreenshot("githubliginpage.png");

    const element=page.locator("[class='authentication-body authentication-body--with-form new-session']");

    // await page.getByRole("textbox",{name:'username'}).fill("abcdefg");

    await expect(element).toHaveScreenshot("githubliginform.png");


})
