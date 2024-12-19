import DevelopersClass from '@pageobjects/developers_page';

describe('Telnyx website testing',  () => {
    beforeEach(() => {
        DevelopersClass.open()
            browser.pause(5000)
        })

    it('query - invalid data =>  shows NO RESULTS message', async () => {

        await DevelopersClass.clickOnSearchField()
        const randomQueryText = 'afdhdghedvf'
        await DevelopersClass.inputInSearchBar(randomQueryText)
        
        
        const noResults = await DevelopersClass.noResultsField
        await expect(noResults).toHaveText(`No results for \"${randomQueryText}\"`)

    })
    
})
