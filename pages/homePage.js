import BasePage from './basePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'http://localhost:8081';
        this.homeButton = element(by.buttonText('Home'));
        this.loginButton = element(by.buttonText('Login'));
        this.registerButton = element(by.buttonText('Register'));
    }

    /**
     * Login test button
     */
    loginButton() {
        this.homeButton.locator().value().click()
    }

   
}
export default new HomePage();