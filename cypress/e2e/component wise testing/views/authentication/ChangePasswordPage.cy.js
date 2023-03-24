/* eslint-disable no-undef */
describe('change password test case', () => {
  it('User can Change their password by entering new password', () => {
    cy.window().then((window) => {
      window.localStorage.setItem('isLogin', true)
      window.localStorage.setItem('signUpData', JSON.stringify([{
        firstName: 'Drashti',
        lastName: 'Mitaliya',
        email: 'd@gmail.com',
        phoneNumber: '1234567890',
        password: 'U2FsdGVkX1919CMbsCRna6Jqp8+4/hCe8l7hct8k2ZQ=',
        isActive: true
      }]))
    })
    cy.visit('http://localhost:3000/password')
  

  })


  it('if user enters  current password and new password both same', () => {
    cy.window().then((window) => {
      window.localStorage.setItem('isLogin', true)
      window.localStorage.setItem('signUpData', JSON.stringify([{
        firstName: 'Drashti',
        lastName: 'Mitaliya',
        email: 'd@gmail.com',
        phoneNumber: '1234567890',
        password: 'U2FsdGVkX1919CMbsCRna6Jqp8+4/hCe8l7hct8k2ZQ=',
        isActive: true
      }]))
    })
    cy.visit('http://localhost:3000/password')

    cy.get('#password').type('Abcd123*')
    cy.get('#newPassword').type('Abcd123*')
    cy.get('#confirmPassword').type('Abcd123*')
    cy.get('#SetPasswordButton').click()
 

  })


  it('if user enters wrong original password', () => {
    cy.window().then((window) => {
      window.localStorage.setItem('isLogin', true)
      window.localStorage.setItem('signUpData', JSON.stringify([{
        firstName: 'Drashti',
        lastName: 'Mitaliya',
        email: 'd@gmail.com',
        phoneNumber: '1234567890',
        password: 'U2FsdGVkX1919CMbsCRna6Jqp8+4/hCe8l7hct8k2ZQ=',
        isActive: true
      }]))
    })
    cy.visit('http://localhost:3000/password')
    cy.get('#password').type('Abcd1234*')
    cy.get('#newPassword').type('Abcd123*')
    cy.get('#confirmPassword').type('Abcd123*')
    cy.get('#SetPasswordButton').click()

  })
  
})