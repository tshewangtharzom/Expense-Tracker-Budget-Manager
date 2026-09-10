import React from 'react';

const Button = ({ label, onClick, type="button", variant="primary" }) => (
  <button type={type} onClick={onClick} style={{ padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', background: variant === 'primary' ? '#4f46e5' : '#64748b', color: '#fff', border: 'none' }}>
    {label}
  </button>
);

export default Button;
