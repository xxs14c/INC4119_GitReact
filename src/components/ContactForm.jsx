import React from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="input-group">
        <FaUser className="input-icon" />
        <input type="text" placeholder="이름" />
      </div>
      <div className="input-group">
        <FaEnvelope className="input-icon" />
        <input type="email" placeholder="이메일" />
      </div>
      <div className="input-group">
        <FaCommentDots className="input-icon" />
        <textarea placeholder="메시지" />
      </div>
      <button type="submit" className="form-button">
        <FaPaperPlane style={{ marginRight: "6px" }} />
        보내기
      </button>
    </form>
  );
};

export default ContactForm;