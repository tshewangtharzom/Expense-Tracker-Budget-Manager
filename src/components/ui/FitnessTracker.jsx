import React, { useState } from 'react';

const FitnessTracker = () => {
  const [fitnessItems, setFitnessItems] = useState([
    { id: 1, name: 'Gym Membership', category: 'Membership', cost: 50, status: 'Active' },
    { id: 2, name: 'Whey Protein', category: 'Supplements', cost: 65, status: 'Purchased' },
    { id: 3, name: 'Running Shoes', category: 'Gear', cost: 120, status: 'Planned' },
  ]);

  return (
    <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0, color: '#0f172a' }}>🏋️ Fitness & Gym Tracker</h3>
        <span style={{ background: '#dcfce7', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          Monthly Spent: $115.00
        </span>
      </div>

      {/* Responsive Grid for Fitness Items */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {fitnessItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '6px', background: '#f8fafc' }}>
            <div style={{ fontWeight: 'bold', color: '#1e293b' }}>{item.name}</div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', margin: '0.25rem 0' }}>Category: {item.category}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
              <span style={{ fontWeight: 'bold', color: '#0284c7' }}>${item.cost}.00</span>
              <span style={{ fontSize: '0.75rem', background: '#e0e7ff', color: '#3730a3', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessTracker;
