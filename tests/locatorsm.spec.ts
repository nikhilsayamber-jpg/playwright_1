import{test,expect}from '@playwright/test';

test("lm",async({page})=>
 {

    await page.goto("https://demoblaze.com/");
    const products=await page.$$("//*[@id='tbodyid']/div[1]/div/div/h4/a");
    //*[@id="tbodyid"]/div[1]/div/div/h4/a
    for(const product of products)
    {
        const prname= await product.textContent();
        console.log(prname);
    }

 });