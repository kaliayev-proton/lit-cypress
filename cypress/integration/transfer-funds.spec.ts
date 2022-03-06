describe('Transfer Money', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.fixture('user_login').then((user) => {
			const username = user.id
			const password = user.pwd

			cy.loginCy(username, password)
		})
	})
	it('fills transfer funds form', () => {
		cy.get('#transfer_funds_tab').click()
		cy.get('#tf_fromAccountId').select('2')
		cy.get('#tf_toAccountId').select('4')
		cy.get('#tf_amount').type('1000')
		cy.get('#tf_description').type('some text')
		cy.get('#btn_submit').click()
	})
	it('verifies correct data', () => {
		cy.get('#tf_fromAccountId').should('have.value', 'Checking')
		cy.get('#tf_toAccountId').should('have.value', 'Loan')
		cy.get('#tf_amount').should('have.value', '1000')
	})
})
