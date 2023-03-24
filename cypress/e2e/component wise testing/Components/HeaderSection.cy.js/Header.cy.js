/* eslint-disable no-undef */
describe('Header Test case', () => {
    it('navigate to update profile page', () => {
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
        cy.get('#profilePage').click()
        cy.url().should('include', '/profile')

    })
    it('navigate to change Password page', () => {
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
        cy.get('#changePasswordPage').click()
        cy.url().should('include', '/password')

    })
    it(' after click on log out button  user should navigate to login page', () => {
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
        cy.get('#LogOutButton').click()
        cy.url().should('include', '/login')

    })
})
