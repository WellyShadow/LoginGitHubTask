import { Given, When, Then, setDefaultTimeout  } from "@cucumber/cucumber"

import { GithubLoginPage } from "../../pages/github-login-page";

setDefaultTimeout(60 * 1000 * 2)

const page = new GithubLoginPage();

Given('I am on the GitHub login page', async function () {
    await page.goto()
});

When('I enter my username and password', async function () {
    await page.inputSuccessLoginAndPass()
});


When('I click the login button', async function () {
    await page.submitLogin()
}); 

Then('I should be logged in successfully', async function () {
    await page.verifySuccessLogin()
});

When('I enter my {string} and {string}', async function (username, password) {
    await page.inputFailedLoginAndPass(username, password)
});

Then('I should get an error', async function () {
    await page.verifyFailedLogin()
});

