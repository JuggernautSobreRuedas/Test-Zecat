class boLoginPage {
    
    elements = {
        usernameInput: ()=> cy.get('[label="Ingrese su usuario"] > .input-custom'),
        passwordInput: ()=> cy.get('[label="Ingrese su contraseña"] > .input-custom'),
        loginButton: ()=> cy.get(".el-button"),
        

    }
    
    login(user,pass) {
        this.elements.usernameInput().type(user)
        this.elements.passwordInput().type(pass)
        this.elements.loginButton().click()
    }
    
}

module.exports = new boLoginPage();