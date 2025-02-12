import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profileHero.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const handleDownload = () => {
    const resumeUrl = "/AsifHabeeb_Resume_.pdf"; // Ensure the file is inside the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Asif_Habeeb_Resume.pdf"; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Asif Habeeb,</span> frontend developer cum close up magician
        based in India.
      </h1>
      <p>
        I am a frontend developer from Kerala, India with 3+ years of experience
        in multiple companies like Cubet Techno Labs and Kalkitech.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <button onClick={handleDownload} className="hero-resume">
          My resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
