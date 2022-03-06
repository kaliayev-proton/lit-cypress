describe('Currency exchange', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.fixture('user_login').then((user) => {
			const username = user.id
			const password = user.pwd

			cy.loginCy(username, password)
		})
	})

	it('fills conversion form', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Purchase Foreign Currency').click()
		cy.get('#pc_currency').select('GBP')
		cy.get('#pc_amount').type('2000')
		cy.get('#pc_inDollars_true').click()
		cy.get('#pc_calculate_costs').click()
	})
	it('displays conversion amount', () => {
		cy.get('#pc_conversion_amount').should(
			'contain',
			'1180.50 pound (GBP) = 2000.00 U.S. dollar (USD)'
		)
	})
})
