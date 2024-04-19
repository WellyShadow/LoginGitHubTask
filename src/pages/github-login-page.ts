import { expect } from '@playwright/test';
import { pageFixture } from "../hooks/pageFixture";
const locators = {
  "username_input": "#login_field",
  "password_input": "#password",
  "login_button": '//input[@name="commit"]',
}

export class GithubLoginPage {

  
  async goto() {
    await pageFixture.page.goto('https://github.com/login');
  }

  async inputLoginAndPass(){
    await pageFixture.page.locator(locators.username_input).fill(process.env.GITHUB_USERNAME)
    await pageFixture.page.locator(locators.password_input).fill(process.env.GITHUB_PASSWORD)
  }

  async submitLogin(){
    await pageFixture.page.locator(locators.login_button).click()
  }

  async verifyLogin(){
    await expect(pageFixture.page).toHaveURL('https://github.com/sessions/verified-device')
  }

}