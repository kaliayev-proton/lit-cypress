import BasePage from '../BasePage'
export default class FeedbackPage extends BasePage {
	static load() {
		cy.visit('zero.webappsecurity.com/feedback.html')
	}
	static submitFeedback() {
		cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
			cy.submitFeedback(name, email, subject, message)
		})
	}
}
