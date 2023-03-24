/* eslint-disable no-undef */
describe('log out test case ',()=>{
    it('after click on log out button user redirect to login page',()=>{
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
          cy.visit('http://localhost:3000/home')
          cy.get('#LogOutButton').click()
    })
})