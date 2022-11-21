class CheckoutInfoPage {
    fillFirstName(value) {
        const field = cy.get('#first-name')
        field.clear()
        field.type(value)
    }

    fillLastName(value){
        const field = cy.get('#last-name')
        field.clear()
        field.type(value)
    }

    fillZipCode(value){
        const field = cy.get('#postal-code')
        field.clear()
        field.type(value)
    }

    clickContinueButton(){
        const button = cy.get('#continue')
        button.click()
    }
}

export default CheckoutInfoPage
