
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>₹ ExpenseFlow</h2>
          <p>
            Manage your income, track expenses, and plan your budget
            smarter. Take control of your financial future.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/budgets">Budgets</Link>
        </div>

        <div className="footer-links">
          <h4>Account</h4>
          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
          <a href="mailto:support@expenseflow.com">Contact Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ExpenseFlow. All rights reserved.
        </p>
        <p>Built to make money management simpler.</p>
      </div>
    </footer>
  );
}

export default Footer;
