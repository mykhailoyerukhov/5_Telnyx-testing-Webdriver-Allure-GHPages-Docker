import { expect, browser } from '@wdio/globals'
import LoginPage from '@pageobjects/login_page'
import login_page from '@pageobjects/login_page'

describe('login page', () => {
    beforeEach(() => {
        LoginPage.open()
        browser.pause(3000)
    })
    it('submit with empty fields', async () => {

        await expect(LoginPage.loginButtonField).toBeDisplayed()
        await expect(LoginPage.loginButtonField).toBeClickable()
        await LoginPage.clickOnLoginButton()
        await browser.pause(1000)
        await LoginPage.clickOnEmailField()
        await browser.pause(1000)
        
        await LoginPage.clickOnPasswordField()
        await browser.pause(1000)

        let warning = await LoginPage.warningLogin.getText()

        expect(warning).toContain("Required");
        

    })
    it('submit with invalid data', async () => {
        LoginPage.inputEmail('fake-email@fake-company.com')
        await browser.pause(1000)
        LoginPage.clickOnCheckbox()
        expect(LoginPage.warningLogin).not.toBeDisplayed()

        LoginPage.inputPassword('qweRTY123!')
        await browser.pause(1000)
        LoginPage.clickOnCheckbox()
        expect(LoginPage.warningPassword).not.toBeDisplayed()
        await browser.pause(1000)

        
    })
    it('submit with valid data', async () => {
        
        LoginPage.inputEmail('correct_email@correct.com')
        LoginPage.inputPassword('CoRREcT123Password!')
        await browser.pause(1000)

        expect(LoginPage.warningWrongEnter).not.toBeDisplayed()
    })
})
