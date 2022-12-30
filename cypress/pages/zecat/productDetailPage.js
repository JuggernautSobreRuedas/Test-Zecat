class productDetailPage {
    
    


    elements = {

        productLabel: ()=> cy.get('span.title-normal'),
        productCategories: ()=> cy.get(':nth-child(5) > :nth-child(1) > .el-form-item__content > .el-select > .el-select__tags > span > .el-tag > .el-select__tags-text'),
        productPrice: ()=> cy.get('.item-1 > .column > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
        
    }

    cachProductDetails() {

        var productPrice
        var productName
        var productCategory = []
        const productNameFile = "cypress/fixtures/read-write/product_list.txt"
        var productPrice2

        this.elements.productLabel().then($productName=>{
            productName = $productName.text()
            cy.log(productName) 
            cy.wait(2000)
            this.elements.productPrice().then($price=>{
                productPrice = $price.val()
                productPrice2 = productPrice.replace(".", "")
            })
            this.elements.productCategories().each($categories=>{
                let categories = $categories.text()
                productCategory.push(categories)
            }).then( () => {
                cy.writeFile(productNameFile,{productName ,productPrice,productPrice2, productCategory})
            })
        })
    }

}

module.exports = new productDetailPage();