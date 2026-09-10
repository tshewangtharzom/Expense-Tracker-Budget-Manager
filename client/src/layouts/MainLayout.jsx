import React from 'react';
import Navbar from '../components/layout/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '1.5rem', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        {children}
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', color: '#94a3b8', fontSize: '0.85rem', borderTop: '1px solid #e2e8f0' }}>
        Expense Tracker & Budget Manager © 2026
      </footer>
    </div>
  );
};

export default MainLayout;
