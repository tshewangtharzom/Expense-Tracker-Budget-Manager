
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Profile() {
  return (
    <section className="page">
      <PageTitle
        title="My Profile"
        subtitle="Manage your personal account"
      />

      <Card title="User Information" description="Your profile details">
        <p>Name: User</p>
        <p>Email: user@example.com</p>
        <Button
          text="Edit Profile"
          onClick={() => alert("Profile editing will be added later.")}
        />
      </Card>
    </section>
  );
}

export default Profile;
