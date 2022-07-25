import React from "react";
import man from "../../assests/cherry-689.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header ">
        <div className="header-container container">
          <div className="header-col">
            <p>Hi There 👋 I'm</p>
            <h1>Ogunsolu Olawale</h1>
            <h3>Fullstack Developer</h3>
            <p>I’m a skilled fullstack developer based in Lagos.</p>
            <button className="btn btn-hire">Hire Me</button>
            <div className="social-icons">
              <i class="fa-brands fa-facebook-f social-icon"></i>
              <i class="fa-brands fa-github social-icon"></i>
              <i class="fa-brands fa-linkedin social-icon"></i>
              <i class="fa-brands fa-twitter social-icon"></i>
            </div>
          </div>
          <div className="header-col">
            <img src={man} alt="header image" className="header-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
