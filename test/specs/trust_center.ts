import TrustCenterClass from '@pageobjects/trust_center_page'

describe('trust_center', () => {
    beforeEach(() => {
        TrustCenterClass.open()
        browser.pause(3000)
        })
    it.skip('submit with empty fields. "Send Request" button is disabled', async () => {

        await TrustCenterClass.ClickOnsoc2type1()

        await TrustCenterClass.ClickOnContinue()

        await expect(TrustCenterClass.sendRequestButton).not.toBeClickable()
    })
    it.skip('submit with invalid data. Checkbox "Accept terms" is disabled', async () => {
        
        await TrustCenterClass.ClickOnsoc2type1()

        await TrustCenterClass.ClickOnContinue()

        await TrustCenterClass.inputFirstName('ASLFJALSRQWnd')
        await TrustCenterClass.inputLastName('ADGRQWIj')
        await TrustCenterClass.inputEmail('AALDKGFLGNdlmflkvmg')
        await TrustCenterClass.inputCompanyName('MyOwnCompany')

        const warningText = await TrustCenterClass.warningEmail.getText()
        console.log('Warning text is:', warningText)
        await expect(TrustCenterClass.warningEmail).toHaveText('Work Email must be a valid email')

    })
    it.skip('submit with valid data. Submit is successful', async () => {

        await TrustCenterClass.ClickOnsoc2type1()
        await TrustCenterClass.ClickOnContinue()
        await TrustCenterClass.inputFirstName('Serhiy')
        await TrustCenterClass.inputLastName('Dzuga')
        await TrustCenterClass.inputEmail('fake@email.com')
        await TrustCenterClass.inputCompanyName('MyOwnCompany')
        await TrustCenterClass.clickOnAcceptTerms()
        
        try {
            await TrustCenterClass.clickOnSendRequest()
            console.log('Click successful');
        } catch (error) {
            console.log('Click impossible');
        }
        
    })
})