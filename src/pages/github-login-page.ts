import { expect } from '@playwright/test';
import { pageFixture } from "../hooks/pageFixture";
const locators = {
  "username_input": "#login_field",
  "password_input": "#password",
  "login_button": '#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button', 
}
const baseurl = 'https://github.com/'

export class GithubLoginPage {

  async goto() {
    await pageFixture.page.goto(baseurl+'login');
  }

  async inputSuccessLogin(){
    await pageFixture.page.locator(locators.username_input).fill(process.env.GITHUB_USERNAME)
  }

  async inputSuccessPass(){
    await pageFixture.page.locator(locators.password_input).fill(process.env.GITHUB_PASSWORD)
  }

  async inputFailedLogin(username){
    await pageFixture.page.locator(locators.username_input).fill(username)
  }

  async inputFailedPass(password){
    await pageFixture.page.locator(locators.password_input).fill(password)
  }

  async submitLogin(){
    await pageFixture.page.locator(locators.login_button).click()
  }

  async verifySuccessLogin(){
    await expect(pageFixture.page).toHaveURL(baseurl)
  }
  
  async verifyFailedLogin(){
    await expect(pageFixture.page.getByRole('alert')).toBeVisible()
  }

}