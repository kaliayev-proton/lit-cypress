describe('Searchbox test', () => {
	before(() => {
		cy.visit('zero.webappsecurity.com', { timeout: 10000 })
	})

	it('types into searchbox and submit with pressing enter', () => {
		cy.get('#searchTerm').type('some text {enter}')
	})
	it('shows search results page', () => {
		cy.get('h2').contains('Search Results:')
	})
})
