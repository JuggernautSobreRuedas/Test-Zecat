//Permite invocar funciones POM
import loginPage from '../../pages/zecat/loginPage';
import boHome from '../../pages/zecat/boHome';
import productPage from '../../pages/zecat/productPage';
import productDetailPage from '../../pages/zecat/productDetailPage';

//Permite evitar los errores del tipo 'uncaught:exception'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Buscar producto", ()=>{

    var productName

    beforeEach(()=>{
        cy.viewport(1280,800)
    })

    it("Login verification",()=>{
        cy.visit("http://zecat-backoffice-stage.s3-website-us-east-1.amazonaws.com");
        //Log in on Backoffice
        loginPage.typeUsername('SFIORENTINO@MOBEATS.COM.AR');
        loginPage.typePassword('carapa1212');
        loginPage.selectButton();
        
    })

    it("Obtain Product",()=>{
        boHome.selectProductOption();
        productPage.obtainProductName()
        cy.get('span.title-normal').then($productName=>{
            productName = $productName.text()
        })
    })

    it("Search Product", ()=>{
        cy.log(productName)
    })
})