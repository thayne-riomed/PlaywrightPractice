class LoginPage {
    constructor(page) {
        this.page=page
        this.username = page.locator('xpath=//input[@id="userNameLogin"]')
        this.password =  page.locator('xpath=//input[@id="Password"]')
        this.loginButton = page.locator('xpath=//button[@data-testid="Login"]')
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }
}
module.exports = LoginPage