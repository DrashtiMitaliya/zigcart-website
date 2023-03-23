/* eslint-disable no-undef */
describe('private route test case', () => {
    it('if user is authenticated then redirect at home(products) page ', () => {
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
        cy.url().should('include', '/home')
    })
    it('if user is not authenticated then redirect at login page ', () => {
        cy.window().then((window) => {
            window.localStorage.setItem('isLogin', false)
            window.localStorage.setItem('signUpData', JSON.stringify([{
                firstName: 'Drashti',
                lastName: 'Mitaliya',
                email: 'd@gmail.com',
                phoneNumber: '1234567890',
                password: 'U2FsdGVkX1919CMbsCRna6Jqp8+4/hCe8l7hct8k2ZQ=',
                isActive: true
            }]))
        })
        cy.visit('http://localhost:3000/login')
        cy.url().should('include', '/login')
    })
    
})