import React from "react";
import "./About.css";
import profileImg from "../assets/profile.jpg"; // local image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={profileImg} alt="Sudhanshu Bhargava" className="profile-img" />
      </div>
      <div className="about-right">
        <h1>About Me</h1>
        <p className="about-text">
          Hi! I am <strong>Sudhanshu Bhargava</strong>.<br />
          Contact: <strong>8955260990</strong><br />
          Email: <strong>sudhanshu23bh@gmail.com</strong>
        </p>
        <p className="socials">
          Follow me: <br />
          Instagram: <strong>@sudhanshubhargava</strong><br />
          LinkedIn: <strong>sudhanshubhargava@linkedin</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
