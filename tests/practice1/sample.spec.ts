import{test,expect}from '@playwright/test';
import { beforeEach } from 'node:test';
test.beforeEach(async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
})
test("sample check",async({page})=>{

    // await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole("link",{name:'Checkboxes'}).click();
    await page.locator("[type='checkbox']").nth(0).check();
    console.log(await expect(page.locator("[type='checkbox']").nth(0)).toBeChecked());

    await page.locator("[type='checkbox']").nth(1).uncheck();



});
test("dropdown",async({page})=>{

    await page.getByRole("link",{name:'Dropdown'}).click();

    await page.locator("#dropdown").selectOption('1');
    expect(page.locator('#dropdown')).toHaveValue('1');

})
// test("file upload",async({page})=>{

//     await page.getByRole("link",{name:'File Upload'}).click();
//     await page.locator("#file-upload").click();
//     aw 
// })

