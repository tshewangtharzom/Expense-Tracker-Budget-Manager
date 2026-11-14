
import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Welcome from "../../components/ui/Welcome";
import Button from "../../components/ui/Button";

function Dashboard() {
  const [count, setCount] = useState(0);
  const [notifications, setNotifications] = useState(0);

  return (
    <div className="page">
      <PageTitle
        title="Dashboard"
        subtitle="Manage your income and expenses"
      />

      <Welcome
        userName="Tshewang"
        projectName="Expense Tracker & Budget Manager"
      />

      <div className="dashboard-cards">
        <Card title="Total Income" description="Your monthly income">
          <h2>₹25,000</h2>
        </Card>

        <Card title="Total Expenses" description="Your monthly expenses">
          <h2>₹8,500</h2>
        </Card>

        <Card title="Remaining Balance" description="Your available balance">
          <h2>₹16,500</h2>
        </Card>
      </div>

      <Card title="Interactive Counter">
        <h2>{count}</h2>
        <Button text="Increase Count" onClick={() => setCount(count + 1)} />
        <Button text="Reset Count" onClick={() => setCount(0)} />
      </Card>

      <Card title="Notifications">
        <h2>{notifications}</h2>
        <Button
          text="Add Notification"
          onClick={() => setNotifications(notifications + 1)}
        />
      </Card>
    </div>
  );
}

export default Dashboard;
