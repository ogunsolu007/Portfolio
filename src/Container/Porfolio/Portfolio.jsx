import React from 'react'
import "./portfolio.css"
import fylo from "../../assests/fylo.png"
import urlshort from "../../assests/urlshortner.png"
import huddle from "../../assests/huddle.png"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container portfolio-container">
        <div className="card">
          <img src={fylo} alt="" />
        </div>
        <div className="card">
          <img src={urlshort} alt="" />
        </div>
        <div className="card">
          <img src={huddle} alt="" />
        </div>
        <div className="card">
          <img src={fylo} alt="" />
        </div>
        <div className="card">
          <img src={urlshort} alt="" />
        </div>
        <div className="card">
          <img src={huddle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio