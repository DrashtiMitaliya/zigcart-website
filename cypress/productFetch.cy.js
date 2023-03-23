describe('API fetch Testing', () => {
    it('GET- verify status code and response', () => {
        cy.request({
            method : 'GET',
            url : 'https://dummyjson.com/products/1'
        }).then(response =>{
            expect(response.status).
        })
    });
    
});
