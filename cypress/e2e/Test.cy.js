describe('Navigate to the facebook', () => {
    it('Should perform login with invalid credentials', () => {
    cy.visit('https://www.facebook.com/');
    cy.wait(3000);
    cy.get("#email").type("demotest@gmail.com");
    cy.get("#pass").type("demotest");
    cy.get("[name='login']").click();
    cy.get("._9ay7").should('have.value',"The password that you've entered is incorrect. ")
    });
}); 