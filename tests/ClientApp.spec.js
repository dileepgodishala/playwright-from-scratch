const {test, page, expect} = require('@playwright/test');

test('Assignment - 1', async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const email = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginButton = page.locator("#login");

    await email.fill("godishaladileep@gmail.com");
    await password.fill("Test@123");
    await loginButton.click();

    await page.waitForLoadState("networkidle");

    const firstItem = await page.locator(".card-body b").allTextContents();
    console.log(firstItem);

});
