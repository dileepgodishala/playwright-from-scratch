const {test, page, expect} = require('@playwright/test');

test('1st PW Test case - Browser context declaration', async({browser}) =>
{       

    //Opens new context - new browser  
    const context = await browser.newContext();

    //Opens a blank page
    const page = await context.newPage();
    //Locators
    const username = page.locator('#username');
    const password = page.locator("[name='password']");
    const signInButton = page.locator("#signInBtn");
    const errormessage = await page.locator("[style*='block']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // console.log(await page.title());

    const pageTitle = await page.title();

    await expect(page).toHaveTitle(pageTitle);

    await username.fill("rahulshettyacademy");

    await password.fill("Learning@830$3mK21");

    await signInButton.click();

    console.log(await errormessage.textContent());

    expect(await errormessage.textContent()).toContain("Incorrect username/password.");

    await password.fill("");

    await password.fill("Learning@830$3mK2");

    await signInButton.click();

    const phoneName = page.locator(".card-body a");

    console.log(await phoneName.first().textContent());
    // console.log(await phoneName.nth(1).textContent());
    // console.log(await phoneName.last().textContent());

    const allPhoneNames = await phoneName.allTextContents();

    console.log(allPhoneNames);

});

test('2nd PW test - Using page directly as argument', async({page}) =>
{
    await page.goto("https://google.com/");
    // console.log(await page.title());

    const pageTitle = await page.title();

    await expect(page).toHaveTitle(pageTitle);

});
