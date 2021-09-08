/* eslint-disable */
describe("dropdown", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("accept dropdown", () => {
    cy.get(".dropdown").click();
    cy.get(".dropdown-menu span").should("have.length", 1);
  });

  context("favorit city in dropdown", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("input").type("Minsk").get(".search-btn").click();
      cy.get(
        ".info-block .info-block-header-left .info-block-header-left-place img"
      ).click();
      cy.get(".dropdown").click();
    });

    it("added", () => {
      cy.get(".dropdown-menu li").should("exist");
    });

    it("remove", () => {
      cy.get(".dropdown").click();
      cy.get(
        ".info-block .info-block-header-left .info-block-header-left-place img"
      ).click();
      cy.get(".dropdown-menu li").should("not.exist");
    });
  });
});
