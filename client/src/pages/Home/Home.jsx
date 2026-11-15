
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "💰",
      title: "Income Tracking",
      description:
        "Record your income sources and understand how much money you earn every month."
    },
    {
      icon: "💸",
      title: "Expense Management",
      description:
        "Track daily spending, organize expenses and identify where your money goes."
    },
    {
      icon: "🎯",
      title: "Monthly Budgets",
      description:
        "Set monthly spending limits and stay within your financial goals."
    },
    {
      icon: "📊",
      title: "Smart Reports",
      description:
        "Understand your financial activities through organized reports and visual summaries."
    },
    {
      icon: "🏷️",
      title: "Categories",
      description:
        "Organize transactions into categories such as food, shopping, travel and education."
    },
    {
      icon: "🔐",
      title: "Secure Account",
      description:
        "Access your personal financial workspace through your own registered account."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Register your account and get started with your personal finance manager."
    },
    {
      number: "02",
      title: "Record Transactions",
      description:
        "Add your income and expenses to maintain an organized financial record."
    },
    {
      number: "03",
      title: "Set Your Budget",
      description:
        "Create monthly budgets and monitor your spending limits."
    },
    {
      number: "04",
      title: "Track Your Progress",
      description:
        "Review your dashboard and make smarter financial decisions."
    }
  ];

  return (
    <main className="home-page">

      {/* NAVBAR */}

    

      {/* HERO SECTION */}

      <section className="home-hero" id="home">

        <div className="hero-background-circle"></div>

        <div className="hero-left">

          <span className="hero-badge">
            ✨ SMARTER MONEY MANAGEMENT
          </span>

          <h1>
            Take Control of Your Money.
            <span> Build a Better Future.</span>
          </h1>

          <p className="hero-description">
            Managing money doesn't have to be difficult.
            Track your income, control your expenses,
            manage monthly budgets and achieve your
            financial goals with ExpenseFlow.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary-btn"
              onClick={() => navigate("/register")}
            >
              Start Managing Money →
            </button>

            <button
              className="hero-secondary-btn"
              onClick={() => navigate("/dashboard")}
            >
              Explore Dashboard
            </button>

          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>01</strong>
              <span>Track Income</span>
            </div>

            <div className="trust-item">
              <strong>02</strong>
              <span>Manage Expenses</span>
            </div>

            <div className="trust-item">
              <strong>03</strong>
              <span>Save Smarter</span>
            </div>
          </div>

        </div>

        {/* DASHBOARD PREVIEW */}

        <div className="hero-right">

          <div className="preview-card">

            <div className="preview-header">
              <div>
                <span className="preview-label">
                  FINANCIAL OVERVIEW
                </span>
                <h3>My Dashboard</h3>
              </div>

              <span className="preview-menu">•••</span>
            </div>

            <div className="balance-card">
              <span>Total Balance</span>
              <h2>₹48,250.00</h2>
              <p>↑ Your financial overview</p>
            </div>

            <div className="preview-stats">

              <div className="preview-stat income-stat">
                <div className="stat-icon">↗</div>
                <span>Total Income</span>
                <h3>₹65,000</h3>
              </div>

              <div className="preview-stat expense-stat">
                <div className="stat-icon">↘</div>
                <span>Total Expenses</span>
                <h3>₹16,750</h3>
              </div>

            </div>

            <div className="budget-preview">

              <div className="budget-heading">
                <strong>Monthly Budget</strong>
                <span>70% Used</span>
              </div>

              <div className="budget-track">
                <div className="budget-fill"></div>
              </div>

              <div className="budget-info">
                <span>₹14,000 Spent</span>
                <span>₹20,000 Limit</span>
              </div>

            </div>

            <div className="preview-bottom">
              <span>💡</span>
              <p>Keep tracking your spending to reach your goals.</p>
            </div>

          </div>

          <div className="floating-card floating-income">
            <span>💰</span>
            <div>
              <small>Income Added</small>
              <strong>+ ₹5,000</strong>
            </div>
          </div>

          <div className="floating-card floating-savings">
            <span>🎯</span>
            <div>
              <small>Smart Budgeting</small>
              <strong>Stay on Track</strong>
            </div>
          </div>

        </div>

      </section>

      {/* STATISTICS STRIP */}

      <section className="home-stats">

        <div>
          <strong>01</strong>
          <span>Personal Dashboard</span>
        </div>

        <div>
          <strong>02</strong>
          <span>Income & Expense Tracking</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Monthly Budget Planning</span>
        </div>

        <div>
          <strong>04</strong>
          <span>Financial Reports</span>
        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="home-features" id="features">

        <div className="section-heading">
          <span className="section-tag">OUR FEATURES</span>

          <h2>
            Everything You Need to
            <span> Manage Your Money</span>
          </h2>

          <p>
            One simple platform to organize your finances,
            monitor your spending and make better decisions.
          </p>
        </div>

        <div className="features-grid">

          {features.map((feature, index) => (
            <article className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="feature-arrow">Explore feature →</span>

            </article>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="home-about" id="about">

        <div className="about-visual">

          <div className="about-main-card">

            <span className="about-card-tag">
              YOUR FINANCIAL JOURNEY
            </span>

            <h2>
              Small steps today.
              <span> Better finances tomorrow.</span>
            </h2>

            <div className="about-check">
              <span>✓</span>
              Track every transaction
            </div>

            <div className="about-check">
              <span>✓</span>
              Plan your monthly budget
            </div>

            <div className="about-check">
              <span>✓</span>
              Monitor your financial progress
            </div>

            <div className="about-check">
              <span>✓</span>
              Build better spending habits
            </div>

          </div>

        </div>

        <div className="about-content">

          <span className="section-tag">WHY EXPENSEFLOW?</span>

          <h2>
            Make Every Rupee
            <span> Count.</span>
          </h2>

          <p>
            ExpenseFlow is designed to make personal
            financial management easier. Instead of
            maintaining scattered records, keep your
            income, expenses and budgets organized
            in one convenient place.
          </p>

          <div className="about-benefit">
            <span>✓</span>
            <div>
              <h4>Better Financial Awareness</h4>
              <p>Know exactly where your money goes.</p>
            </div>
          </div>

          <div className="about-benefit">
            <span>✓</span>
            <div>
              <h4>Organized Money Management</h4>
              <p>Keep your financial records structured.</p>
            </div>
          </div>

          <div className="about-benefit">
            <span>✓</span>
            <div>
              <h4>Smarter Budget Decisions</h4>
              <p>Plan spending and avoid unnecessary expenses.</p>
            </div>
          </div>

          <button
            className="about-button"
            onClick={() => navigate("/register")}
          >
            Get Started Today →
          </button>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="home-steps" id="how-it-works">

        <div className="section-heading">
          <span className="section-tag">SIMPLE PROCESS</span>

          <h2>
            Start Managing Money in
            <span> Four Easy Steps</span>
          </h2>

          <p>
            Getting started with ExpenseFlow is simple.
            Follow these steps to organize your finances.
          </p>
        </div>

        <div className="steps-grid">

          {steps.map((step) => (
            <article className="step-card" key={step.number}>

              <span className="step-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>
          ))}

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="home-cta">

        <span>YOUR FINANCIAL JOURNEY STARTS HERE</span>

        <h2>
          Ready to Take Control
          <br />
          of Your Finances?
        </h2>

        <p>
          Start tracking your money, planning your budget
          and building smarter financial habits today.
        </p>

        <button
          onClick={() => navigate("/register")}
        >
          Create Your Free Account →
        </button>

      </section>

    

    </main>
  );
}

export default Home;
