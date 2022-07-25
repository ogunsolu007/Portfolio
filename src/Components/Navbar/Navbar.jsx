import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const changehamburger = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <div className="nav-container container">
        <div className="logo">
          <a href="#">
            <h3 className="logo"> OG</h3>
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
            <li className="nav-list">
              <a href="#services">Services</a>
            </li>
            <li className="nav-list">
              <a href="#experience">experience</a>
            </li>
            <li className="nav-list">
              <a href="#porfolio">portfolio</a>
            </li>
            <li className="nav-list">
              <a href="#contact">contact</a>
            </li>
          </ul>
          <button className="btn-cv btn">Download CV </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
