class zecatHome {
    elements = {

        searchOption: ()=> cy.get('.search-input'),
        

    }

    searchOption(searchOption) {
        this.elements.searchOption().type(`${searchOption}{enter}`, {delay:200})
    }

}

module.exports = new zecatHome();