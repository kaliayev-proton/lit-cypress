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
		cy.get('#pc_amount')
	})
	it('displays conversion amount', () => {})
})
