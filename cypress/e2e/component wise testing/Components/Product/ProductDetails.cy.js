/* eslint-disable no-undef */
describe('after showing details of products user navigate to products page',()=>{
    it('In product details page after clicking back button then user redirect to preducts page',()=>{
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
        cy.visit('http://localhost:3000/products/1')
        cy.get('#BackButton').click()
        cy.url().should('include', '/home')
    })
})
