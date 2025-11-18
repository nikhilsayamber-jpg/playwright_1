import{test,expect} from '@playwright/test';

test("mouse actions",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
// left click
await page.getByRole("button",{name:'Confirmation Alert'}).click({button:'left'});

// Right click
// await page.getByRole("button",{name:"Point Me"}).click({button:'right'});

// Duble click
// await page.getByRole("button",{name:'Copy Text'}).dblclick();


});