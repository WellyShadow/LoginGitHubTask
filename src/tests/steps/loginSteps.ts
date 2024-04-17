import { Given, When, Then  } from "@cucumber/cucumber"
import { Page, Browser, chromium, expect } from '@playwright/test';



let browser: Browser;
let page: Page;

Given('I am on the GitHub login page', async function () {
    browser = await chromium.launch({headless:false})
    page = await browser.newPage()
    await page.goto('https://github.com/login')
});

When('I enter my username and password', async function () {
    
    await page.locator('#login_field').fill('1')
    await page.locator('#password').fill('1')
});

When('I click the login button', async function () {
    await page.locator('//input[@name="commit"]').click()
}); 

Then('I should be logged in successfully', async function () {
    await expect(page).toHaveURL('https://github.com/')
    await browser.close();
});