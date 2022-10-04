// global-setup.ts
import { chromium, FullConfig } from "@playwright/test";
import { LoginPage } from "./page-objects/login-page";
import { Credentials } from "./secrets";

async function globalSetup(config: FullConfig) {
  //const lp = new LoginPage(page);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(Credentials.URL);
  await page.locator("#username").fill(Credentials.USERNAME);
  await page.locator("#password").fill(Credentials.PASSWORD);
  await page.locator("#Login").click();
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
