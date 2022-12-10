class productDetailPage {
    elements = {

        productLabel: ()=> cy.get('span.title-normal'),
        //productPrice: ()=> cy.get('span.title-normal'),
        
    }

    cachProductName(name) {
        this.elements.productLabel().then(name)
    }

    //cachProductPrice(price) {
   //     this.elements.productLabel().then(price)
   // }

}

module.exports = new productDetailPage();