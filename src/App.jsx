import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import PageTitle from './components/ui/PageTitle';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function App() {
  const [role, setRole] = useState('user'); // 'user' | 'admin'

  const transactions = [
    { date: '2026-09-10', category: 'Salary', type: 'Income', amount: '+$3,500.00' },
    { date: '2026-09-09', category: 'Groceries', type: 'Expense', amount: '-$120.50' },
    { date: '2026-09-08', category: 'Utilities', type: 'Expense', amount: '-$85.00' },
    { date: '2026-09-05', category: 'Freelance', type: 'Income', amount: '+$450.00' }
  ];

  const downloadCSV = () => {
    const headers = ['Date,Category,Type,Amount\n'];
    const rows = transactions.map(t => `${t.date},${t.category},${t.type},${t.amount}\n`);
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `financial_report_${role}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Expense Tracker & Budget Manager - ${role.toUpperCase()} Report`, 14, 15);
    
    const tableColumn = ["Date", "Category", "Type", "Amount"];
    const tableRows = transactions.map(t => [t.date, t.category, t.type, t.amount]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save(`financial_report_${role}.pdf`);
  };

  return (
    <MainLayout userRole={role}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Switch View:</span>
        <button 
          onClick={() => setRole('user')} 
          style={{ padding: '0.25rem 0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', background: role === 'user' ? '#4f46e5' : '#fff', color: role === 'user' ? '#fff' : '#334155', cursor: 'pointer' }}
        >
          User View
        </button>
        <button 
          onClick={() => setRole('admin')} 
          style={{ padding: '0.25rem 0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', background: role === 'admin' ? '#4f46e5' : '#fff', color: role === 'admin' ? '#fff' : '#334155', cursor: 'pointer' }}
        >
          Admin View
        </button>
      </div>

      <PageTitle 
        title={role === 'admin' ? "Admin Dashboard" : "Financial Dashboard"} 
        subtitle={role === 'admin' ? "Manage users, system categories, and platform analytics" : "Track your income, expenses, and monthly budget limits"} 
        badge={role.toUpperCase()} 
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {role === 'user' ? (
          <>
            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Total Income</span>
              <h2 style={{ margin: '0.5rem 0 0 0', color: '#16a34a' }}>$3,950.00</h2>
            </div>
            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Total Expenses</span>
              <h2 style={{ margin: '0.5rem 0 0 0', color: '#dc2626' }}>$205.50</h2>
            </div>
            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Monthly Budget Usage</span>
              <h2 style={{ margin: '0.5rem 0 0 0', color: '#2563eb' }}>42%</h2>
            </div>
          </>
        ) : (
          <>
            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Total Registered Users</span>
              <h2 style={{ margin: '0.5rem 0 0 0', color: '#0f172a' }}>1,248</h2>
            </div>
            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Active Categories</span>
              <h2 style={{ margin: '0.5rem 0 0 0', color: '#0f172a' }}>24</h2>
            </div>
            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>System Status</span>
              <h2 style={{ margin: '0.5rem 0 0 0', color: '#16a34a' }}>Active</h2>
            </div>
          </>
        )}
      </div>

      <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0, color: '#1e293b' }}>{role === 'admin' ? 'System Audit Logs' : 'Recent Transactions'}</h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={downloadCSV} style={{ padding: '0.4rem 0.8rem', background: '#0284c7', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
              📥 Download CSV
            </button>
            <button onClick={downloadPDF} style={{ padding: '0.4rem 0.8rem', background: '#dc2626', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
              📄 Download PDF
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '450px', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569' }}>
                <th style={{ padding: '0.75rem' }}>Date</th>
                <th style={{ padding: '0.75rem' }}>Category</th>
                <th style={{ padding: '0.75rem' }}>Type</th>
                <th style={{ padding: '0.75rem' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.75rem' }}>{t.date}</td>
                  <td style={{ padding: '0.75rem' }}>{t.category}</td>
                  <td style={{ padding: '0.75rem', color: t.type === 'Income' ? '#16a34a' : '#dc2626', fontWeight: '600' }}>{t.type}</td>
                  <td style={{ padding: '0.75rem' }}>{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
