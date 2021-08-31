describe("ee-test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/");
  });

  it("test", () => {
    cy.findByLabelText("count").should("contain.text", 0);
    cy.findByRole("button", { name: /Add Amount/i }).click();
    cy.findByLabelText("count").should("contain.text", 2);
  });
});
