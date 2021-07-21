/// <reference types="cypress" />

const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';


describe('Hello stream', () => {

  it('Just do it', () => {
    cy.visit(url)
      .wait(5000)

    cy.get('#search-form > #container').should('have.id', 'container')
      .type('You have been Rick rolled')
      .wait(4000)


    cy.get('.ytp-play-button').click()


 })



} ) 