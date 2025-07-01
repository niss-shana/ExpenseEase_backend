# ExpenseEase Backend

A complete backend API for the ExpenseEase expense tracking application built with Node.js, Express, and MongoDB.

## Features

- 🔐 **Authentication System**: JWT-based authentication for users and admin
- 👥 **User Management**: User registration, login, profile management
- 💰 **Expense Management**: Full CRUD operations for expenses
- 📊 **Analytics**: Expense statistics and reporting
- 🛡️ **Admin Panel**: Admin-only routes for user and expense management
- ✅ **Input Validation**: Comprehensive validation using express-validator
- 🔒 **Security**: Password hashing, JWT tokens, CORS protection

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator
- **Security**: helmet, cors

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or cloud)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ExpenseEase_backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `config.env.example` to `config.env`
   - Update the following variables:
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     JWT_EXPIRE=7d
     ADMIN_EMAIL=admin@expenseease.com
     ADMIN_PASSWORD=admin123456
     NODE_ENV=development
     ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | User login | Public |
| POST | `/api/auth/admin-login` | Admin login | Public |
| GET | `/api/auth/me` | Get current user | Private |
| POST | `/api/auth/logout` | Logout user | Private |

### User Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/user/profile` | Get user profile | Private |
| PUT | `/api/user/profile` | Update user profile | Private |
| PUT | `/api/user/change-password` | Change password | Private |
| DELETE | `/api/user/profile` | Delete account | Private |

### Expense Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/expenses` | Create expense | Private |
| GET | `/api/expenses` | Get all expenses | Private |
| GET | `/api/expenses/stats` | Get expense statistics | Private |
| GET | `/api/expenses/:id` | Get single expense | Private |
| PUT | `/api/expenses/:id` | Update expense | Private |
| DELETE | `/api/expenses/:id` | Delete expense | Private |

### Admin Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/api/admin/dashboard` | Get dashboard stats | Admin |
| GET | `/api/admin/users` | Get all users | Admin |
| GET | `/api/admin/users/:id` | Get user by ID | Admin |
| PUT | `/api/admin/users/:id` | Update user | Admin |
| DELETE | `/api/admin/users/:id` | Delete user | Admin |
| GET | `/api/admin/expenses` | Get all expenses | Admin |

## Database Models

### User Model
- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required, hashed)
- `avatar`: Object (optional)
- `role`: String (default: 'user')
- `monthlyBudget`: Number (default: 0)
- `currency`: String (default: 'USD')
- `isActive`: Boolean (default: true)
- `lastLogin`: Date

### Expense Model
- `user`: ObjectId (required, ref: User)
- `title`: String (required)
- `amount`: Number (required)
- `category`: String (required, enum)
- `description`: String (optional)
- `date`: Date (required)
- `paymentMethod`: String (enum)
- `location`: String (optional)
- `tags`: Array of Strings
- `isRecurring`: Boolean (default: false)
- `recurringType`: String (enum)
- `attachments`: Array of Objects
- `status`: String (enum)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API returns consistent error responses:

```json
{
  "status": "error",
  "message": "Error description"
}
```

## Validation

All input data is validated using express-validator with custom error messages.

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- CORS protection
- Helmet security headers
- Input validation and sanitization
- Rate limiting (can be added)

## Development

### Project Structure
```
ExpenseEase_backend/
├── controllers/     # Request handlers
├── middleware/      # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── config.env      # Environment variables
├── package.json    # Dependencies
├── server.js       # Entry point
└── README.md       # Documentation
```

### Available Scripts
- `npm start`: Start production server
- `npm run dev`: Start development server with nodemon
- `npm test`: Run tests (to be implemented)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 