import React from "react";
import Calculator from "../components/Calculator";
import "../styles/Calculator.css";

const CalculatePage = () => {
  return (
    <div className="main-content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ marginBottom: "1rem" }}>계산기 페이지</h2>
      <Calculator />
    </div>
  );
};

export default CalculatePage;