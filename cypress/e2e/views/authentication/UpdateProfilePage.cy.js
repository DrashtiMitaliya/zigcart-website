/* eslint-disable no-undef */
describe('UpdateProfilePage', () => {
    it('Update profile page with firstname ,lastname ,email,phoneNumber', () => {
        // cy.visit('http://localhost:3000/home')
        
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
        cy.visit('http://localhost:3000/profile')
      
        cy.get('#ProfileFirstName').type('Ayush')
        cy.get('#ProfileLastName').type('Mitaliya')
        cy.get('#ProfileEmail').type('d@gmail.com')
        cy.get('#ProfilePhoneNumber').type('0987654321')
        cy.get('#ProfileButton').click()
        cy.get('#ProfileButton').should('be.visible')
      })
    
      it('Update profile page with firstname ,lastname ,email,phoneNumber', () => {
        cy.window().then((window) => {
            window.localStorage.setItem('isLogin', true)
            window.localStorage.setItem('signUpData', JSON.stringify([{
            firstName : 'Drashti',
            lastName : 'Mitaliya',
            email: 'd@gmail.com',
            phoneNumber: '1234567890',
            isActive :true
          },
        
          {
            firstName : 'Drashti',
            lastName : 'Mitaliya',
            email: 'virat@gmail.com',
            phoneNumber: '1234567890',
            isActive :true
          }]))
        })
        cy.visit('http://localhost:3000/profile')
        cy.get('#ProfileFirstName').type('Ayush')
        cy.get('#ProfileLastName').type('Mitaliya')
        cy.get('#ProfileEmail').type('virat@gmail.com')
        cy.get('#ProfilePhoneNumber').type('0987654321')
        cy.get('#ProfileButton').click()
        cy.get('#ProfileButton').should('be.visible')
      })
});
