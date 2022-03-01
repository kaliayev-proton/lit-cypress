describe('Custom commends', () => {
	it('logins to application using custom Cypress commands', () => {
		cy.visit('zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.loginCy('username', 'password')
	})
})
