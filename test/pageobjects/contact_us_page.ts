import { expect, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';



class ContactUsClass {
    
    get headerProductsMenuItem () {
        return $('[id^="radix"][id$="Rl6jm:"]')
    }

    get headerSolutionsMenuItem () {
        return $('[id^="radix"][id$="R156jm:"]')
    }
    get headerPricingMenuItem() {
        return $('[href="/pricing"]')
    }
    get headerWhyTelnyxMenuItem() {
        return $('[id^="radix"][id$="R256jm:"]')
    }
    get headerResourcesMenuItem() {
        return $('[id*="R2l6jm:"]')
    }
    get headerDevelopersMenuItem() {
        return $('[id^="radix"][id$="R356jm:"]')
    }
    get headerShop() {
        return $('//a[contains(@class, "c-hzhYFJ") and @href="https://shop.telnyx.com"]')
    }
    get headerContactUs() {
        return $('//a[contains(@class, "c-hzhYFJ") and @href="/contact-us"]')
    }
    get headerLogin() {
        return $('//a[contains(@class, "c-hzhYFJ") and @href="https://portal.telnyx.com"]')
    }
    get headerSignUp() {
        return $('//div[@class="c-dyVVFl"]/a/span[contains(text(), "Sign up") and contains(@class, "c-hakyQ")]')
    }

    public async open(): Promise<void> {
        const url = 'https://telnyx.com/contact-us'
        console.log('Navigating to telnyx.com')
        await browser.url(url);
    }
    async headerProductsMenuItemClickOn () {
        await this.headerProductsMenuItem.click()
    }
    async headerSolutionsMenuItemClickOn() {
        await this.headerSolutionsMenuItem.click()
    }
    async headerPricingMenuItemClickOn() {
        await this.headerPricingMenuItem.click()
    }
    async headerWhyTelnyxMenuItemClickOn() {
        await this.headerWhyTelnyxMenuItem.click()
    }
    async headerResourcesMenuItemClickOn() {
        await this.headerProductsMenuItem.click()
    }
    async headerDevelopersMenuItemClickOn() {
        await this.headerDevelopersMenuItem.click()
    }

    async headerShopClickOn() {
        await this.headerShop.click()
    }

    async headerContactUsClickOn() {
        await this.headerContactUs.click()
    }
    async headerLoginClickOn() {
        await this.headerLogin.click()
    }
    async headerSignUpClickOn() {
        const signUpButton = await $('//div[@class="c-dyVVFl"]/a/span[contains(text(), "Sign up") and contains(@class, "c-hakyQ")]');
        await browser.execute((el) => el.click(), signUpButton);
    }

    
    // {return $('//select[@id="Reason_for_Contact__c"]')}
    get ReasonsField() { return $('//select[@id="Reason_for_Contact__c"]')}
    get reasonSalesInquiry() {return $('//select[@id="Reason_for_Contact__c"]/option[contains(text(), "Sales")]')}
    get reasonSales() { return $('//select[@id="Reason_for_Contact__c"]/option[contains(text(), "Support")]')}
    async selectSalesInquiry(option:number) {
        await this.ReasonsField.selectByIndex(option)
    }
    async selectSupport(option:number) {
        await this.ReasonsField.selectByIndex(option)
    }

    
    get firstNameField() { return $('//input[@id="FirstName"]')}
    get lastNameField() { return $('//input[@id="LastName"]')}
    get businessEmailField() { return $('//input[@id="Email"]')}
    get countrySelector() {return $('//select[@id="Phone_Number_Extension__c"]')}
    get phoneNumberField() { return $('//input[@id="Phone_Number_Base__c"]')}
    get companyWebsiteField() { return $('//input[@id="Website"]')}
    get checkBoxField() { return $('//input[@id="mktoCheckbox_15545_0"]')}
    get submitButtonField() {return $('//button[contains(text(), "Submit")]')}
    
    async inputFirstName(firstname: string) {
        await this.firstNameField.setValue(firstname)
    }
    async inputLastName(lastname: string) {
        await this.lastNameField.setValue(lastname)
    }
    async inputEmail(email:string) {
        await this.businessEmailField.setValue(email)
    }
    async inputPhoneNumber(number:string) {
        await this.phoneNumberField.setValue(number)
    }
    async inputCompanyWebsite(website: string) {
        await this.companyWebsiteField.setValue(website)
    }
    async clickOnCheckbox() {
        await this.checkBoxField.click()
    }
    async clickOnSubmit() {
        await this.submitButtonField.click()
    }

    get warningFieldIsRequired () { return $('//div[@id="ValidMsgReason_for_Contact__c"]')}
    get warningEmail() {return $('//div[@id="ValidMsgEmail"]')}

}

export default new ContactUsClass()