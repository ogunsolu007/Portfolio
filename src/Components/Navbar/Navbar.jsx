import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import Button from "../button/Button";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const changehamburger = () => {
    setToggle(!toggle);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="nav-container container">
        <div className="logo" onClick={scrollToTop}>
          <a href="#home">
            <h3 className="logo">
              <span>O</span>G
            </h3>
          </a>
        </div>
        <div className="hamburger" onClick={changehamburger}>
          {toggle ? (
            <i class="far fa-times-circle"></i>
          ) : (
            <i class="fas fa-bars"></i>
          )}
        </div>
        <div className={toggle ? "nav-lists nav-lists-expanded" : "nav-lists"}>
          <ul>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <li className="nav-list">
                <span>01.</span> <a href="#about">About</a>
              </li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <li className="nav-list">
                <span>02.</span> <a href="#experience">Experience</a>
              </li>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <li className="nav-list">
                <span>03.</span> <a href="#work">work</a>
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              <li className="nav-list">
                <span>04.</span> <a href="#contact">contact</a>
              </li>
            </Link>
            <Button label="Download CV" styling={"btn-cv"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
