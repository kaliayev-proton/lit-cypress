const pages = ['http://example.com/']

const sizes: Array<Cypress.ViewportPreset | number[]> = [
	'iphone-6',
	'ipad-2',
	[1200, 800],
]

describe('Visual Regression', () => {
	it('tests visual regression mode', () => {
		cy.visit('http://example.com/')

		cy.matchImageSnapshot()
	})
})
describe('iterates throw different screens', () => {
	sizes.forEach((size) => {
		pages.forEach((page) => {
			it(`matches ${page} in resolution ${size}`, () => {
				let currentTime = new Date(Date.UTC(2022, 1, 1)).getDate()
				cy.clock(currentTime)
				cy.setResolution(size)
				cy.visit(page)
				cy.matchImageSnapshot()
			})
		})
	})
})

describe('Single Element Snapshot', () => {
	it('matches a single element on the page', () => {
		cy.visit('http://example.com/')
		cy.get('h1').matchImageSnapshot()
		// cy.get('h1').matchImageSnapshot({
		// failureThreshold: 10.0
		// }) // override default values passing an object as argument
	})
})
