const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartCheckoutPage } = require('../pages/CartCheckoutPage');
const testData = require('../test-data/test-data.json');

test('Q3 - Product Search and End-to-End Checkout', async ({ page }) => {
  // পেজ অবজেক্টগুলো তৈরি করা হলো
  const registerPage = new RegisterPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartCheckoutPage(page);

  // ১. ওয়েবসাইটে জন্য নতুন ইউজার রেজিস্টার করে লগইন অবস্থায় যাওয়া
  const uniqueEmail = `arif_order_${Date.now()}@gmail.com`;
  await registerPage.openRegisterPage();
  await registerPage.registerNewUser(
    testData.registration.firstName,
    testData.registration.lastName,
    uniqueEmail,
    testData.registration.password
  );

  // ২. test-data.json থেকে প্রোডাক্ট সার্চ করা
  const searchKeyword = testData.q3SearchTerm;
  const orderQuantity = testData.q3Quantity;
  await productPage.searchProduct(searchKeyword);

  // ৩. সার্চ রেজাল্টে প্রোডাক্টটি দেখা যাচ্ছে কি না তা চেক করা
  const foundProductName = await productPage.getFirstProductName();
  expect(foundProductName).toContain('Laptop');

  // ৪. প্রোডাক্ট ওপেন করে test-data.json-এর কোয়ান্টিটি দিয়ে কার্টে যোগ করা
  await productPage.openFirstProduct();
  await productPage.addProductToCart(orderQuantity);

  // ৫. শপিং কার্টে গিয়ে প্রোডাক্ট ও কোয়ান্টিটি চেক করা এবং Checkout বাটনে ক্লিক করা
  await cartPage.openCart();
  await expect(cartPage.cartProductName).toContainText(foundProductName);
  await expect(cartPage.cartQuantityInput).toHaveValue(String(orderQuantity));
  await cartPage.proceedToCheckout();

  // ৬. test-data.json থেকে বিলিং অ্যাড্রেস পূরণ করা এবং অর্ডার কনফার্ম করা
  await cartPage.fillBillingAddress(
    testData.billingAddress.country,
    testData.billingAddress.city,
    testData.billingAddress.address,
    testData.billingAddress.zipCode,
    testData.billingAddress.phone
  );
  await cartPage.completeCheckoutSteps();

  // ৭. অর্ডার সফল হয়েছে কি না তা চেক করা এবং অর্ডার ডিটেইলস পেজ ওপেন করা
  await expect(cartPage.orderSuccessMessage).toContainText('Your order has been successfully processed!');
  await cartPage.openOrderDetails();
  await expect(cartPage.orderInfoPageTitle).toContainText('Order information');
});
