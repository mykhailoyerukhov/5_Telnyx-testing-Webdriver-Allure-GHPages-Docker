import MainPageClass from '@pageobjects/main_page';
import SignUpClass from '@pageobjects/sign_up_page'

describe('Telnyx website testing',  () => {
    beforeEach(() => {
        MainPageClass.open()
            browser.pause(5000)
        })
    it('valid LinkedIn url when click on icon',async () => {
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
    it('subscribe on marketing newsletter. submit with no data', async () => {

    })
    it('subscribe on marketing newsletter. invalid data', async () => {

    })
    it('subscribe on')
    it.skip('testing pageobjects', async () => {

        // const MainPageClass = new MainPageClassClass();
        await MainPageClass.open();
 
        // IS WORKING await expect(MainPageClass.headerProductsMenuItem).toBeDisplayedInViewport()

        // Check header selectors are working
        // await MainPageClass.headerProductsMenuItemClickOn()
        // await browser.pause(500)
        // await MainPageClass.headerSolutionsMenuItemClickOn()
        // await browser.pause(500)
        // await expect(MainPageClass.headerPricingMenuItem).toBeDisplayedInViewport()
        // await browser.pause(500)
        // await MainPageClass.headerWhyTelnyxMenuItemClickOn()
        // await browser.pause(500)
        // await MainPageClass.headerResourcesMenuItemClickOn()
        // await browser.pause(1500)
        // await MainPageClass.headerDevelopersMenuItemClickOn()

        // IS WORKING Check shop, login, contactus, signup
        // await MainPageClassClass.headerShopClickOn()

        // await MainPageClassClass.headerLoginClickOn()

        // await MainPageClass.headerContactUsClickOn()
        // await browser.pause(3000)
        
        // await MainPageClass.open();

        // await MainPageClass.headerSignUpClickOn()


        // footer: Column1: 1 - Our network; 2 - Global coverage; 3 - release notes; 4 - Careers; 5 - Website terms and conditions; 6 - Terms and conditions of service.
        // IS WORKING

        // await MainPageClass.footerOurNetworkClickOn()
        // await browser.pause(1000)

        // await MainPageClass.open();
        // await MainPageClass.footerGlobalCoverageClickOn()
        // await browser.pause(1000)

        // await MainPageClass.open();
        // await MainPageClass.footerReleaseNotesClickOn()
        // await browser.pause(1000)

        // await MainPageClass.open();
        // await MainPageClass.footerCareersClickOn()
        // await browser.pause(1000)

        // await MainPageClass.open();
        // await MainPageClass.footerWebsiteTermsClickOn()
        // await browser.pause(1000)

        // await MainPageClass.open();
        // await MainPageClass.footerGlobalCoverageClickOn()
        // await browser.pause(1000)

        // await MainPageClass.open();
        // await MainPageClass.footerTermsOfServiceClickOn()
        // await browser.pause(1000)

        // Column2: 1 - Data and Privacy; 2 - Report abuse; 3 - Privacy policy; 4 - Cookie policy; 5 - Law enforcement; 6 - Acceptable use; 7 - Trust center.
        // IS WORKING
        // await MainPageClass.open();
        // await MainPageClass.footerDataAndPrivacyClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerReportAbuseClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerPrivacyPolicyClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerCookiePolicyClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerLawEnforcementClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerAcceptableUseClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerTrustCenterClickOn()

        // Column3:  1 - Telnyx vs Twilio; 2 - Telnyx vs Bandwidth; 3 - Telnyx vs Kode Wireless; 4 - Telnyx vs Hologram; 5 - Telnyx vs Wasabi; 6 - Telnyx vs Amazon S3; 7 - Voice AI; 8 - AI Glossary.
        // IS WORKING

        // await MainPageClass.open();
        // await MainPageClass.footerTelnyxVsTwilioClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerTelnyxVsBandwidthClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerTelnyxVsKodeWirelessClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerTelnyxVsHologramClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerTelnyxVsWasabiClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerTelnyxVsAmazonS3ClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerVoiceAIClickOn()

        // await MainPageClass.open();
        // await MainPageClass.footerAIGlossaryClickOn()

        // Social media: 1 - LinkedIn; 2 - X.com; 3 - Facebook.
        // IS WORKING

        // await MainPageClass.open()
        // await MainPageClass.footerLinkedInClickOn()

        // await MainPageClass.footerXcomClickOn()

        // await MainPageClass.footerFacebookClickOn()

        // 2 - Voice AI request
        // IS WORKING
        // await MainPageClass.open();
        // await MainPageClass.InputVoiceAIRequestCompanyNameField()
        // await MainPageClass.InputVoiceRequestAIDomainField()
        // await MainPageClass.InputVoiceAIRequestMobilePhoneField()
        // await MainPageClass.InputVoiceAIRequestEmailField()
        // await MainPageClass.InputVoiceAIRequestCheckBoxField()
        // await MainPageClass.InputVoiceAIRequestSubmitButton()

        // 3 - AI demo
        // NOT WORKING
        // await MainPageClassClass.open();
        // await MainPageClassClass.demoAITextFieldInput()
        // await browser.pause(3000)

        // 4 - Interactive map. NOT WORKING
        // 5 IoT
        
        // 6 AnimationLine#2 IS WORKING

        // await MainPageClassClass.clickTopic(19);
        // await browser.pause(5000)

        // 7 API Platform IS WORKING

        // await MainPageClass.ClickOnAPIPlatformArrowBack()
        // await MainPageClass.ClickOnAPIPlatformArrowBack()
        // await MainPageClass.ClickOnAPIPlatformArrowBack()
        // await MainPageClass.ClickOnAPIPlatformArrowBack()
        // await MainPageClass.ClickOnAPIPlatformArrowBack()

        // await MainPageClass.ClickOnAPIPlatformArrowForward()
        // await MainPageClass.ClickOnAPIPlatformArrowForward()
        // await MainPageClass.ClickOnAPIPlatformArrowForward()
        // await MainPageClass.ClickOnAPIPlatformArrowForward()
        // await MainPageClass.ClickOnAPIPlatformArrowForward()

        // await MainPageClass.ClickOnAPIPlatformDevDocs()

        //  8 - Customers stories IS WORKING

        // await MainPageClass.ClickOncustomerStoriesPrevItem()
        // await MainPageClass.ClickOncustomerStoriesPrevItem()
        // await MainPageClass.ClickOncustomerStoriesNextItem()
        // await MainPageClass.ClickOncustomerStoriesNextItem()
        // await MainPageClass.ClickOncustomerStoriesNextItem()
        // await MainPageClass.ClickOncustomerStoriesReplicant()

        // await MainPageClass.ClickOncustomerStoriesAll()
        

        // await MainPageClass.open()

        // 9 Learn more IS WORKING

        // await MainPageClass.ClickOnlearnMoreNextItem()
        // await MainPageClass.ClickOnlearnMoreNextItem()
        // await MainPageClass.ClickOnlearnMoreNextItem()

        // await MainPageClass.ClickOnlearnMoreSeeAll()

        // 10 - Connect with us, subscription.
        // await MainPageClass.InputsubEnterBusinessEmail()

        await MainPageClass.ClickOnsubSubmitButton()
        
    })
    
})
