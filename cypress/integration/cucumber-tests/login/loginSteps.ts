import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
// import { login_username, login_password } from '../../../../config'
import LoginPage from './loginPage'

Given('I open login page', () => {
	// cy.visitLoginPage()
	LoginPage.visitLoginPage()
})

When('I submit login', () => {
	// cy.login(login_username, login_password)
	LoginPage.fillUsername('username')
	LoginPage.fillPassword('password')
	LoginPage.submit()
})

When('I fill username with {string}', (username) => {
	LoginPage.fillUsername(username)
})
When('I fill password with {string}', (password) => {
	LoginPage.fillPassword(password)
})
When('I click on submit login', (password) => {
	LoginPage.submit()
})

Then('I should see homepage', () => {
	cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see error message', () => {
	LoginPage.showErrorMessage()
})
