import{test,expect} from '@playwright/test';
test("Drag and drop",async({page})=>{

    await page.goto("https://jqueryui.com/");
    await page.getByText("Droppable").click();
    const iframe=page.frameLocator("//*[@class='demo-frame']");

    const draggableele=iframe.locator("//*[@id='draggable']") 
    const droppableele=iframe.locator("//*[@id='droppable']") 

    await draggableele.dragTo(droppableele);
    
});