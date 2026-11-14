
import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function AddExpense() {
  const initialForm = {
    title: "",
    amount: "",
    category: "",
    date: "",
    description: ""
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submittedExpense, setSubmittedExpense] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccessMessage("");
  }

  // Validate form fields
  function validateForm() {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Expense title is required.";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Title must contain at least 3 characters.";
    }

    if (!formData.amount) {
      newErrors.amount = "Amount is required.";
    } else if (
      !Number.isFinite(Number(formData.amount)) ||
      Number(formData.amount) <= 0
    ) {
      newErrors.amount = "Enter a valid amount greater than zero.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (!formData.date) {
      newErrors.date = "Please select an expense date.";
    } else if (formData.date > new Date().toLocaleDateString("en-CA")) {
      newErrors.date = "Expense date cannot be in the future.";
    }

    return newErrors;
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      setSubmittedExpense(null);
      return;
    }

    const expense = {
      ...formData,
      amount: Number(formData.amount)
    };

    console.log("Submitted Expense:", expense);

    setSubmittedExpense(expense);
    setSuccessMessage("Expense added successfully!");
    setFormData(initialForm);
    setErrors({});
  }

  // Reset form
  function handleReset() {
    setFormData(initialForm);
    setErrors({});
    setSuccessMessage("");
    setSubmittedExpense(null);
  }

  return (
    <div className="page">
      <PageTitle
        title="Add Expense"
        subtitle="Enter and manage your daily expenses"
      />

      <Card title="Expense Details">
        <form className="expense-form" onSubmit={handleSubmit} noValidate>

          <div className="form-group">
            <label htmlFor="title">Expense Title *</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="e.g. Grocery Shopping"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && (
              <p className="error-message">{errors.title}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount (₹) *</label>
            <input
              id="amount"
              type="number"
              name="amount"
              placeholder="Enter amount"
              min="0.01"
              step="0.01"
              value={formData.amount}
              onChange={handleChange}
            />
            {errors.amount && (
              <p className="error-message">{errors.amount}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Education">Education</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <p className="error-message">{errors.category}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="date">Expense Date *</label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              max={new Date().toLocaleDateString("en-CA")}
              onChange={handleChange}
            />
            {errors.date && (
              <p className="error-message">{errors.date}</p>
            )}
          </div>

          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter expense details (optional)"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <Button text="Add Expense" type="submit" />
            <Button
              text="Reset"
              type="button"
              onClick={handleReset}
            />
          </div>
        </form>

        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}

        {submittedExpense && (
          <div className="submitted-expense">
            <h3>Submitted Expense Details</h3>
            <p><strong>Title:</strong> {submittedExpense.title}</p>
            <p>
              <strong>Amount:</strong>{" "}
              ₹{submittedExpense.amount.toFixed(2)}
            </p>
            <p><strong>Category:</strong> {submittedExpense.category}</p>
            <p><strong>Date:</strong> {submittedExpense.date}</p>
            <p>
              <strong>Description:</strong>{" "}
              {submittedExpense.description || "Not provided"}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default AddExpense;
