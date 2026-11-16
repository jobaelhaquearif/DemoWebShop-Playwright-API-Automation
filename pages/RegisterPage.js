class RegisterPage {
  constructor(page) {
    this.page = page;

    // রেজিস্ট্রেশন পেজের বিভিন্ন এলিমেন্টের লোকেটর
    this.registerLink = page.locator('.ico-register');
    this.genderMale = page.locator('#gender-male');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');

    // রেজিস্ট্রেশন সফল হওয়ার পরের লোকেটরগুলো
    this.successMessage = page.locator('.result');
    this.logoutLink = page.locator('.ico-logout');
  }

  // ওয়েবসাইটে গিয়ে রেজিস্টার পেজ ওপেন করার মেথড
  async openRegisterPage() {
    await this.page.goto('https://demowebshop.tricentis.com/');
    await this.registerLink.click();
  }

  // নতুন ইউজার রেজিস্ট্রেশন ফর্ম পূরণ ও সাবমিট করার মেথড
  async registerNewUser(firstName, lastName, email, password) {
    await this.genderMale.check();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.registerButton.click();
  }
}

module.exports = { RegisterPage };
