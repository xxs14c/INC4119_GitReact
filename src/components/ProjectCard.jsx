import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, link, internal }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}
      <p>{description}</p>
      {}
      {link && internal ? (
        <Link to={link} className="project-link">
          계산기 이동
        </Link>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          프로젝트 보기
        </a>
      ) : null}
    </div>
  );
};

export default ProjectCard;