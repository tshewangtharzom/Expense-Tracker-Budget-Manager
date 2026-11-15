
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const result = await loginUser(form);

      setMessage(`Welcome, ${result.data.name}!`);

      setTimeout(() => {
        navigate("/expenses");
      }, 1000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* LEFT HERO SECTION */}

      <div className="login-hero">

        <div className="login-brand">
          <div className="login-brand-icon">₹</div>
          <span>ExpenseFlow</span>
        </div>

        <div className="login-hero-content">

          <span className="login-hero-tag">
            SMART MONEY MANAGEMENT
          </span>

          <h1>
            Your money,
            <br />
            your <span>control.</span>
          </h1>

          <p>
            Make smarter financial decisions.
            Track expenses, monitor your income,
            and stay on top of your monthly budget.
          </p>

          {/* Dashboard Preview */}

          <div className="login-dashboard">

            <div className="login-dashboard-header">
              <div>
                <small>Total Balance</small>
                <h2>₹48,250.00</h2>
              </div>

              <span className="login-balance-icon">↗</span>
            </div>

            <div className="login-dashboard-details">

              <div>
                <span>Monthly Income</span>
                <strong>₹65,000</strong>
              </div>

              <div>
                <span>Monthly Expenses</span>
                <strong>₹16,750</strong>
              </div>

            </div>

            <div className="login-progress">
              <div></div>
            </div>

            <small className="login-progress-text">
              Keep your spending under control
            </small>

          </div>

        </div>

        <div className="login-hero-footer">
          © 2026 ExpenseFlow. Manage money smarter.
        </div>

      </div>

      {/* RIGHT LOGIN SECTION */}

      <div className="login-section">

        <div className="login-card">

          {/* Mobile Brand */}

          <div className="login-mobile-brand">
            <div className="login-brand-icon">₹</div>
            <span>ExpenseFlow</span>
          </div>

          <div className="login-heading">

            <span className="login-welcome-tag">
              WELCOME BACK
            </span>

            <h2>Sign in to your account</h2>

            <p>
              Enter your details to access your dashboard.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="login-field">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="login-field">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            {message && (
              <p className="login-success">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Sign In →"}
            </button>

          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <p className="login-register">
            Don't have an account?
            <Link to="/register"> Create account</Link>
          </p>

          <p className="login-terms">
            Securely manage your finances with ExpenseFlow.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
