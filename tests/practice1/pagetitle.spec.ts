import {test,expect}from '@playwright/test';
import { SyntheticModule } from 'vm';

test("psge title",async({page})=>{

    await page.goto("https://example.com");

    const title=await page.title();
    console.log("title is ",title);
    await expect(page).toHaveTitle("Example Domain");
    const url=page.url();
    console.log("url is ",url)
     expect(url).toContain("https://example.com");

})