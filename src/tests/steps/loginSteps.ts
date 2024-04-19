import { Given, When, Then } from "@cucumber/cucumber"
import "../../helper/wait/wait.js";
import { GithubLoginPage } from "../../pages/github-login-page";

const page = new GithubLoginPage();

Given('I am on the GitHub login page', async function () {
    await page.goto()
});

When('I enter my username', async function () {
    await page.inputSuccessLogin()
});

When('I enter my password', async function () {
    await page.inputSuccessPass()
});

When('I click the login button', async function () {
    await page.submitLogin()
}); 

Then('I should be logged in successfully', async function () {
    await page.verifySuccessLogin()
});

When('I enter my username as {string}', async function (username) {
    await page.inputFailedLogin(username)
});

When('I enter my password as {string}', async function (password) {
    await page.inputFailedPass(password)
});

Then('I should get an error', async function () {
    await page.verifyFailedLogin()
});

