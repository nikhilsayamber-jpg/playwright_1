import{test,expect}from '@playwright/test';

test("practice",async({page})=>{

    await page.goto("https://accounts.lambdatest.com/login")
})