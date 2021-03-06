/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const { lighthouse, pa11y, prepareAudit } = require('cypress-audit')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const cucumber = require('cypress-cucumber-preprocessor').default
// const percyHealthCheck = require('@percy/cypress/task')
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
	require('cypress-mochawesome-reporter/plugin')(on)
	addMatchImageSnapshotPlugin(on, config)
	const options = {
		typescript: require.resolve('typescript'),
	}
	on('file:preprocessor', cucumber(options))
	// on('task', percyHealthCheck)

	on('before:browser:launch', (browser = {}, launchOptions) => {
		prepareAudit(launchOptions)
	})

	on('task', {
		lighthouse: lighthouse(), // calling the function is important
		pa11y: pa11y(), // calling the function is important
	})

	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
}
