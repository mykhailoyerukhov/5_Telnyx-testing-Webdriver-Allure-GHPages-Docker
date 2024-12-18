import { expect, browser } from '@wdio/globals'
import SignUpClass from '@pageobjects/sign_up_page'


describe('sign up ', () => {
    beforeEach(() => {
            SignUpClass.open()
            browser.pause(3000)
        })
    it('sign up with empty fields. Warnings messages should arise', async () => {

        await SignUpClass.clickToProceed()
        await browser.pause(1000)

        if(expect(SignUpClass.emailWarning).toBeDisplayed()) {console.log('Warning is whown')}
        expect(SignUpClass.firstNameWarning).toBeDisplayed()
        expect(SignUpClass.lastNameWarning).toBeDisplayed()
        expect(SignUpClass.passwordWarning1).toBeDisplayed()
    })
    it('sign up with invalid data. Warning that pass should be at least 12 characters is shown', async () => {
        await SignUpClass.inputEmail('asdgdfgdfe239405h')
        await browser.pause(1000)
        await SignUpClass.inputFName('gb3q4tiq')
        await browser.pause(1000)

        await SignUpClass.inputLName('qwet356u56h')
        await browser.pause(1000)

        await SignUpClass.inputPassword('q43t2394f')
        await browser.pause(1000)

        await SignUpClass.clickOnSubscription()
        await browser.pause(1000)

        await SignUpClass.clickToProceed()
        await browser.pause(1000)

        if(expect(SignUpClass.firstNameWarning).not.toBeDisplayed()) {console.log('Incorrect name - no warning appeared')}
        if(expect(SignUpClass.passworkWarningLength).toHaveText('Password must be at least 12 characters.')) {console.log('Password length should be 12 characters at least')}
    })
    it('sign up with valid data. Successful sign up', async () => {
        await SignUpClass.inputEmail('fakeemail@company.com')
        await browser.pause(1000)
        await SignUpClass.inputFName('George')
        await browser.pause(1000)

        await SignUpClass.inputLName('Carlin')
        await browser.pause(1000)

        await SignUpClass.inputPassword('QWErty!123asdFGH')
        await browser.pause(1000)

        await SignUpClass.clickOnTerms()
        await browser.pause(1000)

        await SignUpClass.clickOnSubscription()
        await browser.pause(1000)

        await SignUpClass.clickToProceed()
        await browser.pause(1000)

        if(expect(SignUpClass.passwordWarning1).not.toBeDisplayed()) {console.log('Password has met the requirements')}
    })
})