describe("Search Bar Check", () => {
    beforeEach(() => {
      cy.visit("https://eesti.ee"); 
    });
    it("Search bar returns data that matches the input", () => {
      cy.get(".search-input > input") 
        .type("Eesti hümn");
      cy.get(".p-1 > .dynamic-icon > .material-icons").click();
      cy.get(".section-container").should("exist");
      cy.get(":nth-child(1) > .d-flex > div > .false").click();
      cy.get(".shell-title").should("have.text", "Eesti hümn");
    });
  });
  