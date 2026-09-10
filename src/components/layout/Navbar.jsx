import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          ?? Expense & Health Manager
        </div>
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="#income">Income</Link>
          <Link to="#expenses">Expenses</Link>
          <Link to="#fitness">Fitness</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
