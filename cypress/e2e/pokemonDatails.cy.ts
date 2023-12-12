describe('e2e pokemon details', () => {
  it('should render all pokemon details', () => {
    cy.visit('/login');
    cy.login('ian@ian.com', 'my-pass');

    cy.contains('bulbasaur').click();

    cy.url().should('include', '/pokemon/bulbasaur');

    cy.contains('bulbasaur').should('exist');

    cy.contains('#001').should('exist');
    cy.contains(/movimientos/i).should('exist');
    cy.contains(/altura/i).should('exist');
    cy.contains(/peso/i).should('exist');

    cy.contains('grass').should('exist');
    cy.contains('poison').should('exist');
  });

  it('should render render with backgroundColor and should go to back', () => {
    cy.visit('/login');
    cy.login('ian@ian.com', 'my-pass');

    cy.contains('bulbasaur').click();

    cy.url().should('include', '/pokemon/bulbasaur');

    cy.contains('bulbasaur').should('exist');

    cy.get('#PokeBackground').should(
      'have.css',
      'background-color',
      'rgb(116, 203, 72)'
    );

    cy.get('#btn-go-back').click();

    cy.url().should('include', '/page/1');
  });
});
