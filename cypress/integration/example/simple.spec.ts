describe('Browser Actions', () => {
	// describe('Pracice in example page', () => {
	// 	it('loads correct URL', () => {
	// 		cy.visit('example.com', { timeout: 10000 })
	// 	})
	// 	it('check correct URL', () => {
	// 		cy.url().should('include', 'example.com')
	// 	})
	// 	it('wait for 3 seconds', () => {
	// 		cy.wait(3000)
	// 	})
	// 	it('pause the execution', () => {
	// 		// cy.pause() // very useful if you want to debug the flow
	// 	})
	// 	it('check for correct element on the page', () => {
	// 		cy.get('h1').should('be.visible')
	// 	})
	// })

	it('loads correct URL', () => {
		cy.visit('books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
		cy.log('Website loaded!') // this is a log! for debuging or experiments. NOT use console.log
		cy.log('Before browser reloaded!')
		cy.reload()
		cy.log('After browser reloaded!')
	})
	it("click on 'Travel' category", () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})
	it('display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11) // we are checking a list of elements
	})

	describe('check poetry book', () => {
		it('move to poetry section', () => {
			cy.get('a').contains('Poetry').click()
		})
		it('Open Olio book', () => {
			cy.get('a').contains('Olio').click()
		})
		it('Check Olio price', () => {
			cy.get('.price_color').contains('£23.88')
		})
	})
})
