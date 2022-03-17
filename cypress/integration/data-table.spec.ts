describe('Visual Regression - Data tables', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.fixture('user_login').then((user) => {
			const username = user.id
			const pwd = user.pwd

			cy.loginCy(username, pwd)
		})
	})

	it('loads account activity', () => {
		cy.get('#account_activity_tab').click()
	})

	it('Data table Snapshot', () => {
		cy.matchImageSnapshot()
	})
})
