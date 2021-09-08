/* eslint-disable */
describe("forecast btn", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("accept btn", () => {
    const buttons = [
      { link: "#3", expectedLength: 4 },
      { link: "#7", expectedLength: 8 },
      { link: "#14",expectedLength: 15 },
    ];
    cy.get("input")
        .type("Minsk")
        .get(".search-btn")
        .click();
    cy.get(
      ".info-block .info-block-header .info-block-header-right button"
    ).should("exist");
    cy.wrap(buttons).each((button) => {
      cy.get(button.link)
        .click();
      cy.get(".forecast-info")
        .should("exist");
      cy.get(".forecast-info .info-block")
        .should(
        "have.length",
        button.expectedLength
      );
      cy.get(".forecast-info .info-block .info-block-header-right button")
        .click()
        .should("not.exist");
    });
  });
});
