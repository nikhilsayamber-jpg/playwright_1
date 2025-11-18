import{test,expect} from '@playwright/test';
test("alert",async({page})=>{

    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");
   
     page.once("dialog",dialog=>{
        dialog.accept();
        console.log("alert message is:",dialog.message());
           console.log('type of alert',dialog.type());

    })

    await page.getByText(" See an example alert",{exact:true}).click();

});


//////////////////////confirmation alert



// import{test,expect} from '@playwright/test';
test(" confirmation alert",async({page})=>{

    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");
   
     page.once("dialog",dialog=>{
        //dialog.accept();
        dialog.dismiss(); 
        console.log("alert message is:",dialog.message());
           console.log('type of alert',dialog.type());

    })

    await page.getByText(" See a sample confirm",{exact:true}).click();

});



// //////////////////////  PROMPT ALERT

// import{test,expect} from '@playwright/test';
test(" Prompt alert",async({page})=>{

    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");

    page.once('dialog',async(dialog)=>{
        console.log("alert message is :",dialog.message());
        dialog.accept('nikhil');
        console.log('type of alert',dialog.type());
    })

    await page.getByText("See a sample prompt",{exact:true}).click();
})