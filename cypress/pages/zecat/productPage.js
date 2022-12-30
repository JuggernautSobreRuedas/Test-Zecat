

class productPage {
    elements = {

        radioPublished: ()=> cy.get('.el-radio-group > :nth-child(2)'),
        searchButton: ()=> cy.get('.m-bottom-4 > :nth-child(2)'),
        detailButton: (indice)=> cy.get(`.el-table__body-wrapper > .el-table__body > tbody > :nth-child(${indice}) > .el-table_1_column_6 > .cell > .detail-link`),
        categorySelector: ()=> cy.get(".el-select__input"),
        productCategory: (category)=> cy.get("li > span").contains(category)
    }

    selectPublished() {
        this.elements.radioPublished().click()
    }
    
    search(){
        this.elements.searchButton().click()
    }
    
    selectDetail(element) {
        this.elements.detailButton(element).click()
    }

    selectCategorySelector() {
        this.elements.categorySelector().click()
    }

    selectCategory(category) {
        this.elements.productCategory(category).click()
    }
    
    getRandomNumber(max,min) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    obtainProductName() {
        var categorys = ["2022 Novedades 1","Apparel","Apparel - Invierno","Apparel - Remeras",
                        "Bolsos y Mochilas","Coolers y luncheras","Drinkware","Escritorio",
                        "Escritura","Gorros","Hogar y Tiempo Libre","Paraguas","Tazas","Tecnología"]
        
        
        var indice = this.getRandomNumber(13,0);
        var category = categorys[indice]
        cy.wait(9000);
        this.selectCategorySelector();
        this.selectCategory(category);
        this.selectPublished();
        this.search();
        cy.wait(2000)
        indice = this.getRandomNumber(8,1);
        this.elements.detailButton(indice).click();    
    }

}

module.exports = new productPage();