import React from "react";
import ProjectCard from "../components/ProjectCard";
import sampleImage from "../assets/calcu.png";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
 const projects = [
  {
    title: "나의 프로젝트1",
    description: "React를 사용하여 만든 계산기 애플리케이션",
    image: sampleImage,
    link: "/calculator", // 내부 라우팅 경로
    internal: true       // 내부 링크임을 명시
  },
  {
    title: "나의 프로젝트2",
    description: "React를 활용하여 만든 식당 예약 페이지",
  },
  {
    title: "나의 프로젝트3",
    description: "나만의 맛집 저장리스트 ~~",
    link: "https://map.naver.com/p/entry/place/18697937?c=15.00,0,0,0,dh"
  }
];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            internal={project.internal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
