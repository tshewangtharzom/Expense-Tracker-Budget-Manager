
function Footer() {
  return (
    <footer className="footer">
      <h3>Expense Tracker & Budget Manager</h3>
      <p>Manage your income and expenses smartly.</p>
      <p>
        © {new Date().getFullYear()} Expense Tracker.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
