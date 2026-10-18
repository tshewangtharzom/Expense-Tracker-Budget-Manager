const express = require('express');
const cors = require('cors');

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());

// Import test route
const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes);

// Default Root Route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Expense Tracker API - Sprint 11 Server Running'
  });
});

module.exports = app;
