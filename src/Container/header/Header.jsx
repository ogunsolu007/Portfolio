import React from "react";
import man from "../../assests/cherry-689.png";
import "./header.css";
import "animate.css";
import Social from "../../Components/socials/Social";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <>
      <div className="header ">
        <div className="header-container container">
          <div className="header-col" data-aos="fade-up">
            <p>Hi There 👋 I'm</p>
            <h1>Ogunsolu Olawale</h1>
            <h3>Frontend Developer</h3>
            <p className="sec_p">I’m a skilled fullstack developer based in Lagos, Nigeria.</p>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <button className=" btn-know">Know More</button>
            </Link>
            <Social />
          </div>
          <div className="header-col header-col-img" data-aos="fade-down-left">
            <img src={man} alt="headerimage" className="header-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
