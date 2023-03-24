/* eslint-disable no-undef */
import store from '../../../../src/Redux/Store/Store'
import { fetchProducts } from '../../../../src/Redux/Reducers/ProductSlice'
describe('API fetch diffrent test cases',()=>{

   /* A test cases for fetching data from API. */
    it(' fetching data -> Pending case ',()=>{
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
        cy.wrap(store.dispatch(fetchProducts.pending()))
        cy.wrap(store).invoke('getState').then(state=>{
            expect(state.products.loading).equal(true)
        })
    })

    it('fetching data ->Fulfiiled case',()=>{
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
        cy.wrap(store.dispatch(fetchProducts.fulfilled()))
        cy.wrap(store).invoke('getState').then(state=>{
            expect(state.products.loading).equal(false)
            expect(state.products.products).not.equal(null)
            expect(state.products.error).equal('');

        })
    })

    it('fetching data ->Rejected case',()=>{
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
        cy.wrap(store.dispatch(fetchProducts.rejected()))
        cy.wrap(store).invoke('getState').then(state=>{
            expect(state.products.loading).equal(false)
            expect(state.products.error).not.equal('')
        })
    })
})