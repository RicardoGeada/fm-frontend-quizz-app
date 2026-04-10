describe('Quiz App', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:4200')
    cy.contains('quiz-app')
  })
})