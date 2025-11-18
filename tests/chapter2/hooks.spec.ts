import{test,expect} from "@playwright/test";
 test.beforeAll(async()=>{
    console.log("running before all the tests.....");
 })
 test.afterAll(async()=>{

    console.log("runnning after all the tests.....");
 })
 test.beforeEach(async({page})=>{
    await page.goto("http://www.youtube.com/")

    console.log("runnung brfore each test");
 })
 test.afterEach(async()=>{

    console.log("running after each test");
 })
test('test1',async({page})=>{

// await page.goto("http://www.youtube.com/")
// await page.getByPlaceholder("Search").fill("testers talk"); 

// await page.locator("//*[@name='search_query']").fill("testers talk");

await page.locator("*[name='search_query']").fill("testers talk");


})
test('tes2',async({page})=>{

// await page.goto("http://www.youtube.com/")
// await page.getByPlaceholder("Search").fill("testers talk"); 

// await page.locator("//*[@name='search_query']").fill("testers talk");

await page.locator("*[name='search_query']").fill("testers talk");


})