
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Expenses", path: "/expenses" },
    { name: "Budgets", path: "/budgets" },
    { name: "Profile", path: "/profile" }
  ];

  return (
    <nav className="main-navbar">

      {/* LOGO */}

      <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
        <span className="navbar-logo-icon">₹</span>
        <span>Expense<span>Flow</span></span>
      </NavLink>

      {/* MOBILE MENU BUTTON */}

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* NAVIGATION LINKS */}

      <div className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>

        <div className="navbar-links">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              {item.name}
            </NavLink>
          ))}

        </div>

        {/* AUTH BUTTONS */}

        <div className="navbar-actions">

          <button
            className="navbar-login"
            onClick={() => {
              closeMenu();
              navigate("/login");
            }}
          >
            Login
          </button>

          <button
            className="navbar-register"
            onClick={() => {
              closeMenu();
              navigate("/register");
            }}
          >
            Get Started →
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
