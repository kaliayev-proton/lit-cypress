describe('Scroll on the page', () => {
	it('scrolls down and up on the page', () => {
		cy.visit('devexpress.github.io/testcafe/example/')
		cy.wait(5000)
		cy.get('#submit-button').scrollIntoView()
		cy.wait(5000)
		cy.get('header').scrollIntoView()
	})
})
