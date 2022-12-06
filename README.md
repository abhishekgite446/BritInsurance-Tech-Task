# BritInsurance-Tech-Task
UI Automation Framework for BritInsurance Tech Task

## Requirements
- NodeJS

## Setup
- Clone the git repo
- Run following command in terminal it will install all the npm modules
```sh
    $ npm install
``` 

## How to run the test
### OPEN BROWSER
Following command will open the cypress app to run specific specs as end-to-end test. 
```sh
    $ npm run cypress:open
``` 
### HEADLESS BROWSER
Following command will execute the end-to-end tests in headless mode. 
```sh
    $ npm run cypress:ci
``` 

## Assumptions
- The tech task is only about focusing on E2E UI tests
- There are no external dependencies for this task

## Framework Structure
- 'cypress/e2e' folder includes the cypress js files and other sub folders 'pageObjects'
- 'cypress/e2e/pageObjects' folder contains files for individual screens/pages.
- 'cypress/fixtures' folder contains the data.js file
- 'cypress/support' folder contains the commands.js and e2e.js file. Commands.js file contains custom commands setup to use in the fraemwork.
- 'package.json' holds verious metadata about the project
- 'cypress.config.js' this config file contains all the necessary information to run the test suite

## Tools/Libraries
- Cypress
- Cypress-Xpath


## Notes
- I have created two cypress files to include test scenarios based on the webpage/functionality they belonged
- PageObject model design pattern was used for maintainability and avoid code duplication
- In contact.cy.js extra test case was added to fetch and assert London office address. This is to showcase the functions developed can be used for other location address as well.
- In commands.js a custom command for visiting the BritInsurance website and making sure the webpage is completely loaded before proceeding is added. Which can now be utilised with the command

*Command* - ``cy.visitHomePage();``