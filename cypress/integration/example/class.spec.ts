class BasePage {
	static loadHomePage() {
		cy.visit('devexpress.github.io/testcafe/example/')
	}

	static wait(number) {
		cy.wait(number)
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}
	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

describe('Abstraction with classes', () => {
	before(() => {
		// Runs before all tests inside describe
		HomePage.loadHomePage()
	})
	after(() => {
		// Runs after all tests inside describe block are done
		// test clean up
	})
	beforeEach(() => {
		// Runs before each block
	})
	afterEach(() => {
		// Runs after each block
	})
	it('scrolls down and up on the page', () => {
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})
	it.skip('second scrolls down and up on the page', () => {
		// with skip function the test wont be executed
		// If we just want to run this test we use: only() function, as skip
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})
})
