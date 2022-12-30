class zecatLoginPage {
    
    elements = {
        enterButton: ()=> cy.get('.end > .login'),
        zecatUsernameInput: ()=> cy.get(':nth-child(1) > .input-custom'),
        zecatPasswordInput: ()=> cy.get(':nth-child(2) > .input-custom'),
        zecatLoginButton: ()=> cy.get('.btn-login')

    }
    
    zecatLogin(user,pass) {

        this.elements.enterButton().click()
        this.elements.zecatUsernameInput().type(user)
        this.elements.zecatPasswordInput().type(pass)
        this.elements.zecatLoginButton().click()
    }
    
}

module.exports = new zecatLoginPage();