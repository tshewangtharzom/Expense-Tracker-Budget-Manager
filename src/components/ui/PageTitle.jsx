import React from 'react';

const PageTitle = ({ title, subtitle, badge }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
    <h1 style={{ margin: 0 }}>{title}</h1>
    {badge && <span style={{ background: '#e0e7ff', color: '#3730a3', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.85rem' }}>{badge}</span>}
  </div>
);

export default PageTitle;
