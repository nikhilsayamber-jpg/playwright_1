import{test,expect}from '@playwright/test';
import { assert } from 'console';

test("assert succes",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/login");

await page.getByRole("textbox",{name:'username'}).fill("tomsmith");

await page.getByRole("textbox",{name:'password'}).fill("SuperSecretPassword!");

await page.getByRole("button",{name:'Login'}).click();

expect(page.locator("#flash")).toContainText(" You logged into a secure area!");


})