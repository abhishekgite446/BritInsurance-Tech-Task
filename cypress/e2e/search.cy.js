import { assertSearchResults, search } from "./pageObjects/homePage.po";

describe('Search functionality E2E tests', () => {
    beforeEach(() => {
        cy.visitHomePage();
    })

    it('Searches a term and validate its results', () => {
        search('IFRS 17');
        assertSearchResults('IFRS 17');
    })
})
