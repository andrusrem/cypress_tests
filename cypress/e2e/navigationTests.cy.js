describe("Navigation tests", () => {
    beforeEach(() => {
      cy.visit("https://eesti.ee");
    });
    it("Tervis ja retseptid has subcategories", () => {
      cy.get(":nth-child(3) > .v-header__button > .material-icons").click();
      cy.get(
        ".sidenav-menuitem-container > :nth-child(4) > :nth-child(1) > .rounded > :nth-child(1) > .sidenav-nav-item > .btn > .flex-row > .w-100"
      ).click();
      cy.get(".sidenav-menuitem-container").should("exist");
    });
    it("Retseptid page loads correctly", () => {
      cy.visit(
        "https://www.eesti.ee/eraisik/et/artikkel/tervis-ja-tervisekaitse/tervishoid-ja-arstiabi/retseptid"
      );
      cy.get(".shell-title").should("have.text", "Retseptid");
    });
  });
  