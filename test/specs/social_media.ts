import MainPageClass from '@pageobjects/main_page';
import SignUpClass from '@pageobjects/sign_up_page'

describe('Telnyx website testing',  () => {
    beforeEach(() => {
        MainPageClass.open()
            browser.pause(5000)
        })
    it.skip('valid LinkedIn url when click on icon',async () => {
        await MainPageClass.footerLinkedInClickOn()

        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[windowHandles.length - 1]);

        const currentUrl = await browser.getUrl();
        console.log(`URL of new tab: ${currentUrl}`);

        await expect(currentUrl).toBe('https://www.linkedin.com/company/telnyx/');
        await browser.closeWindow();
        await browser.switchToWindow(windowHandles[0]);

    })
    it('valid x.com url when click on icon', async () => {
        await MainPageClass.footerXcomClickOn()

        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[windowHandles.length - 1]);

        const currentUrl = await browser.getUrl();
        console.log(`URL of a new tab: ${currentUrl}`);

        await expect(currentUrl).toBe('https://x.com/telnyx');
        await browser.closeWindow();
        await browser.switchToWindow(windowHandles[0]);
    })
    it('valid Facebook url when click on icon', async () => {
        await MainPageClass.footerFacebookClickOn()
        await browser.pause(3000)

        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[windowHandles.length - 1]);
        await browser.pause(3000)

        const currentUrl = await browser.getUrl();
        console.log(`URL of a new tab: ${currentUrl}`);
        await browser.pause(3000)

        await expect(currentUrl).toBe('https://www.facebook.com/Telnyx/');
        await browser.pause(3000)
        await browser.closeWindow();
        await browser.pause(3000)
        await browser.switchToWindow(windowHandles[0]);
        await browser.pause(3000)

    })

    
})
