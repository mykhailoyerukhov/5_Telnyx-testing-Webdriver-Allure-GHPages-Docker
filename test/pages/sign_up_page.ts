import { expect, browser } from '@wdio/globals'

class SignUpClass {

    async open() {
        const url = 'https://telnyx.com/sign-up'
        await browser.url(url)
    }

    get companyEmailField() {return $('//input[@id="email"]')}
    get firstNameField() { return $('//input[@id="first_name"]')}
    get lastNameField() { return $('//input[@id="last_name"]')}
    get passwordField() { return $('//input[@id="password"]')}
    get termsAndConditionsCheckboxField() {return $('//input[@id="terms_and_conditions"]')}
    get recieveEmailsField() {return $('//input[@id="subscription_opt_in"]')}
    get signUpButtonField() {return $('//button[@type="submit" and contains(@class, "c-ddSKil")]')}
    get emailWarning() { return $('//div[@id="email_message"]')}
    get firstNameWarning() { return $('//div[@id="first_name_message"]')}
    get lastNameWarning() {return $('//div[@id="last_name_message"]')}
    get passwordWarning1() {return $('//div[@id="password_message"]')}
    get passworkWarningLength() {return $('//div[@id="passwordMinLength"]')}

    async inputEmail(email:string) {
        await this.companyEmailField.setValue(email)
    }
    async inputFName(name: string) {
        await this.firstNameField.setValue(name)
    }
    async inputLName(surname:string) {
        await this.lastNameField.setValue(surname)
    }
    async inputPassword(password:string) {
        await this.passwordField.setValue(password)
    }
    async clickOnTerms() {
        await this.termsAndConditionsCheckboxField.click()
    }
    async clickOnSubscription() {
        await this.recieveEmailsField.click()
    }
    async clickToProceed() {
        await this.signUpButtonField.click()
    }


}
export default new SignUpClass()