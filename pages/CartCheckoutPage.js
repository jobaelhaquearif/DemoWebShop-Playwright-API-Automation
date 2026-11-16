class CartCheckoutPage {
  constructor(page) {
    this.page = page;

    // শপিং কার্ট এলিমেন্টের লোকেটর
    this.cartLink = page.locator('.ico-cart').first();
    this.cartProductName = page.locator('.cart-item-row .product-name').first();
    this.cartQuantityInput = page.locator('.cart-item-row input.qty-input').first();
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');

    // বিলিং অ্যাড্রেস ফর্মের লোকেটর
    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityInput = page.locator('#BillingNewAddress_City');
    this.addressInput = page.locator('#BillingNewAddress_Address1');
    this.zipCodeInput = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phoneInput = page.locator('#BillingNewAddress_PhoneNumber');

    // চেকআউট ধাপগুলোর Continue এবং Confirm বাটন
    this.billingContinueButton = page.locator('#billing-buttons-container .new-address-next-step-button');
    this.shippingAddressContinueButton = page.locator('#shipping-buttons-container .new-address-next-step-button');
    this.shippingMethodContinueButton = page.locator('#shipping-method-buttons-container .shipping-method-next-step-button');
    this.paymentMethodContinueButton = page.locator('#payment-method-buttons-container .payment-method-next-step-button');
    this.paymentInfoContinueButton = page.locator('#payment-info-buttons-container .payment-info-next-step-button');
    this.confirmOrderButton = page.locator('#confirm-order-buttons-container .confirm-order-next-step-button');

    // অর্ডার কনফার্মেশন এবং অর্ডার ডিটেইলস লোকেটর
    this.orderSuccessMessage = page.locator('.order-completed .title');
    this.orderDetailsLink = page.locator('.order-completed a');
    this.orderInfoPageTitle = page.locator('.page-title h1');
  }

  // শপিং কার্ট পেজ ওপেন করার মেথড
  async openCart() {
    await this.cartLink.click();
  }

  // শর্তাবলী চেক করে চেকআউট শুরু করার মেথড
  async proceedToCheckout() {
    await this.termsCheckbox.check();
    await this.checkoutButton.click();
  }

  // বিলিং অ্যাড্রেস পূরণ করার মেথড
  async fillBillingAddress(country, city, address, zipCode, phone) {
    await this.countryDropdown.selectOption({ label: country });
    await this.cityInput.fill(city);
    await this.addressInput.fill(address);
    await this.zipCodeInput.fill(zipCode);
    await this.phoneInput.fill(phone);
    await this.billingContinueButton.click();
  }

  // চেকআউটের বাকি ধাপগুলো সম্পন্ন করে অর্ডার কনফার্ম করার মেথড
  async completeCheckoutSteps() {
    await this.shippingAddressContinueButton.click();
    await this.shippingMethodContinueButton.click();
    await this.paymentMethodContinueButton.click();
    await this.paymentInfoContinueButton.click();
    await this.confirmOrderButton.click();
  }

  // অর্ডার ডিটেইলস পেজ ওপেন করার মেথড
  async openOrderDetails() {
    await this.orderDetailsLink.click();
  }
}

module.exports = { CartCheckoutPage };
