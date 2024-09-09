describe('Navigate to the url', () => {
    it('Should Enter the text', () => {
    cy.visit('https://www.facebook.com/');
    cy.wait(3000);
    cy.get("#email").type("demotest@gmail.com");
    cy.get("#pass").type("demotest");
    cy.get("#u_0_5_lz").click()
    cy.get("._9ay7").should('have.value',"The password that you've entered is incorrect. ")
    });
}); 