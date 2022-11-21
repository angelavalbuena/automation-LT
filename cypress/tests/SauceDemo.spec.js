/// <reference types="Cypress" />

import ProductPage from '../support/pages/ProductPage'
import CartPage from '../support/pages/CartPage'
import CheckoutOverviewPage from '../support/pages/CheckoutOverviewPage'
import CheckoutInfoPage from '../support/pages/CheckoutInfoPage'
import ConfirmationPage from '../support/pages/ConfirmationPage'

describe('Sauce Demo Tests',()=> {
    //Object Creation for the Pages and assigning them to constant variables
    const productPage= new ProductPage()
    const cartPage = new CartPage()
    const overviewPage= new CheckoutOverviewPage()
    const checkoutInfoPage = new CheckoutInfoPage()
    const confirmationPage = new ConfirmationPage()

    beforeEach(function(){
        //Get data from fixture to be used in the test cases
        cy.fixture('data').then((data)=>{
            this.data=data ;
        })
        //Navigate to the base URL defined in cypress.json config file
        cy.visit('/')
        //Use Custom command to perform a UI login
        cy.UILogin()
    })

    it('Verify item name in the cart page', function (){
        const items = []
        const itemsforLocator = []
        productPage.getProductNames().each(($el) => items.push($el.text()))
        .then(()=>{
            items.forEach($el => itemsforLocator.push($el.replaceAll(' ', '-').toLowerCase()))
            const itemSelected = items[0]
            const locatorFirstItem = itemsforLocator[0]
            productPage.addProductToCart(locatorFirstItem)
            productPage.navigateToCart()
            cartPage.getProductCartName().invoke('text').as("cartProductName").then(()=>{
                cy.wrap(itemSelected).should('eq', this.cartProductName)
            })
        })
    })

    it('Verify item name in the checkout overview page', function (){
        const items = []
        const itemsforLocator = []
        productPage.getProductNames().each(($el) => items.push($el.text()))
        .then(()=>{
            items.forEach($el => itemsforLocator.push($el.replaceAll(' ', '-').toLowerCase()))
            const itemSelected = items[0]
            const locatorFirstItem = itemsforLocator[0]
            productPage.addProductToCart(locatorFirstItem)
            productPage.navigateToCart()
            cartPage.clickCheckoutButton()
            checkoutInfoPage.fillFirstName(this.data.information.firstName)
            checkoutInfoPage.fillLastName(this.data.information.lastName)
            checkoutInfoPage.fillZipCode(this.data.information.zipCode)
            checkoutInfoPage.clickContinueButton()
            overviewPage.getProductCheckoutName().invoke('text').as("productCheckoutName").then(()=>{
                cy.wrap(itemSelected).should('eq', this.productCheckoutName)
            })
        })
    })

    it('Verify that an order is finished successfully', function (){
        const items = []
        const itemsforLocator = []
        productPage.getProductNames().each(($el) => items.push($el.text()))
        .then(()=>{
            items.forEach($el => itemsforLocator.push($el.replaceAll(' ', '-').toLowerCase()))
            const itemSelected = items[0]
            const locatorFirstItem = itemsforLocator[0]
            productPage.addProductToCart(locatorFirstItem)
            productPage.navigateToCart()
            cartPage.clickCheckoutButton()
            checkoutInfoPage.fillFirstName(this.data.information.firstName)
            checkoutInfoPage.fillLastName(this.data.information.lastName)
            checkoutInfoPage.fillZipCode(this.data.information.zipCode)
            checkoutInfoPage.clickContinueButton()
            overviewPage.clickFinishButton()
            confirmationPage.getConfirmationPageTitle().invoke('text').as("checkoutCompleteTitle").then(()=>{
                cy.wrap(this.data.titles.confirmation).should('eq', this.checkoutCompleteTitle)
            })
            confirmationPage.getConfirmationMessage().invoke('text').as("checkoutConfirmationMessage").then(()=>{
                cy.wrap(this.data.messages.confirmation).should('eq', this.checkoutConfirmationMessage)
            })
        })
    })
})
