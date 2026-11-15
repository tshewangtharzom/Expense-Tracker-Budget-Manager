
import { useEffect, useState } from "react";

import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense
} from "../../services/expenseService";

import "../Expenses/Expense.css";

const initialForm = {
  title: "",
  amount: "",
  type: "expense",
  category: "",
  description: "",
  date: new Date().toISOString().split("T")[0]
};

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Load expenses from MongoDB through the API
  const loadExpenses = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getExpenses();
      setExpenses(result.data || []);
    } catch (err) {
      setError(err.message || "Unable to load transactions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  // Create or update transaction
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !form.title.trim() ||
      !form.category.trim() ||
      !form.amount ||
      Number(form.amount) <= 0
    ) {
      setError("Please enter a valid title, amount and category.");
      return;
    }

    const expenseData = {
      ...form,
      amount: Number(form.amount)
    };

    try {
      setSaving(true);

      if (editingId) {
        await updateExpense(editingId, expenseData);
        setMessage("Transaction updated successfully!");
      } else {
        await createExpense(expenseData);
        setMessage("Transaction added successfully!");
      }

      setForm(initialForm);
      setEditingId(null);

      await loadExpenses();
    } catch (err) {
      setError(err.message || "Unable to save transaction.");
    } finally {
      setSaving(false);
    }
  };

  // Load selected transaction into the form
  const handleEdit = (expense) => {
    setEditingId(expense._id);

    setForm({
      title: expense.title || "",
      amount: String(expense.amount ?? ""),
      type: expense.type || "expense",
      category: expense.category || "",
      description: expense.description || "",
      date: expense.date
        ? new Date(expense.date).toISOString().split("T")[0]
        : initialForm.date
    });

    setMessage("");
    setError("");

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete transaction
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    setMessage("");
    setError("");

    try {
      await deleteExpense(id);
      setMessage("Transaction deleted successfully!");
      await loadExpenses();
    } catch (err) {
      setError(err.message || "Unable to delete transaction.");
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
    setForm(initialForm);
    setError("");
    setMessage("");
  };

  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  return (
    <div className="expense-page">
      <div className="expense-header">
        <div>
          <h1>Expense Tracker</h1>
          <p>Manage your income and expenses.</p>
        </div>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <span>Total Income</span>
          <h2>₹{totalIncome.toFixed(2)}</h2>
        </div>

        <div className="summary-card">
          <span>Total Expenses</span>
          <h2>₹{totalExpense.toFixed(2)}</h2>
        </div>

        <div className="summary-card">
          <span>Balance</span>
          <h2>₹{(totalIncome - totalExpense).toFixed(2)}</h2>
        </div>
      </div>

      <div className="expense-form-card">
        <h2>{editingId ? "Edit Transaction" : "Add Transaction"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Amount (₹)</label>
              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                min="0.01"
                step="0.01"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                placeholder="Food, Travel, Salary..."
                value={form.category}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Optional description"
                value={form.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" disabled={saving}>
              {saving
                ? "Please wait..."
                : editingId
                ? "Update Transaction"
                : "Add Transaction"}
            </button>

            {editingId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="expense-list-card">
        <h2>Transaction History</h2>

        {loading ? (
          <p>Loading transactions...</p>
        ) : expenses.length === 0 ? (
          <p>No transactions found. Add your first transaction.</p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense._id}>
                    <td>{expense.title}</td>
                    <td>₹{Number(expense.amount).toFixed(2)}</td>
                    <td>
                      <span className={`type-${expense.type}`}>
                        {expense.type}
                      </span>
                    </td>
                    <td>{expense.category}</td>
                    <td>
                      {expense.date
                        ? new Date(expense.date).toLocaleDateString()
                        : "-"}
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(expense)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(expense._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Expenses;
