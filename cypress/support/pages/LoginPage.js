class LoginPage {
    getMainLogo() {
        return cy.get('.login_logo')
    }
    fillUsername(value){
        const field = cy.get('#user-name')
        field.clear()
        field.type(value)
    }
    fillPassword(value){
        const field = cy.get('#password')
        field.clear()
        field.type(value, {log:false})
    }
    submit(){
        const button = cy.get('#login-button')
        button.click()
    }
    getBotImage(){
        return cy.get('.bot_column')
    }
}

export default LoginPage
