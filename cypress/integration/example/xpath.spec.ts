describe('xPaths', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com/login.html', { timeout: 10000 })
	})

	it('displays login form', () => {
		cy.xpath('//form').should('have.length', 1) // we just have one form in the page
	})
})
