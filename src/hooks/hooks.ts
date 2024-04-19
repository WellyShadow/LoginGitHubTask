import {Before, After, BeforeAll, AfterAll} from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { getEnv } from "../helper/env/env";

let browser:Browser;
let context: BrowserContext;

BeforeAll(async function(){
    getEnv();
    browser = await chromium.launch({headless:false});
});

Before (async function(){
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function(){
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});