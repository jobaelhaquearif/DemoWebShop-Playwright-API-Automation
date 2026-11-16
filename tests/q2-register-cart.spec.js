const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartCheckoutPage } = require('../pages/CartCheckoutPage');
const testData = require('../test-data/test-data.json');

test('Q2 - Register and Add Product to Cart', async ({ page }) => {
  // পেজ অবজেক্টগুলো আলাদা আলাদা লাইনে তৈরি করা হলো
  const registerPage = new RegisterPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartCheckoutPage(page);

  // প্রতিবার নতুন ইমেইল তৈরির জন্য Date.now() ব্যবহার করা হলো
  const uniqueEmail = `arif_${Date.now()}@gmail.com`;
  const password = testData.registration.password;

  // ১. রেজিস্ট্রেশন পেজ ওপেন করে নতুন ইউজার রেজিস্টার করা
  await registerPage.openRegisterPage();
  await registerPage.registerNewUser(
    testData.registration.firstName,
    testData.registration.lastName,
    uniqueEmail,
    password
  );

  // ২. রেজিস্ট্রেশন সফল হয়েছে এবং ইউজার লগইন হয়েছে কি না তা চেক করা
  await expect(registerPage.successMessage).toContainText('Your registration completed');
  await expect(registerPage.logoutLink).toBeVisible();

  // ৩. Books ক্যাটাগরিতে গিয়ে প্রথম প্রোডাক্টটি সিলেক্ট করা
  await productPage.goToBooksCategory();
  const selectedProductName = await productPage.getFirstProductName();
  await productPage.openFirstProduct();

  // ৪. প্রোডাক্টটি কার্টে যোগ করা (Quantity = 1)
  await productPage.addProductToCart(1);

  // ৫. শপিং কার্ট ওপেন করে প্রোডাক্টের নাম ও কোয়ান্টিটি চেক করা
  await cartPage.openCart();
  await expect(cartPage.cartProductName).toContainText(selectedProductName);
  await expect(cartPage.cartQuantityInput).toHaveValue('1');
});
