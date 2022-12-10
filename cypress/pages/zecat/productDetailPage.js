class productDetailPage {
    elements = {

        productLabel: ()=> cy.get('span.title-normal'),
        //productPrice: ()=> cy.get('span.title-normal'),
        
    }

    cachProductName() {
   
    }

    //cachProductPrice(price) {
   //     this.elements.productLabel().then(price)
   // }

}

module.exports = new productDetailPage();