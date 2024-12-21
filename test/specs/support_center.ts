import SupportCenterClass from '@pageobjects/support_center_class';

describe('Telnyx website testing',  () => {
    beforeEach(() => {
        SupportCenterClass.open()
            browser.pause(5000)
        })

    it('check header of found article by some keyword', async () => {
        SupportCenterClass.inputInSearchBar('AI')
        await browser.pause(1000)
        await expect(SupportCenterClass.searchTitleField).toHaveText('Search results for:')
        await SupportCenterClass.selectElementByIntex(0)
        await browser.pause(1000)

        await expect(SupportCenterClass.headerInArticle).toHaveText('Mission Control Portal - AI Chat Support')
    })
    it('executed search with empty query returns baseurl', async () => {
        SupportCenterClass.inputInSearchBar('')

        await browser.pause(1000)

        const currentUrl = await browser.getUrl()
        await expect(currentUrl === 'https://support.telnyx.com/en/' ||
            currentUrl ==='https://support.telnyx.com/en/?q='
        ).toBeTruthy()
        await browser.pause(1000)
    })
  
    it('even random invalid data brings some results', async () => {
        await browser.pause(1000)
        
        await SupportCenterClass.inputInSearchBar('asdgwregwrkvmqwe;rlk31;54#Q)($$')
        await browser.pause(1000)
        const numberOfCards = await SupportCenterClass.searchResultsCards.length
        await expect(numberOfCards).toEqual(10)
    })
    
})
