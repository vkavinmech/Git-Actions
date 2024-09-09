describe('Navigate to the Google url', () => {
  it('Should Enter the text', () => {
  cy.visit('https://www.google.com/');
  cy.wait(3000);
  cy.title().should('eq','Google');
  cy.get('#APjFqb').type("Automation");
  
      });
   }); 