import { expect, browser } from '@wdio/globals'
import { ChainablePromiseElement } from 'webdriverio';


// header: products, solutions, prising, Why Telnyx, Resources; Developers; Shop; Contact Us; Login; Sign Up.
// footer: Column1: 1 - Our network; 2 - Global coverage; 3 - release notes; 4 - Careers; 5 - Website terms and conditions; 6 - Terms and conditions of service.
//  Column2: 1 - Data and Privacy; 2 - Report abuse; 3 - Privacy policy; 4 - Cookie policy; 5 - Law enforcement; 6 - Acceptable use; 7 - Trust center.
// Column3:  1 - Telnyx vs Twilio; 2 - Telnyx vs Bandwidth; 3 - Telnyx vs Kode Wireless; 4 - Telnyx vs Hologram; 5 - Telnyx vs Wasabi; 6 - Telnyx vs Amazon S3; 7 - Voice AI; 8 - AI Glossary.
// Social media: 1 - LinkedIn; 2 - X.com; 3 - Facebook.
// Main content: 1 - animation line; 2 - Voice AI  request; 3 - AI demo; 4 - Interactive map; 5 - IoT; 6 - animation line #2; 7 - Explore Dev.docs; 8 - Customers stories; 9 - Learn more; 10 - Connect with us, subscription.
// header: products, solutions, prising, Why Telnyx, Resources; Developers; Shop; Contact Us; Login; Sign Up.

class MainPageClass {

    public async open(): Promise<void> {
        const url = 'https://telnyx.com/'
        console.log('Navigating to telnyx.com')
        await browser.url(url);
    }

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

    // footer: Column1: 1 - Our network; 2 - Global coverage; 3 - release notes; 4 - Careers; 5 - Website terms and conditions; 6 - Terms and conditions of service.
    get footerOurNetwork() {
        return $('//li/a[@href="/our-network"]')
    }

    get footerGlobalCoverage() {
        return $('//li/a[@href="/global-coverage"]')
    }
    get footerReleaseNotes() {
        return $('//li/a[@href="/release-notes"]')
    }

    get footerCareers() {
        return $('//li/a[@href="/careers"]')
    }
    get footerWebsiteTerms() {
        return $('//li/a[@href="/terms-and-conditions"]')
    }
    get footerTermsOfService() {
        return $('//li/a[@href="/terms-and-conditions-of-service"]')
    }

    async footerOurNetworkClickOn() {
        await this.footerOurNetwork.scrollIntoView()
        await this.footerOurNetwork.click()
    }

    async footerGlobalCoverageClickOn() {
        await this.footerGlobalCoverage.scrollIntoView()
        await this.footerGlobalCoverage.click()
    }
    async footerReleaseNotesClickOn() {
        await this.footerReleaseNotes.scrollIntoView()
        await this.footerReleaseNotes.click()
    }
    async footerCareersClickOn() {
        await this.footerCareers.scrollIntoView()
        await this.footerCareers.click()
    }
    async footerWebsiteTermsClickOn() {
        await this.footerWebsiteTerms.scrollIntoView()
        await this.footerWebsiteTerms.click()
    }
    async footerTermsOfServiceClickOn() {
        await this.footerTermsOfService.scrollIntoView()
        await this.footerTermsOfService.click()
    }

    //  Column2: 1 - Data and Privacy; 2 - Report abuse; 3 - Privacy policy; 4 - Cookie policy; 5 - Law enforcement; 6 - Acceptable use; 7 - Trust center.
    get footerDataAndPrivacy() {
        return $('//li/a[@href="/data-privacy"]')
    }
    get footerReportAbuse() {
        return $('//li/a[@href="/report-abuse"]')
    }
    get footerPrivacyPolicy() {
        return $('//li/a[@href="/privacy-policy"]')
    }
    get footerCookiePolicy() {
        return $('//li/a[@href="/cookie-policy"]')
    }
    get footerLawEnforcement() {
        return $('//li/a[@href="/law-enforcement-request"]')
    }
    get footerAcceptableUse() {
        return $('//li/a[@href="/acceptable-use-policy"]')
    }
    get footerTrustCenter() {
        return $('//li/a[@href="https://trust.telnyx.com"]')
    }

    // Methods
    async footerDataAndPrivacyClickOn() {
        await this.footerDataAndPrivacy.scrollIntoView()
        await this.footerDataAndPrivacy.click()
    }
    async footerReportAbuseClickOn() {
        await this.footerReportAbuse.scrollIntoView()
        await this.footerReportAbuse.click()
    }
    async footerPrivacyPolicyClickOn() {
        await this.footerPrivacyPolicy.scrollIntoView()
        await this.footerPrivacyPolicy.click()
    }
    async footerCookiePolicyClickOn() {
        await this.footerCookiePolicy.scrollIntoView()
        await this.footerCookiePolicy.click()
    }
    async footerLawEnforcementClickOn() {
        await this.footerLawEnforcement.scrollIntoView()
        await this.footerLawEnforcement.click()
    }
    async footerAcceptableUseClickOn() {
        await this.footerAcceptableUse.scrollIntoView()
        await this.footerAcceptableUse.click()
    }
    async footerTrustCenterClickOn() {
        await this.footerTrustCenter.scrollIntoView()
        await this.footerTrustCenter.click()
    }

    // Column3:  1 - Telnyx vs Twilio; 2 - Telnyx vs Bandwidth; 3 - Telnyx vs Kode Wireless; 4 - Telnyx vs Hologram; 5 - Telnyx vs Wasabi; 6 - Telnyx vs Amazon S3; 7 - Voice AI; 8 - AI Glossary.
    get footerTelnyxVsTwilio() {
        return $('//li/a[@href="/the-better-twilio-alternative"]')
    }
    get footerTelnyxVsBandwidth() {
        return $('//li/a[@href="/the-better-bandwidth-alternative"]')
    }
    get footerTelnyxVsKodeWireless() {
        return $('//li/a[@href="https://telnyx.com/the-better-kore-wireless-alternative"]')
    }
    get footerTelnyxVsHologram() {
        return $('//li/a[@href="https://telnyx.com/the-better-hologram-alternative"]')
    }
    get footerTelnyxVsWasabi() {
        return $('//li/a[@href="/the-better-wasabi-alternative"]')
    }
    get footerTelnyxVsAmazonS3() {
        return $('//li/a[@href="/the-better-amazon-s3-alternative"]')
    }
    get footerVoiceAI() {
        return $('//li/a[@href="/voice-ai"]')
    }
    get footerAIGlossary() {
        return $('//li/a[@href="https://telnyx.com/learn-ai"]')
    }

    async footerTelnyxVsTwilioClickOn() {
        await this.footerTelnyxVsTwilio.scrollIntoView()
        await this.footerTelnyxVsTwilio.click()
    }

    async footerTelnyxVsBandwidthClickOn() {
        await this.footerTelnyxVsBandwidth.scrollIntoView()
        await this.footerTelnyxVsBandwidth.click()
    }
    async footerTelnyxVsKodeWirelessClickOn() {
        await this.footerTelnyxVsKodeWireless.scrollIntoView()
        await this.footerTelnyxVsKodeWireless.click()
    }
    async footerTelnyxVsHologramClickOn() {
        await this.footerTelnyxVsHologram.scrollIntoView()
        await this.footerTelnyxVsHologram.click()
    }
    async footerTelnyxVsWasabiClickOn() {
        await this.footerTelnyxVsWasabi.scrollIntoView()
        await this.footerTelnyxVsWasabi.click()
    }
    async footerTelnyxVsAmazonS3ClickOn() {
        await this.footerTelnyxVsAmazonS3.scrollIntoView()
        await this.footerTelnyxVsAmazonS3.click()
    }
    async footerVoiceAIClickOn() {
        await this.footerVoiceAI.scrollIntoView()
        await this.footerVoiceAI.click()
    }
    async footerAIGlossaryClickOn() {
        await this.footerAIGlossary.scrollIntoView()
        await this.footerAIGlossary.click()
    }

    // Social media: 1 - LinkedIn; 2 - X.com; 3 - Facebook.
    get footerLinkedIn() {
        return $('//li/a[@href="https://www.linkedin.com/company/telnyx/"]')
    }
    get footerXcom() {
        return $('//li/a[@href="https://twitter.com/telnyx"]')
    }
    get footerFacebook() {
        return $('//li/a[@href="https://www.facebook.com/Telnyx/"]')
    }

    async footerLinkedInClickOn() {
        await this.footerLinkedIn.scrollIntoView()
        await this.footerLinkedIn.click()
    }
    async footerXcomClickOn() {
        await this.footerXcom.scrollIntoView()
        await this.footerXcom.click()
    }
    async footerFacebookClickOn() {
        await this.footerFacebook.scrollIntoView()
        await this.footerFacebook.click()
    }

    // Main content: 1 - animation line; 2 - Voice AI  request; 3 - AI demo; 4 - Interactive map; 5 - IoT; 6 - animation line #2; 7 - Explore Dev.docs; 8 - Customers stories; 9 - Learn more; 10 - Connect with us, subscription.

    // 2 - Voice AI request
    get voiceAIRequestCompanyNameField() {
        return $('input#business_name')
    }
    get voiceRequestAIDomainField() {
        return $('input#domain')
    }
    get voiceAIRequestMobilePhoneField() {
        return $('input#phone_number')
    }
    get voiceAIRequestEmailField() {
        return $('(//div[@class="c-bwSdyA"]/input[@id="email"])[1]')
    }
    get voiceAIRequestCheckBoxField() {
        return $('input#terms_and_conditions')
    }
    get voiceAIRequestSubmitButton() {
        return $('//button[@type="submit" and contains(@class, "c-fOQMKa")]')
    }

    async inputVoiceAIRequestCompanyNameField() {
        await this.voiceAIRequestCompanyNameField.scrollIntoView()
        await this.voiceAIRequestCompanyNameField.setValue('Private Company')
    }

    async inputVoiceRequestAIDomainField() {
        await this.voiceRequestAIDomainField.scrollIntoView()
        await this.voiceRequestAIDomainField.setValue('https://example-company.com')
    }
    async inputVoiceAIRequestMobilePhoneField() {
        await this.voiceAIRequestMobilePhoneField.scrollIntoView()
        await this.voiceAIRequestMobilePhoneField.setValue('https://example-company.com')
    }

    async inputVoiceAIRequestEmailField() {
        await this.voiceAIRequestEmailField.scrollIntoView()
        await this.voiceAIRequestEmailField.setValue('fake-email@fake-company.com')
    }
    async inputVoiceAIRequestCheckBoxField() {
        await this.voiceAIRequestCheckBoxField.scrollIntoView()
        await this.voiceAIRequestCheckBoxField.click()
    }
    async inputVoiceAIRequestSubmitButton() {
        await this.voiceAIRequestSubmitButton.scrollIntoView()
        await this.voiceAIRequestSubmitButton.click()
    }
    // 3 - AI demo
    get demoAITextField() {
        return $('//form[@class="c-jPcGoM"]')
    }
    get demoAIEnterButton() {
        return $('//button[contains(@class, "c-hQydOS-LOlHO-kind-primary")]')
    }

    get demoAIChooseModelButton() {
        return $('//button[@class="c-ewUecD PJLV"]')
    }
    get demoAIModelList() {
        return $('//button[@id^="radix"][@id*="r18:"]')
    }
    get demoAIModelListOption() {
        return $('//div[contains(text(), "deepseek-ai/deepseek-coder-6.7b-instruct")]')
    }
    get demoAIModelTextAreaField() {
        return $('textarea.c-bCAPMl')
    }
    get demoAIModelConfirmButton() {
        return $('//button[contains(@class, "c-ltigS")]')
    }
    
    async demoAITextFieldInput() {
        await browser.pause(2000)
        await this.demoAITextField.waitForClickable({ timeout: 5000 });

        await this.demoAITextField.addValue('How to be a good QA? ')
        await this.demoAIEnterButton.click()
    }

    // 4 - Interactive map

    // 6 - Animation line #1, #2
    get animationLineElements() {
        return $$('.c-ewzOSr')
    }

    async clickTopic(index: number): Promise<void> {
        const topics = await this.animationLineElements
        if (index >= 0 && index < await topics.length) {
            await topics[index].click(); // Кликаем по элементу с заданным индексом
        } else {
            throw new Error(`Элемент с индексом ${index} не существует. Всего доступно ${topics.length} элементов.`);
        }
    }

    // 7 - API PLATFORM

    get APIPlatformArrowBack() {
        return $('//button[@id="go-to-previous-item-R1atm-" and contains(@class, "c-iDUiZo disabled")]')
    }
    get APIPlatformArrowForward() {
        return $('//button[@id="go-to-next-item-R1atm-" and contains(@class, "c-jMInha")]')
    }
    get APIPlatformPurchasePhoneNumber() {return $('')}
    get APIPlatformMakePhoneCall() { return $('')}
    get APIPlatformSendMessage() {return $('')}
    get APIPlatformPurchaseESIM() {return $('')}
    get APIPlatformCreateStorageBucket() {return $('')}
    get APIPlatformChatWithLanguageModel() {return $('')}
    get APIPlatformDevDocs() {return $('//div[contains(@class, "c-buvHyO")]//descendant::a[@href="https://developers.telnyx.com" and contains(@class, "c-fOQMKa")]')}

    async ClickOnAPIPlatformArrowBack() {
        await this.APIPlatformArrowBack.click()
    }
    async ClickOnAPIPlatformArrowForward() {
        await this.APIPlatformArrowForward.click()
    }
    async ClickOnAPIPlatformDevDocs() {
        await this.APIPlatformDevDocs.click()
    }

    // 8 - Customers stories

    get customerStoriesCosmo() {
        return $('//a[@href="href="/customer-stories/cosmo"]')
    }
    get customerStoriesCanadaEnergy() {
        return $('//a[@href="/customer-stories/best-canada-energy"]')
    }
    get customerStoriesOneText() {
        return $('//a[@href="/customer-stories/onetext"]')
    }
    get customerStoriesUpMarket() {
        return $('//a[@href="/customer-stories/upmarket"]')
    }
    get customerStoriesEchoWin() {
        return $('//a[@href="/customer-stories/echowin"]')
    }
    get customerStoriesLighthouse() {
        return $('//a[@href="/customer-stories/lighthouse-works"]')
    }
    get customerStories42Chat() {
        return $('//a[@href="/customer-stories/42chat"]')
    }
    get customerStoriesReplicant() {
        return $('//a[@href="/customer-stories/replicant"]')
    }
    get customerStoriesWeave() {
        return $('//a[@href="/customer-stories/weave"]')
    }
    get customerStoriesLightspeed() {
        return $('//a[@href="/customer-stories/lightspeed"]')
    }
    get customerStoriesAll() {
        return $('//a[@href="/customer-stories"]')
    }


    get customerStoriesPrevItem() {
        return $('#go-to-previous-item-R5etm-')
    }
    get customerStoriesNextItem() {
        return $('#go-to-next-item-R5etm-')
    }

    async ClickOncustomerStoriesCosmo() {
        await this.customerStoriesCosmo.click()
    }
    async ClickOncustomerStoriesCanadaEnergy() {
        await this.customerStoriesCanadaEnergy.click()
    }
    async ClickOncustomerStoriesOneText() {
        await this.customerStoriesOneText.click()
    }
    async ClickOncustomerStoriesUpMarket() {
        await this.customerStoriesUpMarket.click()
    }
    async ClickOncustomerStoriesEchoWin() {
        await this.customerStoriesEchoWin.click()
    }
    async ClickOncustomerStoriesLighthouse() {
        await this.customerStoriesLighthouse.click()
    }
    async ClickOncustomerStories42Chat() {
        await this.customerStories42Chat.click()
    }
    async ClickOncustomerStoriesReplicant() {
        await this.customerStoriesReplicant.click()
    }
    async ClickOncustomerStoriesWeave() {
        await this.customerStoriesWeave.click()
    }
    async ClickOncustomerStoriesLightspeed() {
        await this.customerStoriesLightspeed.click()
    }
    async ClickOncustomerStoriesAll() {
        await this.customerStoriesAll.scrollIntoView()
        
        await browser.execute(() => {
            const element = document.querySelector('a[href="/customer-stories"]')
            if(element) {
                (element as HTMLElement).click()
            }
        })
    }
    async ClickOncustomerStoriesPrevItem() {
        await this.customerStoriesPrevItem.click()
    }
    async ClickOncustomerStoriesNextItem() {
        await this.customerStoriesNextItem.click()
    }
    // 9 - Learn more

    get learnMorePrevItem() {
        return $('#go-to-previous-item-Rditm-')
    }
    get learnMoreNextItem() {
        return $('#go-to-next-item-Rditm-')
    }
    get learnMoreArticle() {
        return $('[@href="/resources/secure-communications-for-healthcare"]')
    }

    get learnMoreSeeAll() {
        return $('//a[@href="/resources" and contains(@class, "c-fOQMKa")]')
    }

    async ClickOnlearnMorePrevItem() {
        await this.learnMorePrevItem.click()
    }
    async ClickOnlearnMoreNextItem() {
        await this.learnMoreNextItem.click()
    }
    async ClickOnlearnMoreArticle() {
        await this.learnMoreArticle.click()
    }
    async ClickOnlearnMoreSeeAll() {
        await this.learnMoreSeeAll.scrollIntoView()
        
        await browser.execute(() => {
            const element1 = document.querySelector('a[href="/resources"][class*="c-fOQMKa"]')
            if (element1) {
            (element1 as HTMLElement).click()
            }
        })

        await this.learnMoreSeeAll.click()
    }

    // 10 - Subscription

    get subEnterBusinessEmailField() {
        return $('//input[@id="email" and contains(@placeholder, "Enter")]')
    }
    get subSubmitButton() {
        return $('(//button[contains(@class, "c-fOQMKa") and contains(text(), "")]/span[@class="c-hakyQ"])[3]')
    }

    async InputsubEnterBusinessEmail(email: string) {
        await this.subEnterBusinessEmailField.scrollIntoView()
        await this.subEnterBusinessEmailField.setValue(email)
    }

    async ClickOnsubSubmitButton() {
        await this.subSubmitButton.scrollIntoView()
        await browser.execute(() => {
            const element = document.querySelector('button[class*="c-fOQMKa"] > span.c-hakyQ:nth-of-type(3)')
            if(element) {
            (element as HTMLElement).click()
            }
        })
    }

}
export default new MainPageClass()

