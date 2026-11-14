
function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <h1>Expense Tracker & Budget Manager</h1>
      {children || <p>Welcome! Please login to continue.</p>}
    </div>
  );
}

export default AuthLayout;
