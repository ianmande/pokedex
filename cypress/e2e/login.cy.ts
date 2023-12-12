describe('e2e login', () => {
  it('sign in redirect to login', () => {
    cy.visit('/');

    cy.url().should('include', '/login');
  });

  it('sign in and sign out success', () => {
    cy.visit('/login');

    cy.contains('pokedex').should('exist');
    cy.contains('Hecho con poke cariño -').should('exist');

    cy.get('#email').type('ian@ian.com');
    cy.get('#email').should('have.value', 'ian@ian.com');

    cy.get('#password').type('my-pass');
    cy.get('#password').should('have.attr', 'type', 'password');

    cy.get('#toggle-visibility').click();

    cy.get('#password').should('have.attr', 'type', 'text');

    cy.get('button').click();

    cy.url().should('include', '/');
    cy.url().should('include', '/page/1');

    cy.get('#sing-out').click();

    cy.url().should('include', '/login');
  });

  it('sign in fail', () => {
    // Intercepta la solicitud de inicio de sesión y retrasa la respuesta en 2000ms
    cy.intercept('POST', '/api/login', {
      delayMs: 2000,
      body: { message: 'Invalid credentials' },
    }).as('loginRequest');

    cy.visit('/login');

    cy.get('#email').type('ian@ian.com');
    cy.get('#email').should('have.value', 'ian@ian.com');

    cy.get('#password').type('my-pass1');
    cy.get('#password').should('have.attr', 'type', 'password');

    cy.get('button').click();

    cy.wait('@loginRequest');
  });
});
