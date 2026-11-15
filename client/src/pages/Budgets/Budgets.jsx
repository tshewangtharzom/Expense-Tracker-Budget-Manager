
import { useEffect, useState } from "react";

import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget
} from "../../services/budgetService";

import "./Budgets.css";

const initialForm = {
  category: "",
  amount: "",
  month: new Date().toISOString().slice(0, 7),
  description: ""
};

function Budgets() {
  const [budgets, setBudgets] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Load budgets from MongoDB
  const loadBudgets = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getBudgets();
      setBudgets(result.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBudgets();
  }, []);

  // Handle form inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Create or update budget
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!form.category.trim() || !form.amount || !form.month) {
      setError("Please fill in all required fields.");
      return;
    }

    if (Number(form.amount) <= 0) {
      setError("Budget amount must be greater than zero.");
      return;
    }

    const budgetData = {
      ...form,
      category: form.category.trim(),
      amount: Number(form.amount)
    };

    try {
      setSaving(true);

      if (editingId) {
        await updateBudget(editingId, budgetData);
        setMessage("Budget updated successfully!");
      } else {
        await createBudget(budgetData);
        setMessage("Budget created successfully!");
      }

      setForm(initialForm);
      setEditingId(null);

      await loadBudgets();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  // Edit budget
  const handleEdit = (budget) => {
    setForm({
      category: budget.category,
      amount: String(budget.amount),
      month: budget.month,
      description: budget.description || ""
    });

    setEditingId(budget._id);
    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Delete budget
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this budget?"
    );

    if (!confirmed) return;

    try {
      setError("");
      setMessage("");

      await deleteBudget(id);

      setMessage("Budget deleted successfully!");
      await loadBudgets();
    } catch (err) {
      setError(err.message);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setForm(initialForm);
    setEditingId(null);
    setError("");
    setMessage("");
  };

  const totalBudget = budgets.reduce(
    (total, budget) => total + budget.amount,
    0
  );

  return (
    <div className="budget-page">

      <div className="budget-header">
        <div>
          <h1>Budget Management</h1>
          <p>Create and manage your monthly budgets.</p>
        </div>
      </div>

      <div className="budget-summary">
        <div className="budget-card">
          <h3>Total Budgets</h3>
          <h2>{budgets.length}</h2>
        </div>

        <div className="budget-card">
          <h3>Total Budget Amount</h3>
          <h2>₹{totalBudget.toLocaleString("en-IN")}</h2>
        </div>
      </div>

      <div className="budget-form-container">
        <h2>
          {editingId ? "Edit Budget" : "Add New Budget"}
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="budget-form-grid">

            <div>
              <label>Category *</label>
              <input
                type="text"
                name="category"
                placeholder="Example: Food"
                value={form.category}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Budget Amount (₹) *</label>
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

            <div>
              <label>Month *</label>
              <input
                type="month"
                name="month"
                value={form.month}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Enter description"
                value={form.description}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="budget-form-actions">
            <button type="submit" disabled={saving}>
              {saving
                ? "Saving..."
                : editingId
                  ? "Update Budget"
                  : "Save Budget"}
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

        {message && (
          <p className="budget-success">{message}</p>
        )}

        {error && (
          <p className="budget-error">{error}</p>
        )}
      </div>

      <div className="budget-table-container">
        <h2>Monthly Budgets</h2>

        {loading ? (
          <p>Loading budgets...</p>
        ) : budgets.length === 0 ? (
          <p>No budgets found. Add your first budget.</p>
        ) : (

          <div className="budget-table-wrapper">
            <table className="budget-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Month</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {budgets.map((budget) => (
                  <tr key={budget._id}>
                    <td>{budget.category}</td>

                    <td>
                      ₹{budget.amount.toLocaleString("en-IN")}
                    </td>

                    <td>{budget.month}</td>

                    <td>
                      {budget.description || "-"}
                    </td>

                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(budget)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(budget._id)}
                      >
                        Delete
                      </button>
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

export default Budgets;
