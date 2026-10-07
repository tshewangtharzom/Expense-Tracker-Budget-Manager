import React from 'react';

const PageTitle = ({ title = "Dashboard", subtitle = "Monitor your spending and manage budgets", badge }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <h1 style={{ margin: 0, fontSize: '1.75rem', color: '#1e293b' }}>{title}</h1>
      {badge && (
        <span style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          {badge}
        </span>
      )}
    </div>
    {subtitle && <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.95rem' }}>{subtitle}</p>}
  </div>
);

export default PageTitle;
