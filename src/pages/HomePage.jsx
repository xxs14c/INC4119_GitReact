import React from "react";
import FeatureCard from "../components/FeatureCard";
import { FaSmile } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    { title: "소개", description: "제 소개입니다.", route: "/about" },
    { title: "프로젝트", description: "제가 만든 프로젝트들 입니다.", route: "/projects" },
    { title: "연락처", description: "저에게 연락하는 방법입니다.", route: "/contact" },
    { title: "기타", description: "다른 항목입니다.", route: "/custom" },
  ];

  return (
    <div className="home-container">
      <h2>
        <FaSmile style={{ marginRight: "8px", color: "#f39c12" }} />
        환영합니다!
      </h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            onClick={() => navigate(feature.route)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;