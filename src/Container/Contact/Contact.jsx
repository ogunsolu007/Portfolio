import React from "react";
import "./contact.css";
import "animate.css";
import me from "../../assests/me.png";
import Techstack from "../../Components/TechStack/Techstack";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container container">
        <div className="col">
          <p className="title ">Hire me</p>
          <h1 className="subtitle">
            Stay Chill and Tell
            <br /> Your Plan
          </h1>
          <div className="form">
            <form action="" className="form-container">
              <div className="input">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message..."
              ></textarea>
              <button type="submit" className="btn ">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
