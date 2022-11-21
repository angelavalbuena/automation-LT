class ProductPage {
    getProductNames() {
        return cy.get('.inventory_item_name')
    }

    getProductPageTitle(){
        return cy.get('.title')
    }

    addProductToCart(product) {
        const button = cy.get (`#add-to-cart-${product}`)
        button.click()
    }

    navigateToCart(){
        const button = cy.get('#shopping_cart_container')
        button.click()
    }

    selectBurgerMenuButton(){
        const button = cy.get('#react-burger-menu-btn')
        button.click()
    }
}

export default ProductPage
