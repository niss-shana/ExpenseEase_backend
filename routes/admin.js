const express = require('express');
const { body } = require('express-validator');
const adminController = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

// Validation middleware
const updateUserValidation = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('role')
    .optional()
    .isIn(['user', 'admin'])
    .withMessage('Invalid role'),
  body('monthlyBudget')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Monthly budget must be a positive number'),
  body('currency')
    .optional()
    .isIn(['USD', 'EUR', 'GBP', 'INR', 'CAD', 'AUD'])
    .withMessage('Invalid currency'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean')
];

// Apply authentication and admin middleware to all routes
router.use(protect);
router.use(admin);

// Dashboard routes
router.get('/dashboard', adminController.getDashboardStats);

// User management routes
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.put('/users/:id', updateUserValidation, adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Expense management routes
router.get('/expenses', adminController.getAllExpenses);

module.exports = router; 