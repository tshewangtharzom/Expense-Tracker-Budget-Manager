const express = require('express');
const router = express.Router();

// Exercise 6: Test endpoint
router.get('/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Sprint 11 Backend API is operational!',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
