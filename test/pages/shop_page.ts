import { expect, browser } from '@wdio/globals'
import { ChainablePromiseElement } from 'webdriverio';


class ShopClass {
    async open() {
        const url = 'https://shop.telnyx.com/'
        await browser.url(url)
    }
    get productCards() { return $$('//li[contains(@class, "grid__item scroll-trigger animate--slide-in")]')}
    get checkOutButton() {return $('//button[@id="CartDrawer-Checkout"]')}
    async clickOnCheckOutButton() {
        await this.checkOutButton.click()
    }
    
    get shopMenuItem() { return $('//a[@id="HeaderMenu-shop"]')}
    async clickOnShopMenuItem() {
        await this.shopMenuItem.click()
    }

    get cartIcon() {return $('//a[@id="cart-icon-bubble"]')}
    async clickOnCartIcon() {
        await this.cartIcon.click()
    }
    get emptyCartMessage() {return $('//h2[@class="cart__empty-text"]')}
    get subtotalCart() { return $('//h2[@class="totals__subtotal"]')}

    // Express checkout
    get emailField() {return $('//input[@id="email"]')}
    async inputEmail(email:string) {
        await this.emailField.setValue(email)
    }
    get firstNameField() {return $('//input[@id="TextField0"]')}
    async inputFirstName(name:string) {
        await this.firstNameField.setValue(name)
    }
    get lastNameField() {return $('//input[@id="TextField1"]')}
    async inputLastName(lastname:string) {
        await this.lastNameField.setValue(lastname)
    }
    get address() {return $('//input[@id="TextField2"]')}
    async inputAddress(address:string) {
        await this.address.setValue(address)
    }
    get city() {return $('//input[@id="TextField4"]')}
    async inputCity(city:string) {
        await this.city.setValue(city)
    }
    get postalcode() {return $('//input[@id="TextField5"]')}
    async inputPostalCode(postalcode:string) {
        await this.postalcode.setValue(postalcode)
    }
    get phone() {return $('//input[@id="TextField6"]')}
    async inputphone(phone:string) {
        await this.phone.setValue(phone)
    }
    get cardNumber() {return $('//div/input[@id="number" and contains(@name,"number")]')}
    async inputCardNumber(cardnumber: number) {
        await this.cardNumber.setValue(cardnumber)
    }
    

    get expirationDate() {return $('//input[@id="expiry"]')}
    async inputExpirationDate(date:string) {
        await browser.execute((el) => el.setValue(date), this.expirationDate);
    }
    get securityCode() {return $('//input[@id="verification_value"]')}
    async inputSecurityCode(security: number) {
        await browser.execute((el) => el.setValue(security), this.securityCode);
    }
    get nameOnCard() {return $('//input[@id="name"]')}
    async inputNameOnCard(cardname: string) {
        await browser.execute((el) => el.setValue(cardname), this.nameOnCard);
    }
    get mobilePhone() {return $('//input[@id="TextField7"]')}
    async inputMobilePhone(mobile:string) {
        await browser.execute((el) => el.setValue(mobile), this.mobilePhone);
    }
    get payNowButton() { return $('//button[@id="checkout-pay-button"]')}
    async clickOnPayButton() {
        await this.payNowButton.click()
    }

    get warningEnterEmail() {return $('//p[@id="error-for-email"]')}
    get warningEnterCardNumber() {return $('//p[@id="error-for-number"]')}
    get warningPostalCode() {return $('//p[@id="error-for-TextField5"]')}









    


}
export default new ShopClass()