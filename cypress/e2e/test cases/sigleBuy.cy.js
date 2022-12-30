//Permite invocar funciones POM
import zecatHome from '../../pages/zecat/zecatHome';
import boLoginPage from '../../pages/zecat/boLoginPage';
import boHome from '../../pages/zecat/boHome';
import productPage from '../../pages/zecat/productPage';
import productDetailPage from '../../pages/zecat/productDetailPage';

//Permite evitar los errores del tipo 'uncaught:exception'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const productNameFile = "cypress/fixtures/read-write/product_list.txt"
var boProductName
var boProductPrice

describe("Check the correct price", ()=>{

    beforeEach(()=>{
        cy.viewport(1280,800)
    })

    it("Login verification",()=>{
        cy.visit("http://zecat-backoffice-stage.s3-website-us-east-1.amazonaws.com");
        //Log in on Backoffice
        boLoginPage.login('SFIORENTINO@MOBEATS.COM.AR','carapa1212');
    })

    it("Obtain Product",()=>{
        boHome.selectProductOption();
        productPage.obtainProductName();
        productDetailPage.cachProductDetails()
    })

    it("Check the displayed and price the result page", ()=>{
        cy.visit("http://stage-front.wu6hmgnifa.us-east-1.elasticbeanstalk.com/")
        cy.readFile(productNameFile).then($product =>{
            boProductName = JSON.parse($product).productName
            boProductPrice = JSON.parse($product).productPrice2
            cy.log(boProductName)
            cy.log(boProductPrice)
            zecatHome.searchOption(boProductName)
            cy.get('.info-container > .text-small').first().contains(boProductName)
            cy.get('.hide-mobile > .product-name').first().then($price => {
                cy.log($price.text())
                expect($price.text().replace(".", "")).to.be.eq(`$${boProductPrice}`)
            })
        })
       
    })

    it("Check the displayed and price landing page", ()=>{
        cy.get(".product-container").first().click()
        cy.readFile(productNameFile).then($product =>{
            boProductName = JSON.parse($product).productName
            boProductPrice = JSON.parse($product).productPrice2
            cy.get('.item-1 > .title-normal').then($price => {
                cy.log($price.text())
                expect($price.text().replace(".", "")).to.be.eq(`$${boProductPrice}`)
            })
        })
    })
})  