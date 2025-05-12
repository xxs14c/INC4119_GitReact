import React from "react";
import penguinImage from "../assets/penguin.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={penguinImage} alt="프로필" />
      <div className="profile-info">
        <h3>김민준</h3>
        <p>안녕하세요. 소프트웨어공학을 수강중인 김민준입니다. </p>
      </div>
    </div>
  );
};

export default ProfileCard; 