const express = require('express');
const cors = require('cors');

// Import custom middleware and routes
const loggerMiddleware = require('./middleware/loggerMiddleware');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

// Standard middleware configuration
app.use(cors());
app.use(express.json());

// Exercise 8: Apply Request Logging Middleware globally
app.use(loggerMiddleware);

// Exercise 5: Register Expense API Routes
app.use('/api/expenses', expenseRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Expense Tracker API - Sprint 12 Express Routing & Middleware Active'
  });
});

module.exports = app;
