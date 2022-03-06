import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback test using fixtures', () => {
	before(() => {
		FeedbackPage.load()
	})

	it('submits feedback form', () => {
		FeedbackPage.submitFeedback()
	})
})
