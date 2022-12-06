
Cypress.Commands.add('visitHomePage', () => {
    cy.viewport('macbook-15');
    cy.visit('/');
    cy.xpath('//a[text()="Allow all cookies"]').click();
    cy.xpath('//span[@class="arrow"]', { timeout: 5000 }).should('be.visible');
});