
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

function getRandomNumber(max,min) {
            return Math.floor(Math.random() * (max - min) + min);
          }

describe("Obtener dastos de un producto activo", ()=>{
    
    beforeEach(()=>{
        cy.viewport(1280,800)
    })

    var productName
    var productPrice
    var categorys = ["2022 Mundial","2022 Novedades 1","Apparel","Apparel - Invierno","Apparel - Remeras",
    "Bolsos y Mochilas","Cocina","Coolers y luncheras","Drinkware","Escritorio",
    "Escritura","Gorros","Hogar y Tiempo Libre","Paraguas","Tazas","Tecnología"]

    it("Login verification",()=>{
        cy.visit("http://zecat-backoffice-stage.s3-website-us-east-1.amazonaws.com");
        //Log in on Backoffice
        loginPage.typeUsername('SFIORENTINO@MOBEATS.COM.AR');
        loginPage.typePassword('carapa1212');
        loginPage.selectButton();
        
    })

    it("Obtain product name",()=>{
        //Open products page
        boHome.selectProductOption();
        var indice = getRandomNumber(16,0);
        var category = categorys[indice]
        cy.wait(9000)
        productPage.selectCategorySelector()
        productPage.selectCategory(category)
        productPage.selectPublished();
        productPage.search();
        cy.wait(2000)
        //Open product detail page
        indice = getRandomNumber(8,0);
        productPage.selectDetail(indice)
        //Cach the product name
        productDetailPage.cachProductName($productName =>{
            cy.log($productName.text())
            productName = $productName.text()
        })
        cy.wait(2000)  
        cy.get('.item-1 > .column > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
        .then(sometext => {
            cy.log(sometext.val())
        });
    })
    
})