/// <reference types="cypress" />

describe("Contracts" , () => {
    
    it("visit deels  site ",() =>{

        cy.visit("https://app.deel.training/login")

    } )

     it("Login ", () => {
    cy.get('.row:nth-child(4)').click();
    cy.get('.flex > .input-container input').click();
    cy.get('.flex > .input-container input').type('samuel.aniefiok91@gmail.com');
    cy.get('.mt-9 > .input-container input').type('COMputer12!');
    cy.get('.opacity-0').click();
    cy.get('form').submit();

      })
     it("Creating a fixed Contract", ()=>{
            cy.url().should('contains', 'https://app.deel.training/');
            cy.url().should('contains', 'https://js.stripe.com/v3/m-outer-fd3c67f2efa9f22f2ecd16b13f2a7fb3.html');
            cy.url().should('contains', 'https://m.stripe.network/inner.html');
            cy.get('.mb-2:nth-child(2) .sidebar-option-p').click();
            cy.get('.deel-ui__select__single-value').click();
            cy.get('.deel-ui__input-component__input_placeholder').click();
            cy.get('.deel-ui__input-component__input_placeholder').type('QA FREELANCER');
            cy.get('.input-container:nth-child(1) .deel-ui__select').click();
            cy.get('.input-container:nth-child(3) .deel-ui__input-component__input').click();
            cy.get('.input-container:nth-child(3) .deel-ui__input-component__input').type('Quality Assurance');
            cy.get('.input-container:nth-child(4) .deel-ui__select').click();
            cy.get('.deel-ui__textarea-component__textarea').click();
            cy.get('.deel-ui__textarea-component__textarea').type('{backspace}');
            cy.get('.deel-ui__textarea-component__textarea').type('ALL QA FUNCTIONS ');
            cy.get('.scopes-dropdown-toggle').click();
            cy.get('.scopes-dropdown-toggle').click();
            cy.get('.deel-ui__calendar-input-container__input_content_value').click();
            cy.get('.deel-ui__select__value-container_is--open .deel-ui__select__single-value').click();
            cy.get('.deel-ui__select__compact .deel-ui__select__control').click();
            cy.get('.deel-ui__select__value-container_is--open').click();
            cy.get('#react-select-5-input').type('');
            cy.get('.deel-ui__input-component__input').click();
            cy.get('.deel-ui__input-component__input').type('1,000');
            cy.get('.deel-ui__select__value-container_is--open .deel-ui__select__single-value').click();
            cy.get('.mt-9').click();
            cy.get('.deel-ui__select__single-value').click();
            cy.get('.deel-ui__select__single-value').click();
            cy.get('.textarea').click();
            cy.get('.textarea').type('Extra work Attracts more Pays');
            cy.get('.mt-7:nth-child(5) .flex > div > div').click();
            cy.get('.mt-7:nth-child(5) .flex > div > div').click();
            cy.get('div:nth-child(1) > .text-left:nth-child(1)').click();
            cy.get('body').type('{downarrow}');
            cy.get('.mt-7:nth-child(5)').click();
            cy.get('.opacity-0').click();
            cy.get('.mb-2:nth-child(3) .sidebar-link > .flex').click();

     })
    //  it("General information page" ,()=>{

    // //      cy.get('.deel-ui__stack > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control').click()
    // //      cy.get(':nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input').type("QA part-time")
    // //  })
    


})