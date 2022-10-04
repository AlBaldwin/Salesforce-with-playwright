import { expect, Locator, Page } from '@playwright/test'
import { Credentials } from '../secrets'

export class LoginPage {
    readonly page: Page;
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginEmail = page.locator('#username');
        this.loginPassword = page.locator('#password');
        this.loginButton = page.locator('#Login');
    }

    async goto(){
        await this.page.goto(Credentials.URL)
    }

    async login(){
        await this.loginEmail.fill(Credentials.USERNAME);
        await this.loginPassword.fill(Credentials.PASSWORD);
        await this.loginButton.click();
    }
}