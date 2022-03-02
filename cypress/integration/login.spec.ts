describe('Login / Logout Test', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
		cy.get('#signin_button').click()
	})

	it('tries to login with invalid data', () => {
		// cy.get('#login_form').should('be.visible')
		// cy.get('#user_login').type('invalid username')
		// cy.get('#user_password').type('invalid password')
		// cy.contains('Sign in').click()
		cy.loginCy('invalid username', 'invalid password')
	})
	it('displays error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong')
	})
	it('login to application', () => {
		cy.fixture('user_login').then((user) => {
			const username = user.id
			const pwd = user.pwd

			cy.loginCy(username, pwd)

			// cy.get('#user_login').type(username)
			// cy.get('#user_password').type(pwd)

			// cy.get('#user_remember_me').click()
			// cy.contains('Sign in').click()
		})

		cy.get('ul.nav-tabs').should('be.visible')
	})
	it('logout from application', () => {
		cy.contains('username').click()
		cy.get('#logout_link').click()
		cy.url().should('include', 'index.html')
	})
})
