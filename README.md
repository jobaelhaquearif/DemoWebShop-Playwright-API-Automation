# Demo Web Shop UI & JSONPlaceholder API Automation

This project automates end-to-end UI test scenarios for **Demo Web Shop** using **Playwright (JavaScript)** with the **Page Object Model (POM)** design pattern, and automates REST API testing for **JSONPlaceholder** using **Postman** and **Newman CLI**.

## Tech Stack

- **UI Automation:** Playwright, JavaScript (Node.js)
- **Design Pattern:** Page Object Model (POM)
- **API Testing:** Postman, Newman CLI
- **Reporting:** Playwright HTML Reporter, Allure Report
- **Version Control:** Git & GitHub

## Project Structure

- `pages/` - Page Object classes (`LoginPage.js`, `RegisterPage.js`, `ProductPage.js`, `CartCheckoutPage.js`)
- `tests/` - Playwright test files (`q1-invalid-login.spec.js`, `q2-register-cart.spec.js`, `q3-search-checkout.spec.js`)
- `test-data/` - External JSON test data (`test-data.json`)
- `api-tests/` - Exported Postman collection (`Module 09 - JSONPlaceholder Users API.postman_collection.json`)
- `screenshots/` - Execution report screenshots
- `playwright.config.js` - Playwright configuration file

## Prerequisites & Installation

1. Make sure **Node.js (v18 or higher)** and **Git** are installed on your machine.

2. Clone the repository and open the project folder:

   ```bash
   git clone https://github.com/jobaelhaquearif/DemoWebShop-Playwright-API-Automation.git
   cd DemoWebShop-Playwright-API-Automation
   ```

3. Install project dependencies and Playwright Chromium browser:

   ```bash
   npm install
   npx playwright install chromium
   ```

4. Install Allure CLI (if not already installed globally):

   ```bash
   npm install -g allure-commandline
   ```

## Running UI Tests (Playwright)

### Run Individual Test Scenarios

- Q1 - Invalid Login:

  ```bash
  npx playwright test tests/q1-invalid-login.spec.js
  ```

- Q2 - Register and Add Product to Cart:

  ```bash
  npx playwright test tests/q2-register-cart.spec.js
  ```

- Q3 - Product Search and End-to-End Checkout:

  ```bash
  npx playwright test tests/q3-search-checkout.spec.js
  ```

### Run All UI Tests

Run all three UI test scenarios sequentially:

```bash
npx playwright test
```

> **Note:** Tests are configured to run in headed mode (`headless: false` in `playwright.config.js`), so the Chromium browser window will open visibly during execution.

## Generating Reports

### Playwright HTML Report

Open the latest Playwright HTML report:

```bash
npx playwright show-report
```

### Allure Report

Generate and open the Allure report:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## Running API Tests (Postman & Newman CLI)

The API automation includes:

- GET all users and validate the response status and user data.
- Dynamically save a user ID from the GET response.
- PUT updated user information using the saved ID.
- Validate the response status, returned ID, phone number, and updated name.
- Execute the Postman collection using Newman CLI.

### Run API Tests

Execute the exported Postman collection from the project root directory:

```bash
npx newman run "api-tests/Module 09 - JSONPlaceholder Users API.postman_collection.json"
```

## Test Execution Summary

The following results were obtained during the latest test execution:

| Test Suite | Result |
|---|---|
| Q1 - Invalid Login | Passed |
| Q2 - Register and Add to Cart | Passed |
| Q3 - Product Search and Checkout | Passed |
| API GET - All Users | Passed |
| API PUT - Update User | Passed |

**Execution Summary:**

- UI Tests: 3 Passed
- Allure Report: 100% Passed
- API Requests: 2 Executed
- API Assertions: 7 Passed
- API Failures: 0

## Test Execution Screenshots

The following screenshots provide evidence of test execution and reporting:

- [Allure Report Overview](screenshots/allure-report_overview.png)
- [Allure Report Suites](screenshots/allure-report_Suites.png)
- [Playwright HTML Report](screenshots/playwright_report.png)
- [Newman API Execution](screenshots/newman-report.png)
- [Newman API Overview](screenshots/newman-report_Overview.png)

## GitHub Repository

[DemoWebShop-Playwright-API-Automation](https://github.com/jobaelhaquearif/DemoWebShop-Playwright-API-Automation)

## About

UI and API test automation project using Playwright, Postman, and Newman.
