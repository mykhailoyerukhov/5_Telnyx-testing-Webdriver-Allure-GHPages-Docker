import { expect, browser } from '@wdio/globals'

class DevelopersClass {

    async open() {
        const url = 'https://developers.telnyx.com/'
        await browser.url(url)
    }

    get searchField() {return $('//button[@aria-label="Search"]')}

    async clickOnSearchField() {
        await this.searchField.click()
    }
    get searchBar() {return $('//input[@class="DocSearch-Input"]')}
    async inputInSearchBar(query:string) {
        await this.searchBar.setValue(query)
        // await browser.keys('Enter')
        
    }
    get noResultsField() {return $('//p[@class="DocSearch-Title"]')}


}
export default new DevelopersClass()