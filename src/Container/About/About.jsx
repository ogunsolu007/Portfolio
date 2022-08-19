import React from "react";
import "./about.css";
import myImg from "../../assests/me.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_container container">
        <p className="title">About Me</p>
        <h1 className="subtitle">
          Get to Know More <br />
          About Me
        </h1>
        <div className="about_container-content">
          <div className="about_container-content-text">
            <h3>Who am I?</h3>
            <p>
              A Frontend Engineer with hands on project experience developing
              websites, frontend of nice and attractive user friendly web
              applications. Someone with a good grasp of frontend technologies,
              data structures, algorithms and the design of systems.
            </p>
            <p>
              A Bachelor’s Degree holder in Computer Science Education.Currently
              kiiking for an organisation where i can put in my skills into use
              and pivot the growth of the engineering team.
            </p>
            <div className="techstack">
              <h3>Tech Stack</h3>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
              </ul>
              <ul>
                <li>React</li>
                <li>Next Js</li>
                <li>Github</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>
              <ul>
                <li>Node Js</li>
                <li>Accessbility</li>
                <li>Github</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>
          <div className="about_container-content-img">
            <img src={myImg} alt="my img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
