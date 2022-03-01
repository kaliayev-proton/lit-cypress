# Lit with Cypress automation testing

## Execute Lit app with Vite:

- `npm install` (only once)
- `npm run dev`

## Setup Cypress:

- `npm i cypress` (only once)
- `npx cypress open` (only once it creates **cypress.json** and **cypress** folder))
- `npm run cy:open` (it opens the cypress UI)
  - Cypress folder contains:
    - **fixtures**. We store here data for stabbing network request or when we need to create some data
    - **integration**. We store here all our tests, visual tests, cucumber tests, basic scenarios, etc.
    - **plugins**. Config Cypress extensions for Cucumber for example
    - **support**. Here we can store custom commands to execute in the process
  - cypress.json holds executes all test)
- `npm run cy:run` Execute all tests in headless mode, just int he console. Also generates a **videos** folder by default.

## Cypress Basics

### Run single test file in headless mode

`npx cypress run --spec="cypress/integration/<my-single-test-file>"`

## Prettier
