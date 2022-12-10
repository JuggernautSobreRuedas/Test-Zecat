class loginPage {
    
    elements = {
        usernameInput: ()=> cy.get('[label="Ingrese su usuario"] > .input-custom'),
        passwordInput: ()=> cy.get('[label="Ingrese su contraseña"] > .input-custom'),
        loginButton: ()=> cy.get(".el-button"),
        

    }
    
    typeUsername(user) {
        this.elements.usernameInput().type(user)
    }

    typePassword(pass) {
        this.elements.passwordInput().type(pass)
    }

    selectButton() {
        this.elements.loginButton().click()
    }
    
}

module.exports = new loginPage();