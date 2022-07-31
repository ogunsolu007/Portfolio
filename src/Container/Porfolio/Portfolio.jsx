import React from "react";
import "./portfolio.css";
import fylo from "../../assests/fylo.png";
import urlshort from "../../assests/urlshortner.png";
import huddle from "../../assests/huddle.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container portfolio-container">
        <p className="title">Portfolio</p>
        <h1 className="subtitle">
          Some of my
          <br /> Selected Projects
        </h1>
        <div className="cards">
          <div className="card" data-aos="flip-up">
            <img src={fylo} alt="" />
          </div>
          <div className="card" data-aos="flip-left">
            <img src={urlshort} alt="" />
          </div>
          <div className="card" data-aos="flip-down">
            <img src={huddle} alt="" />
          </div>
        </div>
        <div className="github">
          <span></span>
          <p>
            For more kindly check my Github Repo{" "}
            <a href="#" target="_blank">Click Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
