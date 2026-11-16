class LoginPage {
  constructor(page) {
    this.page = page;

    // লোকেটর (Locator)
    this.loginLink = page.locator('.ico-login');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.locator('.login-button');
    this.errorMessage = page.locator('.validation-summary-errors');
    this.logoutLink = page.locator('.ico-logout');
  }

  // ওয়েবসাইটে গিয়ে লগইন পেজ ওপেন 
  async openLoginPage() {
    await this.page.goto('https://demowebshop.tricentis.com/');
    await this.loginLink.click();
  }

  // ইমেইল এবং পাসওয়ার্ড দিয়ে লগইন করার মেথড
  async loginUser(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };