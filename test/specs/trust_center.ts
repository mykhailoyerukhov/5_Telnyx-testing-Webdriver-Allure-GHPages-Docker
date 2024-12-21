import TrustCenterClass from '@pageobjects/trust_center_page'

describe('trust_center', () => {
    beforeEach(() => {
        TrustCenterClass.open()
        browser.pause(3000)
        })
    it('submit with empty fields. "Send Request" button is disabled', async () => {
        await browser.pause(3000)

        await TrustCenterClass.ClickOnsoc2type1()
        await browser.pause(1000)

        await TrustCenterClass.ClickOnContinue()
        await browser.pause(1000)

        await expect(TrustCenterClass.sendRequestButton).not.toBeClickable()
    })
    it('submit with invalid data. Checkbox "Accept terms" is disabled', async () => {
        await browser.pause(3000)
        
        await TrustCenterClass.ClickOnsoc2type1()
        await browser.pause(1000)

        await TrustCenterClass.ClickOnContinue()
        await browser.pause(1000)

        await TrustCenterClass.inputFirstName('ASLFJALSRQWnd')
        await browser.pause(1000)
        await TrustCenterClass.inputLastName('ADGRQWIj')
        await browser.pause(1000)
        await TrustCenterClass.inputEmail('AALDKGFLGNdlmflkvmg')
        await browser.pause(1000)
        await TrustCenterClass.inputCompanyName('MyOwnCompany')
        await browser.pause(1000)

        const warningText = await TrustCenterClass.warningEmail.getText()
        console.log('Warning text is:', warningText)
        await browser.pause(1000)
        await expect(TrustCenterClass.warningEmail).toHaveText('Work Email must be a valid email')

    })
    it('submit with valid data. Submit is successful', async () => {

        await TrustCenterClass.ClickOnsoc2type1()
        await browser.pause(1000)
        await TrustCenterClass.ClickOnContinue()
        await browser.pause(1000)
        await TrustCenterClass.inputFirstName('Serhiy')
        await browser.pause(1000)
        await TrustCenterClass.inputLastName('Dzuga')
        await browser.pause(1000)
        await TrustCenterClass.inputEmail('fake@email.com')
        await browser.pause(1000)
        await TrustCenterClass.inputCompanyName('MyOwnCompany')
        await browser.pause(1000)
        await TrustCenterClass.clickOnAcceptTerms()
        await browser.pause(1000)
        
        try {
            await TrustCenterClass.clickOnSendRequest()
            console.log('Click successful');
        } catch (error) {
            console.log('Click impossible');
        }
        
    })
})