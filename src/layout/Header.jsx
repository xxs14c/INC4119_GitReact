import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        나만의 포트폴리오
      </h1>
      <div className="student-info">
        <h2> 2020112143 김민준 </h2>
      </div>
    </header>
  );
};

export default Header;