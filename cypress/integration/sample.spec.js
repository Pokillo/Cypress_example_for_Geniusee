/// <reference types="cypress" />

const url = 'https://react-redux.realworld.io';


describe('example for registration form validation', () => {
  let user;
  beforeEach(() => {
    cy.task("freshUser").then((object) => {
      user = object;
  })
  })



  it('dispaly logo',() => {
    cy.visit(url);
    cy.get('.logo-font').should('have.text', 'conduit')
  })

  it('registration with valid data',() => {
    cy.visit(url);
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get('h1.text-xs-center').should('have.text', 'Sign Up');
    cy.get('p.text-xs-center > a').should('have.attr', 'href', '#login');

    window.username = user.username + "test";
    window.email = user.email;
    window.password = user.password;

    cy.get(':nth-child(1) > .form-control').type(username)
    cy.get(':nth-child(2) > .form-control').type(email)
    cy.get(':nth-child(3) > .form-control').type(password)
    cy.get('.btn').click()
    cy.get(':nth-child(4) > .nav-link').should('have.text', username)
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.btn-outline-danger').should('have.text', 'Or click here to logout.')
      .click()

      cy.url().should('eql', url)


  })

  it('log in with invalid data', () => {
    cy.get(':nth-child(2) > .nav-link').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .form-control').type(email)
    cy.get(':nth-child(2) > .form-control').type(password)
      .type('{enter}')
    cy.get('.error-messages > li').should('have.text', "email or password is invalid")
      

  })



    }
      )
