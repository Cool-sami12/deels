/// <reference types="cypress" />

describe("Registration" , () => {
    
    it("visit deels  site ",() =>{

        cy.visit("https://app.deel.training/login")

    } )
    it("click Sign up button ",() =>{
      
        // cy.contains("Need to create an acccount?").should("be.visible")
        cy.get("button.login-signup-link")
        cy.get('.create-account > .anchor > .button > div')
            .click()

        
    } )
    it("select a client ", () =>{

        // select a client 
        cy.get('.pr-6 > .selector').click()
        //click on continue
        cy.get('.w-100 > div').should("be.visible")
            .click()

    })
    it("Fill the registration form ", ()=>{
        cy.get(':nth-child(2) > .input-container > .input').type("Samuel Aniefiok")
        cy.get(':nth-child(3) > .input-container > .input').type("samuel.aniefiok91@gmail.com")
        cy.get(':nth-child(4) > .input-container > .input').type("COMputer12!")
        cy.get(':nth-child(5) > .input-container > .input').type("COMputer12!")
        cy.get('.select__value-container').click().select('Google')
            
    })
        

})