describe("Contact with us page tests", () => {
    beforeEach(() => {
      cy.visit("https://www.eesti.ee/eraisik/et/vajad-abi");
    });
    it("Page contained all neede fields", () => {
      cy.get('[controlname="fullName"]').should("exist");
      cy.get('[controlname="email"]').should("exist");
      cy.get('[fieldtype="textarea"]').should("exist");
    });
    it("Form throws an error on incorrect input", () => {
      cy.get(".invalid-control-scroll-trigger").click();
      cy.get(
        '[controlname="email"] > .d-flex > div[_ngcontent-rig-mfe-shell-c3766031634=""] > stateportal-invalid-input-error > .validation-error'
      ).should("exist");
    });
  });
  