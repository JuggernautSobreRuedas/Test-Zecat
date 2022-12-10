class boHome {
    elements = {

        productOption: ()=> cy.get(':nth-child(2) > .menu-link'),
        

    }

    selectProductOption() {
        this.elements.productOption().click()
    }

}

module.exports = new boHome();