
function Card({ title, description, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
