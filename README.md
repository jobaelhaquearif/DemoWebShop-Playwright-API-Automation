# Demo Web Shop UI & JSONPlaceholder API Automation

This repository contains automated UI tests for **Demo Web Shop** using **Playwright (JavaScript)** with the **Page Object Model (POM)** pattern, and API tests for **JSONPlaceholder** using **Postman & Newman CLI**.

## Project Structure

- `pages/` - Page Object classes (`LoginPage.js`, `RegisterPage.js`, `ProductPage.js`, `CartCheckoutPage.js`)
- `tests/` - Playwright test scripts (`q1-invalid-login.spec.js`, `q2-register-cart.spec.js`, `q3-search-checkout.spec.js`)
- `test-data/` - External JSON test data (`test-data.json`)
- `api-tests/` - Exported Postman collection (`Module09-JSONPlaceholder.postman_collection.json`)
- `playwright.config.js` - Playwright configuration with HTML and Allure reporters

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com
   cd Project_9th_Module_DemoWebShop
   ```
2. Install dependencies and browser:
   ```bash
   npm install
   npx playwright install chromium
   ```

## Running UI Tests (Playwright)

- Run tests individually:
  ```bash
  npx playwright test q1-invalid-login
  npx playwright test q2-register-cart
  npx playwright test q3-search-checkout
  ```
- Run all UI tests sequentially:
  ```bash
  npx playwright test
  ```
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

- Run the exported Postman collection via Newman:
  ```bash
  npx newman run api-tests/Module09-JSONPlaceholder.postman_collection.json
  ```
