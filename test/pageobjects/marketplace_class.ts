import { expect, browser } from '@wdio/globals'

class MarketplaceClass {

    async open() {
        const url = 'https://marketplace.telnyx.com/'
        await browser.url(url)
    }

    get listOfFeatures() {return $$('//div[contains(@class, "listing-content")]')}
    async selectFeatureByIndex(index:number) {
        const allFeatures = await this.listOfFeatures
        const oneFeature = await this.listOfFeatures[index]
        await oneFeature.click()
    }
    get searchField() {return $('//input[@type="text"]')}
    async inputInSearch(query:string) {
        const inputField = await $('//input[@type="text"]')
        await inputField.setValue(query)
        await browser.keys('Enter')
    }

    get categories() {return $$('//*[contains(@data-testid, "sidebar-item")]')}
    async selectCategoryByIndex(index:number) {
        const allCategories = await this.categories
        const oneCategory = await this.categories[index]
        await oneCategory.click()
    }

}
export default new MarketplaceClass()