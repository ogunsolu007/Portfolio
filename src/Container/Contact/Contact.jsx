import React, { useRef } from "react";
import "./contact.css";
import "animate.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2eeb53",
        "template_ki93qoc",
        form.current,
        "6Wj4BDAOXX_AiH6H8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            <form ref={form} onSubmit={sendEmail} className="form-container">
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
