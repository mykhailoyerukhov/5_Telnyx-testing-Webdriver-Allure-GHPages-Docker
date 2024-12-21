import MainPageClass from '@pageobjects/main_page';
import SignUpClass from '@pageobjects/sign_up_page'

describe('Telnyx website testing',  () => {
    beforeEach(() => {
        MainPageClass.open()
            browser.pause(5000)
        })

    it('subscribe on marketing newsletter. submit with no data', async () => {

        await MainPageClass.ClickOnsubSubmitButton()

        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toBe('https://telnyx.com/')
    })
    it('subscribe on marketing newsletter. invalid data', async () => {

        await MainPageClass.InputsubEnterBusinessEmail('asdlkfjqewiorcas')
        await MainPageClass.ClickOnsubSubmitButton()

        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toBe('https://telnyx.com/')
        console.log('The message "Please include an @ in your email address appear, but it cant be traced, because it dynamically creates by JavaScript / AJAX and not shown in DOM elements.')
    })
  
    it('subscribe on marketing newsletter with valid data', async () => {

        await MainPageClass.InputsubEnterBusinessEmail('some_valid@email.com')
        await MainPageClass.ClickOnsubSubmitButton()
        await browser.pause(2000)
        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toBe('https://telnyx.com/')
        console.log('you got redirected to sign up page with the filled email form')
        
    })
    
})
