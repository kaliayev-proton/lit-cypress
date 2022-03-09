// In the future, pass this to a config file
const URL: string = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'

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
	static showErrorMessage() {
		cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
	}
}
