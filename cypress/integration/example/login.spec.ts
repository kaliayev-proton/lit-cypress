describe('Working with inputs', () => {
	it('override current time', () => {
		const date = new Date(2020, 3, 10).getTime()
		cy.clock(date) // with clock we can modify cypress time
		cy.log(date.toString())
	})
	it('Loads correct URL', () => {
		cy.visit('zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.url().should('include', 'login.html')
		cy.clearCookies({ log: true })
		cy.clearLocalStorage('item', { log: true })
		cy.title().should('include', 'Zero - Log in')
	})
	it('fills username field', () => {
		cy.get('#user_login').as('username') // Use an Alias!! very recommendable for future changes and better read
		cy.get('@username').clear()
		cy.get('@username').type('Sam', { delay: 50 })
	})
	it('fills password field', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		cy.get('@password').type('pass', { delay: 50 })
	})
	it('marks checkbox', () => {
		cy.get('input[type="checkbox"]').click()
		cy.wait(5000)
	})
	it('submits the form', () => {
		cy.contains('Sign in').click()
	})
	it('displays error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.') // chaining assertions
	})
	it('removes input values', () => {
		cy.get('#user_password').should('have.value', '')
		cy.get('#user_login').should('have.value', '')
	})
})
