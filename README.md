# Online Food Ordering Platform

A collaborative backend project for an online food ordering platform that connects customers with restaurants and supports food ordering and payment operations.

## Overview

The application provides backend services for user management, authentication, restaurant operations, menu management, cart management, order processing, and payments.

## Key Features

- User registration and login
- JWT-based authentication
- Role-based access control for customers, restaurant owners, and admins
- Customer profile management
- Password change functionality
- Restaurant and menu operations
- Shopping cart management
- Order processing
- Paystack payment integration
- Input validation and error handling

## My Contributions

My contributions focused primarily on authentication, authorization, and customer account management.

- Built the User model with bcrypt password hashing.
- Implemented user registration and login using JWT authentication.
- Developed token verification and role-based middleware for customers, restaurant owners, and admins.
- Implemented customer profile and password-change endpoints.
- Added input validation across authentication routes.
- Used Git branches and pull requests to manage contributions.
- Tested API endpoints and authentication flows using Postman.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt
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

4. Create a `.env` file using `.env.example` and configure the required environment variables.

5. Start the development server:

   ```bash
   npm run dev
   ```

   To start the production server:

   ```bash
   npm start
   ```

## Environment Configuration

The application requires environment variables for database connectivity, authentication, and Cloudinary configuration.

Paystack credentials are required for payment processing.

Refer to `.env.example` for the required variable names and configuration details.

**Security:** Do not commit your `.env` file or expose secret keys in frontend code.

## Testing

Run the automated test suite:

```bash
npm test
```

API endpoints were also tested using Postman.
