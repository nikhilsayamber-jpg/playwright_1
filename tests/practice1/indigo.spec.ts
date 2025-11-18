import{test,expect}from '@playwright/test';

test("flight booking",async({page})=>{
    
    await page.goto("https://www.goindigo.in/add-on-services/6exclusive-fare.html?utm_source=Display&utm_medium=Awareness_CPM&utm_campaign=BAU|GrabOn|16September2025&cid=Publisher|P|Display|BAU|GrabOn|_{snkg}_|16september2025&gad_source=1")
    await page.waitForLoadState("networkidle");
    await page.getByText("Book").first().click();


})