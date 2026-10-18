const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Exercise 6: Define REST API Endpoints
router.get('/', expenseController.getAllExpenses);
router.get('/:id', expenseController.getExpenseById); // Exercise 7: Route parameter
router.post('/', expenseController.createExpense);
router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
