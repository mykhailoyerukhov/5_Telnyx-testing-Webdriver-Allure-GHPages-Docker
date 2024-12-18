import { expect, browser } from '@wdio/globals'
import ShopPage from '@pageobjects/shop_page'

describe('shop', () => {
    beforeEach(() => {
                ShopPage.open()
                browser.pause(3000)
                ShopPage.clickOnShopMenuItem()
            })
    it('confirms that cart is empty', async () => {

        await ShopPage.clickOnCartIcon()
        await browser.pause(3000)
        if (expect(ShopPage.emptyCartMessage).toBeDisplayedInViewport()) { console.log('Cart is empty!')}
        if (!expect(ShopPage.emptyCartMessage).toBeDisplayedInViewport()) {console.log('Something went wrong!')}
    })
    it('products have added to the cart (confirm that cart is not empty)', async () => {

        const productCards = await $$('//li[contains(@class, "grid__item scroll-trigger animate--slide-in")]')
     
            for (const card of productCards) {
            const button = await card.$('button')
            const buttonId = await button.getAttribute('id')
            if (buttonId === 'quick-add-template--14828910739534__product-grid7525662294094-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7470649081934-submit' || buttonId === 'quick-add-template--14828910739534__product-grid6915266183246-submit') {
            continue
            }
            if (buttonId === 'quick-add-template--14828910739534__product-grid7466250174542-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249289806-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249683022-submit') {
                continue
            }
            if (buttonId === 'quick-add-template--14828910739534__product-grid7466246438990-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249486414-submit') {
                continue
            }
            await button.click()
            await browser.pause(500)
            const close_btn = $('//button[@class="drawer__close"]')
            await close_btn.click()
            await browser.pause(500)
            }

        console.log('Cards found:', await productCards.length)

        await ShopPage.clickOnCartIcon()
        await browser.pause(1000)

        if (!expect(ShopPage.emptyCartMessage).toBeDisplayedInViewport()) {console.log('Products have been added to cart')}

        const cartSubtotal = ShopPage.subtotalCart.getText()
        if(expect(cartSubtotal).toHaveText('Subtotal')) { console.log('Subtotal exists')}
    })
    it('payment page. error messages have shown when payment button is pressed with empty data fields', async () => {

        const productCards = await $$('//li[contains(@class, "grid__item scroll-trigger animate--slide-in")]')
     
        for (const card of productCards) {
        const button = await card.$('button')
        const buttonId = await button.getAttribute('id')
        if (buttonId === 'quick-add-template--14828910739534__product-grid7525662294094-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7470649081934-submit' || buttonId === 'quick-add-template--14828910739534__product-grid6915266183246-submit') {
        continue
        }
        if (buttonId === 'quick-add-template--14828910739534__product-grid7466250174542-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249289806-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249683022-submit') {
            continue
        }
        if (buttonId === 'quick-add-template--14828910739534__product-grid7466246438990-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249486414-submit') {
            continue
        }
        await button.click()
        await browser.pause(500)
        const close_btn = $('//button[@class="drawer__close"]')
        await close_btn.click()
        await browser.pause(500)
        }

        await ShopPage.clickOnCartIcon()
        await ShopPage.clickOnCheckOutButton()
        await browser.pause(2000)

        const payButtonIsEnabled =  await ShopPage.payNowButton.isClickable()
        if(payButtonIsEnabled) {
            console.log('Button TO PAY IS ENABLED')
        } else { console.log('button is disabled')}
        await ShopPage.clickOnPayButton()
        await browser.pause(2000)

        expect(ShopPage.warningEnterEmail).toBeDisplayed()
        expect(ShopPage.warningEnterCardNumber).toBeDisplayed()
        console.log('Warning messages have been shown after trying to confirm payment with empty fields')
    })
    it('payment page. error messages have shown when confirm payment after input invalid data', async () => {
        
        const productCards = await $$('//li[contains(@class, "grid__item scroll-trigger animate--slide-in")]')
     
        for (const card of productCards) {
        const button = await card.$('button')
        const buttonId = await button.getAttribute('id')
        if (buttonId === 'quick-add-template--14828910739534__product-grid7525662294094-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7470649081934-submit' || buttonId === 'quick-add-template--14828910739534__product-grid6915266183246-submit') {
        continue
        }
        if (buttonId === 'quick-add-template--14828910739534__product-grid7466250174542-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249289806-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249683022-submit') {
            continue
        }
        if (buttonId === 'quick-add-template--14828910739534__product-grid7466246438990-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249486414-submit') {
            continue
        }
        await button.click()
        await browser.pause(500)
        const close_btn = $('//button[@class="drawer__close"]')
        await close_btn.click()
        await browser.pause(500)
        }

        await ShopPage.clickOnCartIcon()
        await ShopPage.clickOnCheckOutButton()
        await browser.pause(2000)

        const payButtonIsEnabled =  await ShopPage.payNowButton.isClickable()
        if(payButtonIsEnabled) {
            console.log('Button TO PAY IS ENABLED')
        } else { console.log('button is disabled')}
        await ShopPage.clickOnPayButton()
        await browser.pause(2000)


        // Payment page
        await ShopPage.inputEmail('randomdatahasbeen32894input')
        await browser.pause(3000)
        await ShopPage.inputFirstName('234819')
        await browser.pause(1000)
        await ShopPage.inputLastName('asl3450,k;')
        await browser.pause(1000)
        await ShopPage.inputAddress('91584 ahsdflja 5467209')
        await browser.pause(1000)
        await ShopPage.inputCity('94506glewm')
        await browser.pause(1000)
        await ShopPage.inputPostalCode('yuioi')
        await browser.pause(1000)
        await ShopPage.inputphone('')
        await browser.pause(1000)

        expect(ShopPage.warningEnterEmail).toBeDisplayed()
        expect(ShopPage.warningEnterEmail).toHaveText('Enter a valid email')
        expect(ShopPage.warningEnterCardNumber).toBeDisplayed()
        expect(ShopPage.warningPostalCode).toBeDisplayed()
        expect(ShopPage.warningEnterEmail).toHaveText('Enter a valid postal code for Ukraine')
    })
    it('payment page. no error messages have shown when confirm payment after input VALID data', async () => {

        const productCards = await $$('//li[contains(@class, "grid__item scroll-trigger animate--slide-in")]')
     
        for (const card of productCards) {
        const button = await card.$('button')
        const buttonId = await button.getAttribute('id')
        if (buttonId === 'quick-add-template--14828910739534__product-grid7525662294094-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7470649081934-submit' || buttonId === 'quick-add-template--14828910739534__product-grid6915266183246-submit') {
        continue
        }
        if (buttonId === 'quick-add-template--14828910739534__product-grid7466250174542-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249289806-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249683022-submit') {
            continue
        }
        if (buttonId === 'quick-add-template--14828910739534__product-grid7466246438990-submit' || buttonId === 'quick-add-template--14828910739534__product-grid7466249486414-submit') {
            continue
        }
        await button.click()
        await browser.pause(500)
        const close_btn = $('//button[@class="drawer__close"]')
        await close_btn.click()
        await browser.pause(500)
        }

        await ShopPage.clickOnCartIcon()
        await ShopPage.clickOnCheckOutButton()
        await browser.pause(2000)

        const payButtonIsEnabled =  await ShopPage.payNowButton.isClickable()
        if(payButtonIsEnabled) {
            console.log('Button TO PAY IS ENABLED')
        } else { console.log('button is disabled')}
        await ShopPage.clickOnPayButton()
        await browser.pause(2000)

        await ShopPage.inputEmail('fakeemail@comp.com')
        await browser.pause(3000)
        await ShopPage.inputFirstName('Mikluho')
        await browser.pause(1000)
        await ShopPage.inputLastName('Maklai')
        await browser.pause(1000)
        await ShopPage.inputAddress('Ukraine, m. Dnipro, Soborna st., apt. 33')
        await browser.pause(1000)
        await ShopPage.inputCity('Dnipro')
        await browser.pause(1000)
        await ShopPage.inputPostalCode('44650')
        await browser.pause(1000)
        await ShopPage.inputphone('380 48 650 85 32')
        await browser.pause(1000)

        expect(ShopPage.warningEnterEmail).not.toBeDisplayed()
        expect(ShopPage.warningEnterEmail).toBeDisabled()
        expect(ShopPage.warningEnterCardNumber).not.toBeDisplayed()
        expect(ShopPage.warningPostalCode).not.toBeDisplayed()

    })
})