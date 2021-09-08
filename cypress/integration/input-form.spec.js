/* eslint-disable */
describe("input form", () => {
  const typeText = "Minsk";
  beforeEach(() => {
    cy.visit("/");
  });

  it("accept input", () => {
    cy.get("input")
        .type(typeText)
        .should("have.value", typeText);
  });

  it("Form submit", () => {
    cy.get("input")
      .type(typeText)
      .get(".search-btn")
      .click()
      .should("have.value", "");
  });

  it("Form focuses input get the autocomplited", () => {
    cy.get("input")
      .type("f")
    cy.get(".input-list ul")
      .should("have.length", 1)
    cy.get("li div")
      .should("exist")
  });

  it("Form submit get the result", () => {
    cy.get("input")
      .type(typeText)
      .get(".search-btn")
      .click()
      cy.get(".info-block")
        .should("exist")
  });

  it("Display an error on failure", () => {
    cy.get("input")
      .get(".search-btn")
      .click()
    cy.get(".alert")
      .should('be.visible')  
  })
});
