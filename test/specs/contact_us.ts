import contact_us_page from '@pageobjects/contact_us_page'
import ContactUsClass from '@pageobjects/contact_us_page'

describe('contact us', () => {
    beforeEach(() => {
            ContactUsClass.open()
            browser.pause(3000)
        })
    it('submit with empty fields', async () => {

        await ContactUsClass.clickOnSubmit()
        await browser.pause(1000)
        expect(ContactUsClass.warningFieldIsRequired.isDisplayed())
        console.log('Choosing the reason for query - This field is required.')

        let url = await browser.getUrl()
        expect(url).toEqual('https://telnyx.com/contact-us')
        console.log('We stayed on the same page')

    })
    it('submit with invalid data', async () => {

        await ContactUsClass.selectSalesInquiry(1)
        await ContactUsClass.inputFirstName('123414654')
        await ContactUsClass.inputLastName('7867867')
        await ContactUsClass.inputEmail('dfgadfg547as')
        await ContactUsClass.inputPhoneNumber('rtyuky8oit78kry')
        await ContactUsClass.inputCompanyWebsite('asdf24m5y7asd')
        await ContactUsClass.clickOnCheckbox()

        await ContactUsClass.clickOnSubmit()

        const warningText = await ContactUsClass.warningEmail.getText()
        expect(warningText).toContain('Must be valid email.')

        await browser.pause(5000)

    })
    it('submit with valid data', async () => {

        await ContactUsClass.selectSalesInquiry(2)

        await ContactUsClass.inputFirstName('Misha')
        await ContactUsClass.inputLastName('Ezhov')

        await ContactUsClass.inputEmail('fake-email@fake-company.com')
        await ContactUsClass.inputPhoneNumber('+380 66 777 88 99')
        await ContactUsClass.inputCompanyWebsite('fake-website.fake')
        await ContactUsClass.clickOnCheckbox()

        expect(ContactUsClass.warningEmail).not.toExist()

        await ContactUsClass.clickOnSubmit()
    })
})