import React from "react";
import "./portfolio.css";
import fylo from "../../assests/fylo.png";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container portfolio-container">
        <p className="title">Portfolio</p>
        <div className="cards">
          <div className="card">
            <img src={fylo} alt="" />
            <div className="card-content">
              <h2>jhhjdf</h2>
            </div>
          </div>
          <div className="card">
            <img src={fylo} alt="" />
            <div className="card-content">
              <h2>jhhjdf</h2>
            </div>
          </div>
          <div className="card">
            <img src={fylo} alt="" />
            <div className="card-content">
              <h2>jhhjdf</h2>
            </div>
          </div>
        </div>
        <div className="arrow">
          <div className="arrow-left">
            <AiOutlineArrowLeft />
          </div>
          <div className="arrow-right">
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="github">
          <span></span>
          <p>
            For more kindly check my Github Repo <br />
            <a
              href="https://github.com/ogunsolu007"
              target="_blank"
              rel="noreferrer"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
