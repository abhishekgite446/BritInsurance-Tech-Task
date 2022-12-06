
import { addresses } from "../../fixtures/data";

/* selectors */
const burgerMenuIcon = '//div[@class="component--header__burger"]';
const navigationMenuLevelOne = '//div[@class="navigation--level level-one"]';
const pageLink = (menuItem) => `//a[@href="/${menuItem}"]`;
const officeLocation = (location) => `//h2[text()="${location} Office"]`;
const officeLocationAddress = (location) => `//h2[text()="${location} Office"]/ancestor::div/following-sibling::div/div/div/div/address`;

/* functions */
export const openPageFromBurgerMenu = (pageName) => {
    cy.xpath(burgerMenuIcon).click();
    cy.xpath(navigationMenuLevelOne).should('be.visible');
    cy.xpath(navigationMenuLevelOne).scrollTo('bottom')
    cy.xpath(pageLink(pageName)).click()
    cy.url().should('include', `/${pageName}`);
};

export const assertLocationAddress = (location) => {
    cy.xpath(officeLocation(location)).scrollIntoView();
    cy.xpath(officeLocationAddress(location)).then((elem) => {
        expect(elem.text().trim()).to.eql(addresses[`${location}`]);
    })
};
