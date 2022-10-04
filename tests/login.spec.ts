import { test, expect } from '@playwright/test';
import { matchers } from 'playwright-expect';
import {LoginPage } from '../page-objects/login-page'

test('Login to SF', async ({page}) =>{
    const lp = new LoginPage(page)
    const locator = page.locator("[title='Alans Demo App']")
    await lp.goto()
    await lp.login()
    await expect(locator).toBeVisible();
})



