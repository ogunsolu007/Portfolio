import React from "react";
import "./portfolio.css";
import fylo from "../../assests/fylo.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container portfolio-container">
        <p className="title">Portfolio</p>
        <h1 className="subtitle">
          Some of my
          <br /> Selected Projects
        </h1>
        <div className="cards">
          <div className="card" data-aos="flip-up">
            <div className="card_inner">
              <div className="card-front">
                <img src={fylo} alt="" />
              </div>
              <div className="card-back">
                <a href="https://github.com/ogunsolu007" target="_blank"  rel="noreferrer">
                  <i class="fa-brands fa-github"> Source Code</i>
                </a>
                <a href="https://github.com/ogunsolu007" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-internet-explorer"> View Site</i>
                </a>
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-left">
            <div className="card_inner">
              <div className="card-front">
                <img src={fylo} alt="" />
              </div>
              <div className="card-back">
                <a href="https://github.com/ogunsolu007" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-github"> Source Code</i>
                </a>
                <a href="https://github.com/ogunsolu007" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-internet-explorer">View Site</i>
                </a>
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-down">
            <div className="card_inner">
              <div className="card-front">
                <img src={fylo} alt="" />
              </div>
              <div className="card-back">
                <a href="https://github.com/ogunsolu007" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-github"> Source Code</i>
                </a>
                <a href="https://github.com/ogunsolu007" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-internet-explorer">View Site</i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="github">
          <span></span>
          <p>
            For more kindly check my Github Repo
            <a href="https://github.com/ogunsolu007" target="_blank" rel="noreferrer">
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
