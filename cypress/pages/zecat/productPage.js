class productPage {
    elements = {

        radioPublished: ()=> cy.get('.el-radio-group > :nth-child(2)'),
        searchButton: ()=> cy.get('.m-bottom-4 > :nth-child(2)'),
        detailButton: (element)=> cy.get(`.el-table__body-wrapper > .el-table__body > tbody > :nth-child(${element}) > .el-table_1_column_6 > .cell > .detail-link`),
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

}

module.exports = new productPage();