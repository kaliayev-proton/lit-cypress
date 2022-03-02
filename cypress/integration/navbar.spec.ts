describe('Navbar test', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com', { timeout: 10000 })
	})

	it('displays online banking content', () => {
		cy.contains('Online Banking').click()
		cy.url().should('include', 'online-banking.html')
		cy.get('h1').should('be.visible')
	})
	it('displays feedback content', () => {
		cy.contains('Feedback').click()
		cy.url().should('include', 'feedback.html')
		// cy.get('h1').should('be.visible')
	})
	it('displays home page content', () => {
		cy.contains('Zero Bank').click()
		cy.url().should('include', 'index.html')
	})
})
