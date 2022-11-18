Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("Set de pruebas / Muestra Simple", ()=>{
    beforeEach(()=>{
        cy.viewport(1280,800)
    })
    it("Verificar cantidad de un producto", function(){
        //login
        cy.visit("http://zecat-backoffice-stage.s3-website-us-east-1.amazonaws.com/login", {failOnStatusCode: false});
        cy.get("[name=username]").type("vbustamante@mobeats.io", {delay : 50});
        cy.get("[name=password]").type("12345678", {delay : 50});
        cy.get("[type=submit]").click()
        cy.get(':nth-child(2) > .menu-link').click()
        cy.get('.m-right-1.el-input > .el-input__inner').type("Gorro Acrylic")
        cy.get('.m-bottom-4 > :nth-child(2)').click()
        cy.wait(18000)
        cy.get('.cell').contains("Gorro Acrylic")
        cy.get('.detail-link row center middle')
        

    })
})