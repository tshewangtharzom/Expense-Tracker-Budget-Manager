const mongoose = require('mongoose');

// Exercise 2 & 3: Define Expense Schema Structure
const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Expense title is required'], // Exercise 5: Required field
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long'] // Exercise 7: Basic validation
  },
  amount: {
    type: Number,
    required: [true, 'Expense amount is required'],
    min: [0.01, 'Amount must be greater than zero'] // Exercise 7: Validation rule
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    default: 'Food', // Exercise 6: Default value
    enum: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other']
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now // Exercise 6: Default value
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Exercise 8: Create and export the Mongoose Model (maps to 'expenses' collection in MongoDB)
module.exports = mongoose.model('Expense', ExpenseSchema);
