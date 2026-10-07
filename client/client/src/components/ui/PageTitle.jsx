import React from 'react';

const PageTitle = ({ title, subtitle, badge }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.25rem 0', color: '#0f172a', fontSize: '1.8rem' }}>{title}</h1>
        {subtitle && <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>{subtitle}</p>}
      </div>
      {badge && (
        <span style={{
          backgroundColor: '#e0e7ff',
          color: '#4338ca',
          padding: '0.35rem 0.75rem',
          borderRadius: '9999px',
          fontWeight: '600',
          fontSize: '0.85rem'
        }}>
          {badge}
        </span>
      )}
    </div>
  );
};

export default PageTitle;
