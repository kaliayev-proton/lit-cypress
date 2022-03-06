// In the future, pass this to a config file
const URL: string = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'

export default class LoginPage {
	static visitLoginPage() {
		cy.visit(URL)
	}
	static fillUsername(name: string) {
		cy.get(USERNAME_INPUT).type(name)
	}
	static fillPassword(password) {
		cy.get(PASSWORD_INPUT).type(password)
	}
	static submit() {
		cy.get(SUBMIT_BUTTON).click()
	}
}
