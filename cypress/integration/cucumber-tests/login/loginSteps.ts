import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { login_username, login_password } from '../../../../config'
import LoginPage from './loginPage'

Given('I open login page', () => {
	// cy.visitLoginPage()
	LoginPage.visitLoginPage()
})

When('I submit login', () => {
	cy.login(login_username, login_password)
})

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible')
})
