import { url, login_username, login_password } from '../../../config'
import NavBar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('login failed', () => {
	before(() => {
		cy.visit(url)
		NavBar.clickSignIn()
	})

	it('tries to login with invalid credentials', () => {
		LoginPage.login('invalid name', 'invalid pass')
	})
	it('displays error message', () => {
		LoginPage.displayErrorMessage()
	})
})
describe('login success', () => {
	before(() => {
		cy.visit(url)
		NavBar.clickSignIn()
	})

	it('logins with valid credentials into application', () => {
		LoginPage.login(login_username, login_password)
	})
	it('logouts from application', () => {
		NavBar.logout()
		NavBar.displaySignInButton()
	})
})
