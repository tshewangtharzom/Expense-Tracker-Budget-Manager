import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import PageTitle from './components/ui/PageTitle';
import FitnessTracker from './components/ui/FitnessTracker';
import AddExpenseModal from './components/ui/AddExpenseModal';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function App() {
  const [role, setRole] = useState('user');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState('All');

  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Monthly Salary', date: '2026-09-10', category: 'Salary', type: 'Income', rawAmount: 3500, amount: '+$3,500.00' },
    { id: 2, title: 'Supermarket Run', date: '2026-09-09', category: 'Groceries', type: 'Expense', rawAmount: -120.50, amount: '-$120.50' },
    { id: 3, title: 'Gym Pass', date: '2026-09-08', category: 'Fitness / Gym', type: 'Expense', rawAmount: -50.00, amount: '-$50.00' },
  ]);

  const handleAddTransaction = (newTx) => {
    setTransactions([newTx, ...transactions]);
  };

  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + Math.abs(t.rawAmount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + Math.abs(t.rawAmount), 0);

  const fitnessSpent = transactions
    .filter(t => t.category === 'Fitness / Gym' && t.type === 'Expense')
    .reduce((sum, t) => sum + Math.abs(t.rawAmount), 0);

  const filteredTransactions = filterCategory === 'All' 
    ? transactions 
    : transactions.filter(t => t.category === filterCategory);

  const downloadCSV = () => {
    const headers = ['Title,Date,Category,Type,Amount\n'];
    const rows = filteredTransactions.map(t => `"${t.title}",${t.date},${t.category},${t.type},${t.amount}\n`);
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
    const tableColumn = ["Title", "Date", "Category", "Type", "Amount"];
    const tableRows = filteredTransactions.map(t => [t.title, t.date, t.category, t.type, t.amount]);
    doc.autoTable({ head: [tableColumn], body: tableRows, startY: 20 });
    doc.save(`financial_report_${role}.pdf`);
  };

  return (
    <MainLayout userRole={role}>
      {/* Header & Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <PageTitle 
          title={role === 'admin' ? "Admin Management Portal" : "Financial & Fitness Dashboard"} 
          subtitle="Monitor income, daily expenses, monthly budget limits, and health goals" 
          badge={role.toUpperCase()} 
        />
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ padding: '0.5rem 1rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            ➕ Add Entry
          </button>
          <div style={{ display: 'flex', background: '#e2e8f0', padding: '0.25rem', borderRadius: '6px' }}>
            <button 
              onClick={() => setRole('user')} 
              style={{ padding: '0.4rem 0.85rem', border: 'none', borderRadius: '4px', background: role === 'user' ? '#4f46e5' : 'transparent', color: role === 'user' ? '#fff' : '#475569', fontWeight: 'bold', cursor: 'pointer' }}
            >
              User
            </button>
            <button 
              onClick={() => setRole('admin')} 
              style={{ padding: '0.4rem 0.85rem', border: 'none', borderRadius: '4px', background: role === 'admin' ? '#4f46e5' : 'transparent', color: role === 'admin' ? '#fff' : '#475569', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Calculated KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #16a34a', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Total Income</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#16a34a' }}>${totalIncome.toFixed(2)}</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #dc2626', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Total Expenses</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#dc2626' }}>${totalExpenses.toFixed(2)}</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #0284c7', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Fitness Spent</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#0284c7' }}>${fitnessSpent.toFixed(2)}</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '10px', borderLeft: '4px solid #6366f1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Net Balance</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: (totalIncome - totalExpenses) >= 0 ? '#0f172a' : '#dc2626' }}>
            ${(totalIncome - totalExpenses).toFixed(2)}
          </h2>
        </div>
      </div>

      {/* Transactions Activity & Filters */}
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ margin: 0, color: '#0f172a' }}>Financial Activity</h3>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>Showing {filteredTransactions.length} transaction entries</p>
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              style={{ padding: '0.45rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
            >
              <option value="All">All Categories</option>
              <option value="Groceries">Groceries</option>
              <option value="Salary">Salary</option>
              <option value="Fitness / Gym">Fitness / Gym</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
            <button onClick={downloadCSV} style={{ padding: '0.45rem 0.85rem', background: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>📥 CSV</button>
            <button onClick={downloadPDF} style={{ padding: '0.45rem 0.85rem', background: '#dc2626', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>📄 PDF</button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569' }}>
                <th style={{ padding: '0.75rem' }}>Description</th>
                <th style={{ padding: '0.75rem' }}>Date</th>
                <th style={{ padding: '0.75rem' }}>Category</th>
                <th style={{ padding: '0.75rem' }}>Type</th>
                <th style={{ padding: '0.75rem' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((t) => (
                <tr key={t.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.75rem', fontWeight: '500' }}>{t.title}</td>
                  <td style={{ padding: '0.75rem', color: '#64748b' }}>{t.date}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{t.category}</span>
                  </td>
                  <td style={{ padding: '0.75rem', color: t.type === 'Income' ? '#16a34a' : '#dc2626', fontWeight: '600' }}>{t.type}</td>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold', color: t.type === 'Income' ? '#16a34a' : '#0f172a' }}>{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <FitnessTracker />

      <AddExpenseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddTransaction={handleAddTransaction} 
      />
    </MainLayout>
  );
}

export default App;
