import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import login from '../../../support/locators/login.loc.js'

Given(/^I'm on the login page$/, () => {
    cy.visit('/')
})


When(/^I set a registered my email and password$/, () => {
    cy.get(login.username).clear().type("admin@yourstore.com")
    cy.get(login.password).clear().type("admin")
    cy.get(login.btnLogin).click()
})


Then(/^I have a successful login$/, () => {
    cy.get(login.txtDashboard)
        .should('contain', "Dashboard")
})