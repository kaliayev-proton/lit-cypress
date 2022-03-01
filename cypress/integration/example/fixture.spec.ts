describe('Login with fixtures data', () => {
	it('should try to login', () => {
		cy.visit('zero.webappsecurity.com/login.html', { timeout: 10000 })

		cy.fixture('user').then((user) => {
			const username: string = user.username
			const password: string = user.password
			cy.get('#user_login').type(username)
			cy.get('#user_password').type(password)
			cy.contains('Sign in').click()
		})
	})
})
