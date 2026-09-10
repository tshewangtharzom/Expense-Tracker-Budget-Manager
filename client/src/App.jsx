import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import FitnessTracker from './components/ui/FitnessTracker';

function App() {
  const [role, setRole] = useState('user');

  return (
    <MainLayout userRole={role}>
      <div style={{ padding: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>Financial & Fitness Dashboard</h1>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Manage your income, expenses, and health goals</p>

        {/* KPI Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderLeft: '4px solid #16a34a' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Total Income</span>
            <h2 style={{ marginTop: '0.5rem', color: '#16a34a' }}>$3,500.00</h2>
          </div>
          <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderLeft: '4px solid #dc2626' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Total Expenses</span>
            <h2 style={{ marginTop: '0.5rem', color: '#dc2626' }}>$170.50</h2>
          </div>
          <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderLeft: '4px solid #0284c7' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Fitness Budget Spent</span>
            <h2 style={{ marginTop: '0.5rem', color: '#0284c7' }}>$115.00</h2>
          </div>
        </div>

        {/* Embedded Fitness Component */}
        <FitnessTracker />
      </div>
    </MainLayout>
  );
}

export default App;
