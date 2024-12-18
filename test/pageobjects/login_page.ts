import { expect, browser } from '@wdio/globals'

class LoginPage {

    public async open(): Promise<void> {
            const url = 'https://portal.telnyx.com/#/login/sign-in'
            console.log('Navigating to login page')
            await browser.url(url);
        }

    get emailField () {
        return $('//input[@name="email"]')
    }
    get passwordField() {
        return $('//input[@name="password"]')
    }

    async inputEmail(email: string) {
        await this.emailField.setValue(email)
    }
    async clickOnEmailField() {
        await this.emailField.click()
    }
    async inputPassword(password: string) {
        await this.passwordField.setValue(password)
    }
    async clickOnPasswordField() {
        await this.passwordField.click()
    }

    get rememberPasswordCheckbox() {
        return $('//input[@type="checkbox"]')
    }
    async clickOnCheckbox() {
        await this.rememberPasswordCheckbox.click()
    }

    get loginButtonField() {
        return $('//form[@aria-label="loginForm"]//button[@type="submit" and @role="button"]')
    }
    async clickOnLoginButton() {
        await this.loginButtonField.click()
    }

    get warningLogin() { return $('//p[contains(text(),"Required")]')}
    get warningPassword() {return $('//div[@class="sc-kAyceB lcleBl"]//p[contains(text(),"Required")]')}
    get warningWrongEnter() {return $('//div[@class="MuiAlert-message frontend-customer-portal-1xsto0d"]')}

}
export default new LoginPage()