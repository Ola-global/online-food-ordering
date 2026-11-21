# Online Food Ordering Platform

An online food ordering platform designed to connect customers with restaurants and simplify the process of browsing food, placing orders, and making payments.

## Overview

This project is a collaborative software development project focused on building the backend infrastructure for an online food ordering platform.

It provides APIs for handling user authentication, restaurant operations, food menus, shopping carts, orders, and payment processing.

## Features

- User registration and authentication
- Role-based access control
- Customer profile management
- Restaurant and menu management
- Shopping cart management
- Food order processing
- Payment integration with Paystack
- Request validation and error handling

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT
- Cloudinary
- Paystack

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ola-global/online-food-ordering.git
   ```

2. Navigate to the project directory:

   ```bash
   cd online-food-ordering
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create your environment file using `.env.example` and configure the required variables.

5. Start the development server:

   ```bash
   npm run dev
   ```

   For production:

   ```bash
   npm start
   ```

## Environment Configuration

The application requires environment variables for database connectivity, authentication, and Cloudinary configuration.

Paystack credentials are also required for payment processing.

Refer to `.env.example` for the required configuration.

**Note:** Keep all secret keys and database credentials private. Never expose them in frontend code or commit your `.env` file.

## Testing

Run the automated test suite:

```bash
npm test
```
