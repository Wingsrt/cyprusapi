

describe("todo",function(){

    before

    it("see",function(){

        cy.visit("http://localhost:3000/")

        // cy.get("button").click()
      
        // cy.get('input').type("a");

        cy.get('input').type('a').should('have.value',"a");

        cy.get("button").click()
    })
})