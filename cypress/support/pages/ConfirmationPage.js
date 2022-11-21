class ConfirmationPage {
    getConfirmationMessage() {
        return cy.get('.complete-header')
    }

    getConfirmationPageTitle(){
        return cy.get('.title')
    }
}

export default ConfirmationPage
