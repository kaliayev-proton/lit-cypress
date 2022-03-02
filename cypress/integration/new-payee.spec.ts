describe('New payee', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.fixture('user_login').then((user) => {
			const username = user.id
			const password = user.pwd

			cy.loginCy(username, password)
		})
	})

	it('adds new payee to the list', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Add New Payee').click()

		cy.get('#np_new_payee_name').type('Name')
		cy.get('#np_new_payee_address').type('Address')
		cy.get('#np_new_payee_account').type('134232')
		cy.get('#np_new_payee_details').type('Details')

		cy.get('#add_new_payee').click()
	})
	it('shows success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The new payee Name was successfully created.')
	})
})
