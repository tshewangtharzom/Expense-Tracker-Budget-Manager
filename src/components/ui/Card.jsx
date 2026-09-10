import React from "react";

const Card = ({ title, amount, color }) => {
  return (
    <div className="card" style={{ borderLeft: `4px solid ${color}` }}>
      <span style={{ color: "#64748b", fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase" }}>
        {title}
      </span>
      <h2 style={{ margin: "0.5rem 0 0 0", color: color }}>{amount}</h2>
    </div>
  );
};

export default Card;
