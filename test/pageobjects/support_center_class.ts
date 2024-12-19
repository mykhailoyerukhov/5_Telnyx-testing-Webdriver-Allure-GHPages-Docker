import { expect, browser } from '@wdio/globals'

class SupportCenterClass {

    async open() {
        const url = 'https://support.telnyx.com/en/'
        await browser.url(url)
    }

    get searchBarField() {return $('//input[@type="text"]')}
    async inputInSearchBar(query:string) {
        
        const inputField = await $('//input[@type="text"]')
        await this.searchBarField.setValue(query)
        await browser.keys('Enter')
    }
    get searchTitleField() {return $('//span[@class="text-body-secondary-color"]')}
    get searchResultsCards() {return $$('//*[contains(@class, "collection-link")]')}

    async selectElementByIntex(index: number) {
        const allCards = await this.searchResultsCards
        const oneCard = allCards[index]
        await oneCard.click()
    }

    get headerInArticle() {return $('//header[contains(@class, "mb-1")]')}
    


}
export default new SupportCenterClass()