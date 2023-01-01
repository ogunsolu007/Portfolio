import React from "react";
import "./header.css";
import "animate.css";
import { Link } from "react-scroll";
import Button from "../../Components/button/Button";

const Header = () => {
  return (
    <>
      <div className="header ">
        <div className="header-container container">
          <div data-aos="fade-up" className="header-content">
            <p>Hi, my name is</p>
            <h1>Ogunsolu Olawale.</h1>
            <h3>Frontend Engineer</h3>
            <p className="sec_p">
              I’m a front-end engineer specializing in building exceptional
              digital experiences. Currently, I’m searching for an opportunity
              in the tech space where I can put my skills to use.
            </p>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <Button label="Find out more 🤔" styling="header-btn" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
