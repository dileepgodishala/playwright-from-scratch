const {test, page, expect} = require('@playwright/test');

test('1st PW Test case - Browser context declaration', async({browser}) =>
{       
    //Opens new context - new browser  
    const context = await browser.newContext();

    //Opens a blank page
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // console.log(await page.title());

    const pageTitle = await page.title();

    await expect(page).toHaveTitle(pageTitle);

});


test('2nd PW test - Using page directly as argument', async({page}) =>
{
    await page.goto("https://google.com/");
    // console.log(await page.title());

    const pageTitle = await page.title();
    
    await expect(page).toHaveTitle(pageTitle);

});
