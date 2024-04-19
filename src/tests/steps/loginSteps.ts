import { Given, When, Then } from "@cucumber/cucumber"
import "../../helper/wait/wait.js";
import { GithubLoginPage } from "../../pages/github-login-page";

const page = new GithubLoginPage();

Given('I am on the GitHub login page', async function () {
    await page.goto()
});

When('I enter my username and password', async function () {
    await page.inputSuccessLogin()
    await page.inputSuccessPass()
});

When('I click the login button', async function () {
    await page.submitLogin()
}); 

Then('I should be logged in successfully', async function () {
    await page.verifySuccessLogin()
});

When('I enter my credentials as {string} and {string}', async function (username,password) {
    await page.inputFailedLogin(username)
    await page.inputFailedPass(password)
});

Then('I should get an error', async function () {
    await page.verifyFailedLogin()
});

