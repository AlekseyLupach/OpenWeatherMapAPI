/* eslint-disable */
describe("dropdown", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("select ru language", () => {
    cy.get("select")
        .select("ru")
    cy.get(".search-btn").should("have.text", "Поиск")
    cy.get("input").should("have.attr", "placeholder", "Введите город")
  });

  it("select en language", () => {
    cy.get("select")
        .select("en")
    cy.get(".search-btn").should("have.text", "Search")
    cy.get("input").should("have.attr", "placeholder", "Enter the city")
  });

});
