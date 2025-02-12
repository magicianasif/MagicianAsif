import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/placeholder.png";
import call_icon from "../../assets/call_icon.svg";
import isnta_icon from "../../assets/instagram.png";
import link_icon from "../../assets/linkedin.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Validation: Check if the required fields are filled
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill in all the required fields.");
      return;
    }

    // enter your own web3 forms access key below
    formData.append("access_key", "5fb7d566-5b8c-4990-85fd-7c7d6dcfbdca");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("Your message has been sent successfully!");
        event.target.reset();
      } else {
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>
            I'm currently available to take on new projects, whether it's
            developing high-performance web applications or mesmerizing
            audiences with my magic shows. so feel free to send me a message
            about anything that you want me to work on. You can contact
            anytime!.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <a
                style={{ textDecoration: "none" }}
                href="mailto:asifhabeeb1205@gmail.com"
              >
                <p>asifhabeeb1205@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91 9074939609</p>
            </div>
            <div className="contact-detail">
              <img src={isnta_icon} alt="" />
              <a
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/magician.asif/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>magician.asif</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={link_icon} alt="" />
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/asif-habeeb-7059b0191/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Asif Habeeb</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Kerala, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          {/* <label htmlFor="">Your Mobile Number</label>
          <input type="number" placeholder="Enter your mobile number" name="mobile" /> */}
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
