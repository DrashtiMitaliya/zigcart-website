/* eslint-disable no-undef */

describe('Login page', () => {
  it('Logs in a user with valid credentials', () => {

    cy.window().then((window) => {
      window.localStorage.setItem('isLogin', false)
      window.localStorage.setItem('signUpData', JSON.stringify([{
        email: 'd@gmail.com',
        password: 'U2FsdGVkX1919CMbsCRna6Jqp8+4/hCe8l7hct8k2ZQ=',
      }]))
    })
    cy.visit('http://localhost:3000/login')
    cy.get('#login-email').type('d@gmail.com')
    cy.get('#login-password').type('Abcd123*')
    cy.get('#LogInButton').click()
    cy.window().then((window) => {
      window.localStorage.setItem('isLogin', true)
    });
    cy.url().should('include', '/home')
  })


  it('Displays an error message with invalid credentials', () => {
    cy.window().then((window) => {
      window.localStorage.setItem('isLogin', false)
      window.localStorage.setItem('signUpData', JSON.stringify([{
        email: 'd@gmail.com',
        password: 'U2FsdGVkX1919CMbsCRna6Jqp8+4/hCe8l7hct8k2ZQ=',
      }]))
    })

    cy.visit('http://localhost:3000/login')
    cy.get('#login-email').type('a@gmail.com')
    cy.get('#login-password').type('aBcd123*')
    cy.get('#LogInButton').click()
    cy.get('.error-message').should('be.visible')
  })
})