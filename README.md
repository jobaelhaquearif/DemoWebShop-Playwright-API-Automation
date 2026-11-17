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

- Run individual test scenarios:
  ```bash
  npx playwright test q1-invalid-login
  npx playwright test q2-register-cart
  npx playwright test q3-search-checkout
  ```
- Run all UI tests sequentially:
  ```bash
  npx playwright test
  ```
> **Note:** Tests are configured to run in headed mode (`headless: false` in `playwright.config.js`), so the Chromium browser window will open visibly during execution.

## Generating Reports

- Open Playwright HTML Report:
  ```bash
  npx playwright show-report
  ```
- Generate and open Allure Report:
  ```bash
  npx allure generate allure-results --clean -o allure-report
  npx allure open allure-report
  ```

## Running API Tests (Newman CLI)

- Run the exported Postman collection from the command line:
  ```bash
  npx newman run "api-tests/Module 09 - JSONPlaceholder Users API.postman_collection.json"
  ```

## Test Execution Screenshots

- [Allure Report Overview](screenshots/allure-report_overview.png)
- [Allure Report Suites](screenshots/allure-report_Suites.png)
- [Playwright HTML Report](screenshots/playwright_report.png)
- [Newman API Execution](screenshots/newman-report.png)
- [Newman API Overview](screenshots/newman-report_Overview.png)
