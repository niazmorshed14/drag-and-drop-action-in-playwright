/* 
We can perform drag&drop operation with locator.dragTo(). This method will:

Hover the element that will be dragged.
Press left mouse button.
Move mouse to the element that will receive the drop.
Release left mouse button.

If we want precise control over the drag operation, use lower-level methods like locator.hover(), mouse.down(), mouse.move() and mouse.up().

await page.locator('#item-to-be-dragged').hover();
await page.mouse.down();
await page.locator('#item-to-drop-at').hover();
await page.mouse.up();
*/

import {test, expect} from '@playwright/test';

test("Drag & Drop in Playwright", async ({page})=>{
    
    //visiting the page
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    await page.waitForTimeout(3000);

    const sourceElement = await page.locator('#box6'); //source element is the element what we cant to move using drag & drop
    const targetElement = await page.locator('#box106'); //target element is the element where we want to move our source element using drag&drop

    //approach 1
    await sourceElement.hover();
    await page.mouse.down(); //left click on the mouse

    await targetElement.hover();
    await page.mouse.up(); //releasing the mouse
    
    await page.waitForTimeout(3000);
    
    //approach 2
    await sourceElement.dragTo(targetElement);
    await page.waitForTimeout(3000);


});