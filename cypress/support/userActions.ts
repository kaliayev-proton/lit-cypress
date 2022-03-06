declare namespace Cypress {
	interface Chainable {
		/**
		 *
		 * @param name - takes name of the message author
		 * @param email - takes email (there is no validation on the backend)
		 * @param subject - takes subject of the message
		 * @param message - the message of the author
		 */
		submitFeedback(
			name: string,
			email: string,
			subject: string,
			message: string
		): Chainable<Element>
	}
}

Cypress.Commands.add(
	'submitFeedback',
	(name: string, email: string, subject: string, message: string) => {
		cy.get('#name').type(name)
		cy.get('#email').type(email)
		cy.get('#subject').type(subject)
		cy.get('#comment').type(message)
		cy.contains('Send Message').click()
	}
)
