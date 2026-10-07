import React from 'react';

const Button = ({ label, onClick, type = 'button', variant = 'primary' }) => {
  const isPrimary = variant === 'primary';
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '0.55rem 1.1rem',
        borderRadius: '6px',
        border: 'none',
        fontWeight: '600',
        cursor: 'pointer',
        backgroundColor: isPrimary ? '#4f46e5' : '#e2e8f0',
        color: isPrimary ? '#ffffff' : '#334155',
        transition: 'background-color 0.2s ease'
      }}
    >
      {label}
    </button>
  );
};

export default Button;
