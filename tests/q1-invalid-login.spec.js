const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../test-data/test-data.json');

test('Q1 - Invalid Login Test', async ({ page }) => {
  // LoginPage ক্লাসের অবজেক্ট তৈরি করা হলো
  const loginPage = new LoginPage(page);

  // ১. লগইন পেজ ওপেন করা
  await loginPage.openLoginPage();

  // ২. JSON ফাইল থেকে ভুল ইমেইল ও পাসওয়ার্ড নিয়ে লগইন চেষ্টা করা
  await loginPage.loginUser(testData.invalidLogin.email, testData.invalidLogin.password);

  // ৩. এরর মেসেজ দেখাচ্ছে কি না তা চেক করা
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText('Login was unsuccessful');

  // ৪. ইউজার লগইন হয়নি (Log in লিংক এখনো আছে) তা নিশ্চিত করা
  await expect(loginPage.loginLink).toBeVisible();

  // ৫. স্ক্রিনে এরর মেসেজটি দেখার জন্য ৩ সেকেন্ড ওয়েট করা
  await page.waitForTimeout(3000);
});
