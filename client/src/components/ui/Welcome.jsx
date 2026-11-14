
function Welcome({ userName, projectName }) {
  return (
    <div className="card">
      <h2>Welcome, {userName}!</h2>
      <p>You are using {projectName}.</p>
    </div>
  );
}

export default Welcome;
