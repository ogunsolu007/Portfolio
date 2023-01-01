import React from "react";
import "./contact.css";
import "animate.css";
import Button from "../../Components/button/Button";

const Contact = () => {
  const sendMail = () => {
    window.location.href = "mailto:ogunsolu30@gmail.com";
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container container">
        <div className="section_title sm-title">
          <span>04.</span> <h4>Whats Next?</h4>
        </div>{" "}
        <div className="contact-content">
          <h2>Get In Touch</h2>
          <p>
            I’m currently looking for job opportunities, my inbox is always
            open. Whether you have a freelance job, full-time role or just want
            to say hi,I'll always get back to you!
          </p>
          <Button
            label={"Say Hello"}
            styling={"contact-btn"}
            onClick={sendMail}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
