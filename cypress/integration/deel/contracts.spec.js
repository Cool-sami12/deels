/// <reference types="cypress" />

describe("Contracts" , () => {
    
    it("visit deels  site ",() =>{

        cy.visit("https://app.deel.training/login")

    } )

     it("Login ", () => {
    cy.get('.flex-dir-col > :nth-child(1) > .input').type("samuel.aniefiok91@gmail.com")
    cy.get('.mt-9 > .input-container > .input > input').type("COMputer12!")
    cy.get('.mt-10').click()


     })
     it("Selecting a fixed Contract", ()=>{
         cy.get('.mobile-header-content-container > .button > :nth-child(1) > .flex > svg > path').click()
         cy.get(':nth-child(2) > .anchor > .sidebar-link > .flex > .sidebar-option-p').click()
         cy.get(':nth-child(1) > .anchor > .box').should('be.visible').click()
     })
     it("General information page" ,()=>{
         cy.get('.deel-ui__stack > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control').click()
         cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').type("QA part-time")
     })


})