import { assertLocationAddress, openPageFromBurgerMenu } from "./pageObjects/contactPage.po";

describe('Contact page E2E tests', () => {
    beforeEach(() => {
        cy.visitHomePage();
    })

    it('Extract Bermuda office address from contact page', () => {
        openPageFromBurgerMenu('contact');
        assertLocationAddress('Bermuda');
    })

    it('Extract London office address from contact page', () => {
        openPageFromBurgerMenu('contact');
        assertLocationAddress('London');
    })
})
