describe('Write / Read data to JSON / Text file', () => {
	it('writes data into JSON', () => {
		cy.writeFile('log.json', { name: 'Mike', age: 23 }) // with that we are creating a json file called log in the root of the project with this data
	})

	it('writes data to the text file', () => {
		cy.writeFile('log.text', 'Hello world')
	})
	it('reads and verify data from json file', () => {
		cy.readFile('log.json').its('age').should('eq', 23)
	})
	it('reads and verify data from txt file', () => {
		cy.readFile('log.text').should('eq', 'Hello world')
	})
	it('reads and verify browser document content', () => {
		cy.visit('http://www.example.com')
		cy.wait(2000)
		cy.document().its('contentType').should('eq', 'text/html')
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
	})
})
