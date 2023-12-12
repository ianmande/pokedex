describe('e2e home', () => {
  it('should render pokemons', () => {
    cy.visit('/login');
    cy.login('ian@ian.com', 'my-pass');

    cy.contains('bulbasaur').should('exist');
    cy.contains('charmander').should('exist');

    cy.url().should('include', '/');
    cy.url().should('include', '/page/1');
  });

  it('should navigate to pokemon details', () => {
    cy.visit('/login');
    cy.login('ian@ian.com', 'my-pass');

    cy.contains('bulbasaur').click();

    cy.url().should('include', '/pokemon/bulbasaur');

    cy.contains('bulbasaur').should('exist');

    cy.contains('#001').should('exist');
    cy.contains(/movimientos/i).should('exist');
    cy.contains(/altura/i).should('exist');
    cy.contains(/peso/i).should('exist');
  });

  it('should navigate in pagination', () => {
    cy.visit('/login');
    cy.login('ian@ian.com', 'my-pass');

    cy.contains('bulbasaur').should('exist');

    cy.contains('Mostrando 1 de 108 resultados').should('exist');

    cy.get('#btn-to-page-1').should('have.class', 'bg-poke-fire');
    cy.get('#btn-to-page-2').click();

    cy.url().should('include', '/page/2');

    cy.get('#btn-to-page-2').should('have.class', 'bg-poke-fire');

    cy.contains('Mostrando 2 de 108 resultados').should('exist');
  });

  it('should search a pokemon and render loading', () => {
    cy.visit('/login');
    cy.login('ian@ian.com', 'my-pass');

    cy.get('#default-search').type('pikachu');

    cy.intercept('GET', '/api/pokemons/by-name?name=pikachu', {
      delayMs: 3000,
    }).as('getPokemon');

    cy.url().should('include', '/page/1?search=pikachu');

    cy.wait('@getPokemon');

    cy.get('#poke-loading').should('exist');
  });

  it('should search a pokemon', () => {
    cy.visit('/login');
    cy.login('ian@ian.com', 'my-pass');

    cy.get('#default-search').type('pikachu');

    cy.url().should('include', '/page/1?search=pikachu');

    cy.get('#poke-loading').should('exist');

    cy.contains('pikachu').click();
    cy.url().should('include', '/pokemon/pikachu');
    cy.contains('pikachu').should('exist');
  });
});
