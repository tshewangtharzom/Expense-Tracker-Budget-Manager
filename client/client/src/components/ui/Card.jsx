import React from 'react';

const Card = ({ title, description, children }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1.25rem',
      marginBottom: '1rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      {title && <h3 style={{ margin: '0 0 0.35rem 0', color: '#0f172a', fontSize: '1.1rem' }}>{title}</h3>}
      {description && <p style={{ margin: '0 0 1rem 0', color: '#64748b', fontSize: '0.875rem' }}>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
