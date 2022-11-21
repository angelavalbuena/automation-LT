class CheckoutOverviewPage {
    getProductCheckoutName() {
        return cy.get('.inventory_item_name')
    }

    getOverviewPageTitle(){
        return cy.get('.title')
    }
    
    clickFinishButton(){
        const button = cy.get('#finish')
        button.click()
    }
}

export default CheckoutOverviewPage
