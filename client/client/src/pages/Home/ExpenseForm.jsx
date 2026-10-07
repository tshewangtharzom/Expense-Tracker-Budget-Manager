import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Food',
    date: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Expense title is required.';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters.';
    }

    if (!formData.amount) {
      newErrors.amount = 'Amount is required.';
    } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (onAddExpense) {
        onAddExpense(formData);
      }

      setSuccessMessage('Expense added successfully!');
      handleReset();

      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      amount: '',
      category: 'Food',
      date: ''
    });
    setErrors({});
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      marginBottom: '1.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#0f172a' }}>Add New Expense</h3>

      {successMessage && (
        <div style={{
          backgroundColor: '#dcfce7',
          color: '#15803d',
          padding: '0.75rem',
          borderRadius: '6px',
          marginBottom: '1rem',
          fontSize: '0.9rem'
        }}>
          ✓ {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
            Expense Title *
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Grocery Shopping"
            value={formData.title}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.55rem',
              borderRadius: '6px',
              border: `1px solid ${errors.title ? '#ef4444' : '#cbd5e1'}`,
              outline: 'none'
            }}
          />
          {errors.title && (
            <p style={{ margin: '0.25rem 0 0 0', color: '#ef4444', fontSize: '0.8rem' }}>{errors.title}</p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
            Amount ($) *
          </label>
          <input
            type="number"
            name="amount"
            placeholder="e.g. 45.50"
            value={formData.amount}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.55rem',
              borderRadius: '6px',
              border: `1px solid ${errors.amount ? '#ef4444' : '#cbd5e1'}`,
              outline: 'none'
            }}
          />
          {errors.amount && (
            <p style={{ margin: '0.25rem 0 0 0', color: '#ef4444', fontSize: '0.8rem' }}>{errors.amount}</p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.55rem',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#ffffff'
            }}
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.55rem',
              borderRadius: '6px',
              border: `1px solid ${errors.date ? '#ef4444' : '#cbd5e1'}`
            }}
          />
          {errors.date && (
            <p style={{ margin: '0.25rem 0 0 0', color: '#ef4444', fontSize: '0.8rem' }}>{errors.date}</p>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Add Expense
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              backgroundColor: '#e2e8f0',
              color: '#334155',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
