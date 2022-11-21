class CartPage {
    getProductCartName() {
        return cy.get('.inventory_item_name')
    }

    getCartPageTitle(){
        return cy.get('.title')
    }

    clickCheckoutButton(){
        const button = cy.get('#checkout')
        button.click()
    }
    
}

export default CartPage
