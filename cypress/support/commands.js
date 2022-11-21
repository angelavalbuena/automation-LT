// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../support/pages/LoginPage';

Cypress.Commands.add('UILogin', () => {
    //Object Creation for Login Page and assigning it to a constant variable
    const loginPage=new LoginPage();
    //Defining variables to be retrieved from the cypress.json file
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    //Type credentials and submit
    loginPage.fillUsername(username)
    loginPage.fillPassword(password)
    loginPage.submit()
})
