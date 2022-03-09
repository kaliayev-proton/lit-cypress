import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('I open feedback form', () => {
	FeedbackPage.visit()
})

When('I fill feedback form and submit', () => {
	FeedbackPage.fillFeedbackFormAndSubmit()
})
