import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ background: '#0f172a', borderBottom: '1px solid #1e293b', padding: '0.85rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1.15rem', color: '#38bdf8' }}>
          <span>💳</span> Expense & Health Manager
        </div>

        <div className="desktop-links" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#f8fafc', fontWeight: '500', fontSize: '0.9rem' }}>Dashboard</Link>
          <Link to="#income" style={{ color: '#94a3b8', fontWeight: '500', fontSize: '0.9rem' }}>Income</Link>
          <Link to="#expenses" style={{ color: '#94a3b8', fontWeight: '500', fontSize: '0.9rem' }}>Expenses</Link>
          <Link to="#fitness" style={{ color: '#94a3b8', fontWeight: '500', fontSize: '0.9rem' }}>Fitness</Link>
          <Link to="#reports" style={{ color: '#94a3b8', fontWeight: '500', fontSize: '0.9rem' }}>Reports</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: '#fff', background: 'transparent', border: '1px solid #334155', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid #1e293b' }}>
          <Link to="/" onClick={() => setIsOpen(false)} style={{ color: '#f8fafc' }}>Dashboard</Link>
          <Link to="#income" onClick={() => setIsOpen(false)} style={{ color: '#94a3b8' }}>Income</Link>
          <Link to="#expenses" onClick={() => setIsOpen(false)} style={{ color: '#94a3b8' }}>Expenses</Link>
          <Link to="#fitness" onClick={() => setIsOpen(false)} style={{ color: '#94a3b8' }}>Fitness</Link>
          <Link to="#reports" onClick={() => setIsOpen(false)} style={{ color: '#94a3b8' }}>Reports</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
