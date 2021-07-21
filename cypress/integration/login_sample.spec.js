/// <reference types="cypress" />

const negativeCases = {
    
        nameOfTest: ["Empty email and password", "Empty email and valid password", "Valid email and empty password", 'Valid email and password shorter than 6 symbols'],
        email: [" ", " ", "test123@gmail.com", "test123@gmail.com"],
        password: [" ", "Testtest!@2", " ", "p!d02"]
    
};


let negativeCasesLenght = negativeCases.nameOfTest.length;

describe("Log in with valid and invlaid data", () =>{

    beforeEach(() => {
        cy.visit('https://react-redux.realworld.io/#/login')
      })


    for(let i = 0; i < negativeCasesLenght; i++) {
        it(negativeCases.nameOfTest[i],() => {
            cy.get(':nth-child(1) > .form-control').type(negativeCases.email[i])
            cy.get(':nth-child(2) > .form-control').type(negativeCases.password[i])
              .type("{enter}")
            cy.get('.error-messages > li').should('have.text', "email or password is invalid")

          })
    }
    })

