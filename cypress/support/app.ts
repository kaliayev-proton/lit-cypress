declare namespace Cypress {
	interface Chainable {
		// JSDoc example. this description will appear in the implementation of the function when hover it in vscode
		/**
		 * Navigate to the home page of our application
		 */
		visitHomePage(): Chainable<Element>

		/**
		 * Navigates to the login page of our applicarion
		 */
		visitLoginPage(): Chainable<Element>

		/**
		 * Navigates to the feedback page of our application
		 */
		visitFeedbackPage(): Chainable<Element>

		/**
		 *
		 * @param seconds - how many seconds should the execution wait
		 */
		waitForSeconds(seconds: number): Chainable<Element>
	}
}

Cypress.Commands.add('visitHomePage', () => {
	cy.visit('zero.webappsecurity.com')
})

Cypress.Commands.add('visitLoginPage', () => {
	cy.visit('zero.webappsecurity.com/login.html')
})
Cypress.Commands.add('visitFeedbackPage', () => {
	cy.visit('zero.webappsecurity.com/feedback.html')
})

Cypress.Commands.add('waitForSeconds', (seconds: number) => {
	cy.wait(seconds * 1000)
})
