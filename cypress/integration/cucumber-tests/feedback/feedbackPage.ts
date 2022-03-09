const URL: string = 'zero.webappsecurity.com/feedback.html'

export default class FeedbackPage {
	static visit() {
		cy.visit(URL)
	}

	static fillFeedbackFormAndSubmit() {
		cy.submitFeedback(
			'Name',
			'name@gmail.com',
			'Subject',
			'Description or comment'
		)
	}
}
