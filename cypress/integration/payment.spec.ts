describe('Payment', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.fixture('user_login').then((user) => {
			const username = user.id
			const password = user.pwd

			cy.loginCy(username, password)
		})
	})

	it('sends new payment (fake)', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Pay Saved Payee').click()

		cy.get('#sp_payee').select('wellsfargo')
		cy.get('#sp_account').select('Credit Card')
		cy.get('#sp_amount').type('2343')
		cy.get('#sp_date').type('2020-01-10 {enter}')
		cy.get('#sp_description').type('A nice description')

		cy.get('#pay_saved_payees').click()
	})
	it('shows success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted.')
	})
})
