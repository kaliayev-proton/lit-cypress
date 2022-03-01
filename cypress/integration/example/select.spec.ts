describe('Select box', () => {
	it('loads website with select box', () => {
		cy.visit('devexpress.github.io/testcafe/example/')
	})
	it('selects an option from select box', () => {
		cy.get('#preferred-interface').select('Both')
		cy.get('#preferred-interface').should('have.value', 'Both')

		cy.get('#preferred-interface').select('JavaScript API')
		cy.get('#preferred-interface').should('have.value', 'JavaScript API')
	})
})
