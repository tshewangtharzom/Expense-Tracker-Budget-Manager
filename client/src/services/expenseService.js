
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const EXPENSE_URL = `${API_URL}/expenses`;

// Common function to handle API responses
const handleResponse = async (response) => {
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

// Get all expenses
export const getExpenses = async () => {
  const response = await fetch(EXPENSE_URL);
  return handleResponse(response);
};

// Create expense
export const createExpense = async (expenseData) => {
  const response = await fetch(EXPENSE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expenseData)
  });

  return handleResponse(response);
};

// Update expense
export const updateExpense = async (id, expenseData) => {
  const response = await fetch(`${EXPENSE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expenseData)
  });

  return handleResponse(response);
};

// Delete expense
export const deleteExpense = async (id) => {
  const response = await fetch(`${EXPENSE_URL}/${id}`, {
    method: "DELETE"
  });

  return handleResponse(response);
};
