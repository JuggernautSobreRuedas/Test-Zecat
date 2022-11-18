Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe("Set de pruebas / Muestra Simple", ()=>{
    var priceBack
    var priceEcommerce$
    var product1 = "Gorro Acrylic"
    var product2 = "Bol Touch Screen"
    var product3 = "Remera Quina"
    beforeEach(()=>{
        cy.viewport(1280,800)
    })
    //Producto1
    it("Tomar verificar del producto en BO", function(){
        cy.request("https://d2rb7slziwouc6.cloudfront.net/generic_product/3750")
        .its("body")
        .its("generic_product")
        .its("price")
        .then($price =>{
            priceBack = $price
            cy.log(priceBack)
        })
    })
    it("Validar que el precio en el ecommerce sea el correcto",()=>{
        cy.visit("http://stage-front.wu6hmgnifa.us-east-1.elasticbeanstalk.com")
        cy.get(".search-input").type(product1, {delay:200})
        cy.get(".search-input").type('{enter}')
        cy.get('.hide-mobile > .product-name').then($priceEcommerce =>{
            priceEcommerce$ = $priceEcommerce.text()
            cy.log(priceEcommerce$)
            expect(priceEcommerce$.slice(1).replace(".", "")).to.be.eq(String(priceBack).replace(".", "")) 
            
        })
    })
    //Producto2
    it("Tomar verificar del producto en BO", function(){
        cy.request("https://d2rb7slziwouc6.cloudfront.net/generic_product/3581")
        .its("body")
        .its("generic_product")
        .its("price")
        .then($price =>{
            priceBack = $price
            cy.log(priceBack)
        })
    })
    it("Validar que el precio en el ecommerce sea el correcto",()=>{
        cy.visit("http://stage-front.wu6hmgnifa.us-east-1.elasticbeanstalk.com")
        cy.get(".search-input").type(product2, {delay:200})
        cy.get(".search-input").type('{enter}')
        cy.get('.hide-mobile > .product-name').first().then($priceEcommerce =>{
            priceEcommerce$ = $priceEcommerce.text()
            cy.log(priceEcommerce$)
            expect(priceEcommerce$.slice(1).replace(".", "")).to.be.eq(String(priceBack).replace(".", "")) 
            
        })
    })
    //Producto3
    it("Tomar verificar del producto en BO", function(){
        cy.request("https://d2rb7slziwouc6.cloudfront.net/generic_product/4762")
        .its("body")
        .its("generic_product")
        .its("price")
        .then($price =>{
            priceBack = $price
            cy.log(priceBack)
        })
    })
    it("Validar que el precio en el ecommerce sea el correcto",()=>{
        cy.visit("http://stage-front.wu6hmgnifa.us-east-1.elasticbeanstalk.com")
        cy.get(".search-input").type(product3, {delay:200})
        cy.get(".search-input").type('{enter}')
        cy.get('.hide-mobile > .product-name').then($priceEcommerce =>{
            priceEcommerce$ = $priceEcommerce.text()
            cy.log(priceEcommerce$)
            expect(priceEcommerce$.slice(1).replace(".", "")).to.be.eq(String(priceBack).replace(".", "")) 
            
        })
    })
})