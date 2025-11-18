import{test,expect}from '@playwright/test';

test("date picker",async({page})=>{

    await page.goto("https://jqueryui.com/datepicker/")

    const iframe=page.frameLocator("[class='demo-frame']");
    
    // hardcode date
    await iframe.locator("#datepicker").fill('08/03/1999');

    // dynamic date selecting
    await iframe.locator("#datepicker").click();
    await iframe.locator(".ui-datepicker-today").click();


    // selecting future date
    await iframe.locator("#datepicker").click();
    await iframe.locator("[title='Prev']").click();
    await iframe.locator("text='15'").click();

})