describe('Password', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com', { timeout: 10000 })
	})
	it('clicks on the sign in button', () => {
		cy.get('#signin_button').click()
	})
	it('clicks on the forgotten password', () => {
		cy.get('.offset3 > a').click()
	})
	it('fills email form', () => {
		cy.get('#user_email').type('test.email@email.com')
	})
	it('submits the form', () => {
		cy.contains('Send Password').click()
	})
})
