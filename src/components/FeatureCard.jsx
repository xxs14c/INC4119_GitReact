import React from "react";

const FeatureCard = ({ title, description, onClick }) => {
  return (
    <div className="feature" onClick={onClick} style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;