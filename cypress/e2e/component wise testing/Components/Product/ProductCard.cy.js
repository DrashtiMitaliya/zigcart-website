/* eslint-disable no-undef */
describe('show more about products',()=>{
    it('In products page after clicking show more button then user redirect to preductdetails page',()=>{
        cy.window().then((window) => {
            window.localStorage.setItem('isLogin', true)
          window.localStorage.setItem('signUpData', JSON.stringify([{
            firstName : '',
            lastName : '',
            email: '',
            phoneNumber: '',
            isActive :true
          }]))
        })
        cy.visit('http://localhost:3000/home')
        cy.get('#showMoreDetailsButton').click()
        cy.url().should('include', '/products/1')
    })
})