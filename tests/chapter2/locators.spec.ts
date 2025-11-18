import{test,expect}from '@playwright/test';

test("locators",async({page})=>{

// await page.goto("https://github.com/nikhilsayamber-jpg/");

// await page.getByRole('link',{name:'sign in'}).click();

// await page.getByLabel("Homepage",{exact:true}).click();

// await page.getByAltText("View nikhilsayamber-jpg").click();

// await page.getByTestId('projects').first().click();

// await page.getByText("Sign up").click();

await page.goto("http://www.youtube.com/")
// await page.getByPlaceholder("Search").fill("testers talk"); 

// await page.locator("//*[@name='search_query']").fill("testers talk");

await page.locator("*[name='search_query']").fill("testers talk");

});