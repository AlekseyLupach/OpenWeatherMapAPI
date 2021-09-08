/* eslint-disable */
describe("App initialization", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Loads components on page load", () => {
    cy.get(".container").should("exist");
    cy.get('.search')
    cy.get('.drop-down')
    cy.get(".input")
    cy.get("button")
    cy.get("select")
  });
});

