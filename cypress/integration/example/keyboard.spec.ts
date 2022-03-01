describe('Keyboard press simulation', () => {
	it('submits searchbox with pressing enter', () => {
		cy.visit('zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#searchTerm').type('just some text {enter}') // we are specifying to cypress a keyboard event of type enter after type "just some text"
	})
})
