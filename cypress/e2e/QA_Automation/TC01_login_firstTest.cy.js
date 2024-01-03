describe('Login',function() {
  it('Sign in', function() {
    //cy.visit has built-in assertion
     //launch the application
    cy.visit('https://react-redux.realworld.io/#/login')
    //find an element with the properties that we provide to sign into the web app
    cy.get('input[type="email"').type("kimbiggs1988@gmail.com")
    cy.get('input[type="password"]').type('admin123')
    //classname with contains to look for matching text in an element of a specific class
    cy.get('.btn').contains('Sign in').click()
  })
})