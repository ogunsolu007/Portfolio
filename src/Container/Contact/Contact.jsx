import React, { useState } from "react";
import "./contact.css";
import "animate.css";
import emailjs from "@emailjs/browser";
import Social from "../../Components/socials/Social";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.prevent.default();
    emailjs
      .send(
        "service_h2eeb53",
        "template_1msq5b3",
        formData,
        "6Wj4BDAOXX_AiH6H8"
      )
      .then(
        (response) => {
          console.log("SUCCESS", response);
        },
        (error) => {
          console.log("failed....", error);
        }
      );
  };
  console.log(formData);
  return (
    <div className="contact" id="contact">
      <div className="contact-container container">
        <div className="col" data-aos="zoom-in-right">
          <p className="title ">
            Let's Connect! <i class="fa-solid fa-envelope-open-text"></i>
          </p>
          <h1 className="subtitle">
            Stay Chill and Tell
            <br /> Your Plan
          </h1>
          <p className="contact_text">
            If you ever want to grab a coffee/bubble tea (virtually) or just
            want a quick chat - you can find me on social media or you can send
            me a message here!
          </p>
          <Social />
        </div>
        <div className="col">
          <div className="form">
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="input">
                <input
                  type="text"
                  value={formData.name}
                  placeholder="Name"
                  onChange={changeHandler}
                  name="name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={changeHandler}
                  value={formData.email}
                  name="email"
                />
              </div>
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Message..."
                onChange={changeHandler}
                value={formData.message}
                name="message"
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
