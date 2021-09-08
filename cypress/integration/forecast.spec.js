/* eslint-disable */
describe("forecast", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("forecast get", () => {
    cy.get("input").type("Minsk").get(".search-btn").click();
    cy.get(".info-block").should("exist");
  });
});
