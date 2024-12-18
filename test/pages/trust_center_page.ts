
class TrustCenterClass {

    async open() {
        const url = 'https://trust.telnyx.com/'
        await browser.url(url)
    }

    get soc2type1() { return $('//h3[@id="compliance-report-item-Telnyx-SOC-2-Type-I--Storage-and-AI-Products----2024"]')}
    get soc2type2() {return $('//h3[@id="compliance-report-item-Telnyx-SOC-2-Type-II--CPaaS----2024"]')}
    get soc3() { return $('//h3[@id="compliance-report-item-Telnyx-SOC-3---2024"]')}
    get pcidss() { return $('//h3[@id="compliance-report-item-Telnyx---PCI-DSS-v4-0---Service-Provider-2024"]')}
    get iso27001() { return $('//h3[@id="compliance-report-item-Telnyx---ISO-27001---2023"]')}
    get iso27701() { return $('//h3[@id="compliance-report-item-Telnyx---ISO-27701---2023"]')}

    get continueButtonSelector() { return $('//button/span[contains(text(), "Continue")]')}

    get firstNameField() { return $('//input[@id="trust-center-request-access-name"]')}
    get lastNameField() { return $('//input[@id="trust-center-request-access-lastname"]')}
    get emailField() { return $('//input[@id="trust-center-request-access-email"]')}
    get companyNameField() { return $('//input[@id="trust-center-request-access-company"]')}
    get sendRequestButton() { return $('//button[@type="submit"]')}
    get acceptTerms() {return $('//input[@id="request-access-accept-terms"]')}
    get warningEmail() {return $('//div[contains(@class, "drata-field-error text-danger")]')}

    async ClickOnsoc2type1() {
        await this.soc2type1.click()
    }
    async ClickOnsoc2type2() {
        await this.soc2type2.click()
    }
    async ClickOnContinue() {
        await this.continueButtonSelector.click()
    }

    async inputFirstName(name:string) {
        await this.firstNameField.setValue(name)
    }
    async inputLastName(surname:string) {
        await this.lastNameField.setValue(surname)
    }
    async inputEmail(email:string) {
        await this.emailField.setValue(email)
    }
    async inputCompanyName(company:string) {
        await this.companyNameField.setValue(company)
    }
    async clickOnSendRequest() {
        await this.sendRequestButton.click()
    }
    async clickOnAcceptTerms() {
        await this.acceptTerms.click()
    }

    
}
export default new TrustCenterClass()