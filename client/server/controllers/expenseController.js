// Exercise 3 & 6: Expense Controller handling CRUD request logic

// Mock initial data array
let expenses = [
  { id: '1', title: 'Grocery Shopping', amount: 85.50, category: 'Food', date: '2026-10-15' },
  { id: '2', title: 'Monthly Wifi Bill', amount: 60.00, category: 'Utilities', date: '2026-10-18' }
];

// GET /api/expenses - Retrieve all expenses
exports.getAllExpenses = (req, res) => {
  res.status(200).json({
    success: true,
    count: expenses.length,
    data: expenses
  });
};

// GET /api/expenses/:id - Retrieve single expense using route parameter
exports.getExpenseById = (req, res) => {
  const { id } = req.params; // Exercise 7: Read route parameter
  const expense = expenses.find(e => e.id === id);

  if (!expense) {
    return res.status(404).json({
      success: false,
      message: `Expense with ID ${id} not found`
    });
  }

  res.status(200).json({
    success: true,
    data: expense
  });
};

// POST /api/expenses - Create new expense
exports.createExpense = (req, res) => {
  const { title, amount, category, date } = req.body;

  if (!title || !amount) {
    return res.status(400).json({
      success: false,
      message: 'Please provide title and amount for the expense'
    });
  }

  const newExpense = {
    id: (expenses.length + 1).toString(),
    title,
    amount: Number(amount),
    category: category || 'General',
    date: date || new Date().toISOString().split('T')[0]
  };

  expenses.push(newExpense);

  res.status(201).json({
    success: true,
    message: 'Expense record created successfully',
    data: newExpense
  });
};

// PUT /api/expenses/:id - Update existing expense
exports.updateExpense = (req, res) => {
  const { id } = req.params;
  const { title, amount, category, date } = req.body;

  let expense = expenses.find(e => e.id === id);

  if (!expense) {
    return res.status(404).json({
      success: false,
      message: `Cannot update. Expense with ID ${id} not found`
    });
  }

  expense.title = title || expense.title;
  expense.amount = amount ? Number(amount) : expense.amount;
  expense.category = category || expense.category;
  expense.date = date || expense.date;

  res.status(200).json({
    success: true,
    message: `Expense ${id} updated successfully`,
    data: expense
  });
};

// DELETE /api/expenses/:id - Delete expense
exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  const index = expenses.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Cannot delete. Expense with ID ${id} not found`
    });
  }

  expenses.splice(index, 1);

  res.status(200).json({
    success: true,
    message: `Expense with ID ${id} deleted successfully`
  });
};
