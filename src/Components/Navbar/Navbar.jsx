import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
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
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="nav-list">
                <a href="#services">Services</a>
              </li>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="nav-list">
                <a href="#porfolio">portfolio</a>
              </li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="nav-list">
                <a href="#contact">contact</a>
              </li>
            </Link>
          </ul>
          <button className="btn-cv ">Download CV </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
