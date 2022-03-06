describe('Transactions', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.fixture('user_login').then((user) => {
			const username = user.id
			const password = user.pwd

			cy.loginCy(username, password)
		})
	})

	it('filters transactions', () => {
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_fromAmount').type('200')
		cy.get('#aa_toAmount').type('1000')
		cy.get('button[type="submit"]').click()
	})
	it('filters transactions', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody > tr').its('length').should('be.gt', 0)
	})
})
