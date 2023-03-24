/* import from package*/
/* eslint-disable no-undef */
const { slowCypressDown } = require("cypress-slow-down")
slowCypressDown(900)
describe('successfully loads', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it("check all fields and routes", () => {
        // we have already one user data in local storage
        cy.window().then((window) => {
            window.localStorage.setItem('isLogin', false)
            window.localStorage.setItem('signUpData', JSON.stringify([
                {
                    firstName: 'Drashti',
                    lastName: 'Mitaliya',
                    email: 'virat@gmail.com',
                    phoneNumber: '1234567890',
                    isActive: false
                }]))
        })

        // if user try to login without have an account
        const signUpData = {
            email: "d@gmail.com",
            password: "Abcd123*"
        }

        cy.get('#login-email').type(signUpData.email)
        cy.get('#login-password').type(signUpData.password)
        cy.get('#LogInButton').click()

        // if user don't have an account then it will redirect to signup page where  user create their account
        cy.visit('http://localhost:3000/signup')
        cy.get('input[name="firstName"]').type('Ayush')
        cy.get('input[name="lastName"]').type('Mitaliya')
        cy.get('input[name="phoneNumber"]').type('1234567890')
        cy.get('input[name="email"]').type('d@gmail.com')
        cy.get('input[name="password"]').type('Abcd123*')
        cy.get('input[name="confirmPassword"]').type('Abcd123*')
        cy.get('#SignUpButton').click()
        cy.url().should('include', 'home')

        // now user should redirect to home page where all products are available
        cy.visit('http://localhost:3000/home')

        // then user click on show more button then redirect to product details page
        cy.get('#showMoreDetailsButton').click()
        cy.url().should('include', '/products/1')

        // after click on back button user will redirect to products page
        cy.get('#BackButton').click()
        cy.url().should('include', '/home')

        // Now if user wants to update their profile then user click on edit profile button and user will navigate on edit profile page
        cy.get('#profilePage').click()
        cy.visit('http://localhost:3000/profile')
        cy.get('#ProfileFirstName').clear().type('Ayush')
        cy.get('#ProfileLastName').clear().type('Mitaliya')
        cy.get('#ProfileEmail').clear().type('d@gmail.com')
        cy.get('#ProfilePhoneNumber').clear().type('0987654321')
        cy.get('#ProfileButton').click()


        // now if user want to change their email and if that email is already exists then user get an error

        cy.get('#ProfileFirstName').clear().type('rocky')
        cy.get('#ProfileLastName').clear().type('Mitaliya')
        cy.get('#ProfileEmail').clear().type('virat@gmail.com')
        cy.get('#ProfilePhoneNumber').clear().type('0987654321')
        cy.get('#ProfileButton').click()

        // Now if user want to change his password then he will redirect to change password page
        cy.get('#changePasswordPage').click()
        cy.url().should('include', '/password')
        cy.get('#password').type('Abcd123*')
        cy.get('#newPassword').type('aBcd123*')
        cy.get('#confirmPassword').type('aBcd123*')
        cy.get('#SetPasswordButton').click()

        // now if  user enters  current password and new password both same
        cy.url().should('include', '/password')
        cy.get('#password').clear().type('Abcd123*')
        cy.get('#newPassword').clear().type('Abcd123*')
        cy.get('#confirmPassword').clear().type('Abcd123*')
        cy.get('#SetPasswordButton').click()

        // if user enters wrong original password
        cy.get('#password').clear().type('Abcd1234*')
        cy.get('#newPassword').clear().type('Abcd123*')
        cy.get('#confirmPassword').clear().type('Abcd123*')
        cy.get('#SetPasswordButton').click()

        // now after click on logout button user will logout successfully
        cy.get('#LogOutButton').click()
        cy.url().should('include', '/login')

        // after logout user have to login with new credentials(updated data)
        cy.get('#login-email').type('d@gmail.com')
        cy.get('#login-password').type('aBcd123*')
        cy.get('#LogInButton').click()
    }
    )
})
