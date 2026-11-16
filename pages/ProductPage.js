class ProductPage {
  constructor(page) {
    this.page = page;

    // ক্যাটাগরি ও সার্চ এলিমেন্টের লোকেটর
    this.booksCategoryLink = page.locator('.top-menu a[href="/books"]').first();
    this.searchInput = page.locator('#small-searchterms');
    this.searchButton = page.locator('.search-box-button');

    // প্রোডাক্ট লিস্ট এবং ডিটেইলস পেজের লোকেটর
    this.firstProductLink = page.locator('.product-item .product-title a').first();
    this.productTitle = page.locator('.product-name h1');
    this.quantityInput = page.locator('.qty-input');
    this.addToCartButton = page.locator('.add-to-cart-button');
    this.successNotification = page.locator('#bar-notification.success');
    this.cartQuantityText = page.locator('.cart-qty');
  }

  // টপ মেনু থেকে Books ক্যাটাগরিতে যাওয়ার মেথড (Q2-এর জন্য)
  async goToBooksCategory() {
    await this.booksCategoryLink.click();
  }

  // সার্চ বক্সে প্রোডাক্ট লিখে সার্চ করার মেথড (Q3-এর জন্য)
  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  // তালিকা থেকে প্রথম প্রোডাক্টের নাম সংগ্রহ করার মেথড
  async getFirstProductName() {
    const productName = await this.firstProductLink.innerText();
    return productName.trim();
  }

  // তালিকা থেকে প্রথম প্রোডাক্টটি ওপেন করার মেথড
  async openFirstProduct() {
    await this.firstProductLink.click();
  }

  // প্রোডাক্টের পরিমাণ (Quantity) দিয়ে কার্টে যোগ করার মেথড
  async addProductToCart(quantity) {
    await this.quantityInput.fill(String(quantity));
    await this.addToCartButton.click();

    // কার্টে প্রোডাক্ট যোগ হওয়ার কনফার্মেশন এবং কার্টের সংখ্যা আপডেট হওয়া পর্যন্ত অপেক্ষা
    await this.successNotification.waitFor({ state: 'visible' });
    await this.cartQuantityText.filter({ hasText: `(${quantity})` }).waitFor();
  }
}

module.exports = { ProductPage };
