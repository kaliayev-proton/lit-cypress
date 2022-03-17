describe('Lighthouse demo', () => {
	beforeEach(() => {
		cy.visit('http://example.com/', { timeout: 10000 })
	})

	it('runs performance audits', () => {
		cy.lighthouse()
		cy.pa11y()
	})
	it('runs performance audits using custom thresholds', () => {
		cy.lighthouse(
			{
				accessibility: 70,
				performance: 70,
				seo: 70,
			},
			{
				formFactor: 'desktop',
				screenEmulation: {
					disabled: true,
				},
			}
		)
	})
})
