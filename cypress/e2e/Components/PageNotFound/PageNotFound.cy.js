/* eslint-disable no-undef */
describe('Entering a wrong URL test case using Cypress', () => {
    it('should display the Cypress 404 page when entering a wrong URL', () => {
        cy.window().then((window) => {
            window.localStorage.setItem('isLogin', true)
            window.localStorage.setItem('signUpData', JSON.stringify([{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                isActive: true
            }]))
        })
        cy.visit('http://localhost:3000/home')
        cy.url().should('eq', 'http://localhost:3000/home')
    
        cy.visit('http://localhost:3000/*')
        cy.url().should('include','/*')
    

    })
})
