describe('Create and mark-unmark as favorite', function(){
    it('Sign in', function(){
        //launch the application
        cy.visit('https://react-redux.realworld.io/#/login')
        //verify the title
        cy.title().should('eq', 'Conduit')
        //pass a value for email
        cy.get('input[type="email"]').type('kimbiggs1988@gmail.com')
        //pass a value for password
        cy.get('input[type="password"]').type('admin123')
        //verify that the sign in button is visible
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        //wait 10 seconds before completing verification
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })
})