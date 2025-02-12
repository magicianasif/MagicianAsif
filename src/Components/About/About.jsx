import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/AboutImage.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer and a magician, with over
              3+ years of expertise in crafting seamless and engaging digital
              experiences. Just as a magician captivates an audience with
              flawless sleight of hand, I create intuitive and high-performance
              web applications that leave users amazed. Throughout my career, I
              have had the privilege of collaborating with prestigious
              organizations, transforming complex requirements into sleek,
              efficient, and user-friendly interfaces. My passion for frontend
              development is not just about writing code—it’s about
              orchestrating an experience where design and functionality work in
              perfect harmony. With an eye for detail, a commitment to
              excellence, and a touch of creativity, I ensure that every project
              delivers an effortless and almost magical user journey.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "10%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>MAGIC SHOWS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
