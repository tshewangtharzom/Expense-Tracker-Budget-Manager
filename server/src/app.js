const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Expense Tracker & Budget Manager API running...' });
});

module.exports = app;