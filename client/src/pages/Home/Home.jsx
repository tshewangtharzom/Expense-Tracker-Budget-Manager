
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <PageTitle
        title="Welcome to Expense Tracker"
        subtitle="Manage your money smartly and easily."
      />

      <Card
        title="Track Your Finances"
        description="Record income, expenses and monthly budgets in one place."
      >
        <Button
          text="Go to Dashboard"
          onClick={() => navigate("/dashboard")}
        />
      </Card>
    </section>
  );
}

export default Home;
