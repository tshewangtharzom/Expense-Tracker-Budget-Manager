
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must have at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const result = await registerUser({
        name: form.name,
        email: form.email,
        password: form.password
      });

      setMessage(result.message);

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      {/* Left Side */}
      <div className="register-hero">

        <div className="hero-brand">
          <div className="brand-icon">₹</div>
          <span>ExpenseFlow</span>
        </div>

        <div className="hero-content">
          <span className="hero-tag">SMART MONEY MANAGEMENT</span>

          <h1>
            Take control of
            <br />
            your <span>finances.</span>
          </h1>

          <p>
            Track your spending, manage your budgets,
            and build better financial habits — all
            in one place.
          </p>

          <div className="hero-dashboard">
            <div className="dashboard-top">
              <div>
                <small>Total Balance</small>
                <h2>₹48,250.00</h2>
              </div>
              <span className="balance-icon">↗</span>
            </div>

            <div className="dashboard-bottom">
              <div>
                <span>Income</span>
                <strong>₹65,000</strong>
              </div>
              <div>
                <span>Expenses</span>
                <strong>₹16,750</strong>
              </div>
            </div>

            <div className="dashboard-progress">
              <div></div>
            </div>
          </div>
        </div>

        <div className="hero-footer">
          © 2026 ExpenseFlow. Manage money smarter.
        </div>

      </div>

      {/* Right Side */}
      <div className="register-section">

        <div className="register-card">

          <div className="mobile-brand">
            <div className="brand-icon">₹</div>
            <span>ExpenseFlow</span>
          </div>

          <div className="register-heading">
            <span className="welcome-label">GET STARTED TODAY</span>
            <h2>Create your account</h2>
            <p>
              Start managing your money with confidence.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="register-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="register-field">
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

            <div className="register-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Minimum 8 characters"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            <div className="register-field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            {error && (
              <p className="register-error">{error}</p>
            )}

            {message && (
              <p className="register-success">{message}</p>
            )}

            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account →"}
            </button>

          </form>

          <div className="register-divider">
            <span>OR</span>
          </div>

          <p className="register-login">
            Already have an account?
            <Link to="/login"> Sign in</Link>
          </p>

          <p className="register-terms">
            By creating an account, you agree to our
            <span> Terms of Service </span>
            and
            <span> Privacy Policy.</span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
