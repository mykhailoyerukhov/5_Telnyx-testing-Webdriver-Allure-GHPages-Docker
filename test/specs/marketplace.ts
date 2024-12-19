import MarketplaceClass from '@pageobjects/marketplace_class';

describe('Telnyx website testing',  () => {
    beforeEach(() => {
        MarketplaceClass.open()
            browser.pause(5000)
        })

    it('checks url of chosen category', async () => {
        await MarketplaceClass.selectCategoryByIndex(4)
        await browser.pause(3000)
        await MarketplaceClass.selectFeatureByIndex(2)
        await browser.pause(3000)

        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toBe('https://marketplace.telnyx.com/integrations/zapier')

    })
    it('', async () => {

    })
  
    it('', async () => {

    })
    
})
