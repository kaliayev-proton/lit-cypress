Feature: Send Feedback

As a customer
I can send my feedback via form

Scenario: Submit feedback form
Given I open feedback form
When I fill feedback form and submit
Then I see "/sendFeedback.html" in the URL