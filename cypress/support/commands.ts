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

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
addMatchImageSnapshotCommand()

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * @param username - takes username or id
			 * @param password - takes user password
			 */
			login(username: string, password: string): Chainable<Element>
			/**
			 * Custom command to select DOM element by data-cy attribute.
			 * @example cy.dataCy('greeting')
			 */
			loginCy(username: string, password: string): Chainable<Element>
			isVisible(selector: string): Chainable<Element>
			isHidden(selector: string): Chainable<Element>
			setResolution(size: Cypress.ViewportPreset): Chainable<Element>
		}
	}
}

Cypress.Commands.add('isVisible', (selector: string) => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', (selector: string) => {
	cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setResolution', (size: Cypress.ViewportPreset) => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

Cypress.Commands.add('login', (username: string, password: string) => {
	cy.get('#login_form').should('be.visible')
	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.get('#user_remember_me').click()
	cy.contains('Sign in').click()
})

Cypress.Commands.add('loginCy', (username: string, password: string) => {
	cy.clearCookies()
	cy.clearLocalStorage()

	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.get('#user_remember_me').click()
	cy.contains('Sign in').click()
})
