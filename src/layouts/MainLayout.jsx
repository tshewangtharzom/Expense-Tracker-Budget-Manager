import React from "react";
import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <footer className="app-footer">
        Expense Tracker & Budget Manager ? 2026
      </footer>
    </div>
  );
};

export default MainLayout;
