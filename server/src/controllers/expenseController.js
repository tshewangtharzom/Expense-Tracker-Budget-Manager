
export const getExpenses = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All expenses retrieved successfully",
    expenses: [
      {
        id: 1,
        title: "Food",
        amount: 500,
        category: "Food"
      },
      {
        id: 2,
        title: "Transport",
        amount: 200,
        category: "Travel"
      }
    ]
  });
};

export const getExpenseById = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    message: "Expense retrieved successfully",
    expenseId: id
  });
};

export const createExpense = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Expense created successfully",
    expense: req.body
  });
};

export const updateExpense = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    message: "Expense updated successfully",
    expenseId: id,
    updatedData: req.body
  });
};

export const deleteExpense = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    message: "Expense deleted successfully",
    expenseId: id
  });
};
