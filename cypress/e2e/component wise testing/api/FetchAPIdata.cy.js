/* eslint-disable no-undef */
describe('API Call Test', () => {
  
  
    it('Fetch product details', () => {
      cy.request('GET', `https://dummyjson.com/products/1`)
        .then((response) => {

          // Assert that the response status is 200 OK
          expect(response.status).to.equal(200);

          // Assert that the response body contains the expected data
          expect(response.body).to.have.property('title');
          expect(response.body).to.have.property('price');
        });
    });
  });