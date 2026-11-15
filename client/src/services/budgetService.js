
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const BUDGET_URL = `${API_URL}/budgets`;

const handleResponse = async (response) => {
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

// Get all budgets
export const getBudgets = async () => {
  const response = await fetch(BUDGET_URL);
  return handleResponse(response);
};

// Get budget by ID
export const getBudgetById = async (id) => {
  const response = await fetch(`${BUDGET_URL}/${id}`);
  return handleResponse(response);
};

// Create budget
export const createBudget = async (budgetData) => {
  const response = await fetch(BUDGET_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(budgetData)
  });

  return handleResponse(response);
};

// Update budget
export const updateBudget = async (id, budgetData) => {
  const response = await fetch(`${BUDGET_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(budgetData)
  });

  return handleResponse(response);
};

// Delete budget
export const deleteBudget = async (id) => {
  const response = await fetch(`${BUDGET_URL}/${id}`, {
    method: "DELETE"
  });

  return handleResponse(response);
};
