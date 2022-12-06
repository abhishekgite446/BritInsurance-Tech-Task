
import { searchResults } from "../../fixtures/data";

/* selectors */
const searchIcon = '//div[@class="component--header__search"]';
const searchInputBar = '//input[@type="search"]';
const searchResultsContainer = '//div[@class="header--search__results"]';
const searchResultsList = '//div[@class="header--search__results"]/div';


/* functions */
export const search = (searchTerm) => {
    cy.xpath(searchIcon).click();
    cy.xpath(searchInputBar).click();
    cy.xpath(searchInputBar).type(searchTerm);
    cy.xpath(searchResultsContainer).should('be.visible');
};

export const assertSearchResults = (searchTerm) => {
    cy.xpath(searchResultsList).each((item, index, list) => {
        // Checks if the number of results are same as expected
        expect(list).to.have.length(searchResults[`${searchTerm}`].length);

        // Asserts each results title
        expect(item.text().trim()).to.eq(searchResults[`${searchTerm}`][index]);
    })
};