/* eslint-disable no-undef */
describe('Sign up page', () => {
    it('should allow users to sign up', () => {
      cy.visit('http://localhost:3000/signup')
      cy.get('input[name="firstName"]').type('Drashti')
      cy.get('input[name="lastName"]').type('Mitaliya')
      cy.get('input[name="email"]').type('d@gmail.com')
      cy.get('input[name="phoneNumber"]').type('1234567890')
      cy.get('input[name="password"]').type('Abcd123*')
      cy.get('input[name="confirmPassword"]').type('Abcd123*')
      cy.get('#SignUpButton').click()
      cy.url().should('include', 'home')
    })
  })
  