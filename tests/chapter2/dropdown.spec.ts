import{test,expect}from '@playwright/test';
test("handling dropdown",async({page})=>{
    await page.goto("https://www.facebook.com/");
    await page.getByRole("button",{name:'Create new account'}).click();

//   select dropdown using value
    await page.locator("//*[@name='birthday_day']").selectOption('3');

// select dropdown using visible test

    await page.getByLabel('Month').selectOption("Aug");
    await page.getByLabel("Year").selectOption("1999");
})    