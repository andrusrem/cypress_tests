describe("Correct Page Load", () => {
    it("passes", () => {
        cy.visit("https://eesti.ee");
    });
});
describe("Search bar is visible", () => {
    if (
        ("passes",
            () => {
                cy.get(".search-input").should("be.visible");
            })
    );
});
describe("Search bar works", () => {
    beforeEach(() => {
        cy.visit("https://eesti.ee");
    });

    it("Typing in the search bar is allowed", () => {
        cy.get(".search-input > input")
            .should("be.visible")
            .clear()
            .click()
            .type("Eesti")
            .should("have.value", "Eesti");
    });

    it("When a valid query is entered, then return result", () => {
        cy.get(".search-input > input").type("Eesti");
        cy.get(".flex-grow-1 > :nth-child(1)").should("exist");
    });

    it("For an invalid search is no results", () => {
        cy.get(".search-input > input").type("fjafwajifawijfaw");
        cy.get(".search-results-footer__no-results").should("exist");
    });
});
