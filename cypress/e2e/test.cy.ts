describe('Login Page Test', () => {
  // Visit the login page before each test
  beforeEach(() => {
    cy.visit('/Login'); // Change the URL as needed
  });

  it('Should allow a user to login successfully', () => {
    cy.get('input[name="email"]').type("chaimaa@test.com")
    cy.get('input[name="password"]').type("123456")
    cy.get('button[type="submit"]').click()
  })  
})
