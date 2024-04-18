import { Given, When, Then, setDefaultTimeout  } from "@cucumber/cucumber"
import { expect } from '@playwright/test';
import { pageFixture } from "../../hooks/pageFixture";



setDefaultTimeout(60 * 1000 * 2)



Given('I am on the GitHub login page', async function () {
    await pageFixture.page.goto('https://github.com/login')
});

When('I enter my username and password', async function () {
    
    await pageFixture.page.locator('#login_field').fill('WellyShadow')
    await pageFixture.page.locator('#password').fill('jyU;12&7)r35')
});

When('I click the login button', async function () {
    await pageFixture.page.locator('//input[@name="commit"]').click()
}); 

Then('I should be logged in successfully', async function () {
    await expect(pageFixture.page).toHaveURL('https://github.com/')
});