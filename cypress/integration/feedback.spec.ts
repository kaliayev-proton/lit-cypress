describe('Feedback test', () => {
	// before(() => {
	// 	cy.visit('zero.webappsecurity.com', { timeout: 10000 })
	// 	cy.contains('Feedback').click()
	// })
	// it('loads feedback form', () => {
	// 	cy.get('form').should('be.visible')
	// })
	// it('fills feedback form', () => {
	// 	cy.get('#name').type('my fake name')
	// 	cy.get('#email').type('my_fake_email@email.com')
	// 	cy.get('#subject').type('subject')
	// 	cy.get('#comment').type('A very nice comment')
	// })
	// it('submits feedback form', () => {
	// 	cy.get('.btn-signin').click()
	// })
	// it('displays feedback message', () => {
	// 	cy.get('#feedback-title').contains('Feedback')
	// })

	it('submits feedback form', () => {
		cy.visitFeedbackPage()
		cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
			cy.submitFeedback(name, email, subject, message)
		})
	})
})
