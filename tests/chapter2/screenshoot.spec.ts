import{test,expect} from '@playwright/test';

test("screenshot of element",async({page})=>{

    await page.goto("https://www.facebook.com/");

    //element screenshot
    await page.getByTestId("royal_login_form").first().screenshot({path:'./screenshot/element.png'});
    //page screenshot
    await page.screenshot({path:'./screenshot/page.png'});
    //full page screenshot
    await page.screenshot({path:'./screenshot/fullPage.png',fullPage:true});
});