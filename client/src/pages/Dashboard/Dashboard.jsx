
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Dashboard() {
  return (
    <section className="page">
      <PageTitle
        title="Dashboard Overview"
        subtitle="Welcome back! Here's your financial summary."
      />

      <div className="dashboard-cards">
        <Card
          title="Total Income"
          description="Your total earnings"
        >
          <h2>₹25,000</h2>
        </Card>

        <Card
          title="Total Expenses"
          description="Your total spending"
        >
          <h2>₹8,500</h2>
        </Card>

        <Card
          title="Remaining Balance"
          description="Your available balance"
        >
          <h2>₹16,500</h2>
        </Card>
      </div>
    </section>
  );
}

export default Dashboard;
