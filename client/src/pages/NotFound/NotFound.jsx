
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <PageTitle
        title="404 - Page Not Found"
        subtitle="Sorry, the page you are looking for does not exist."
      />

      <Button
        text="Go Back Home"
        onClick={() => navigate("/")}
      />
    </section>
  );
}

export default NotFound;
