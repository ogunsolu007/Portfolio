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
          <div className="about_container-content-text" data-aos="fade-up">
            <h3>Who am I?</h3>
            <p>
              A Frontend Engineer with hands on project experience developing
              websites, frontend of nice and attractive user friendly web
              applications. Someone with a good grasp of frontend technologies,
              data structures, algorithms and the design of systems.
            </p>
            <p>
              A Bachelor’s Degree holder in Computer Science Education.
              Currently looking for an organisation where i can put my skills to
              use and pivot the growth of the engineering team.
            </p>
          </div>
          <div className="about_container-content-img">
            <img src={myImg} alt="my img" data-aos="zoom-in-down" />
          </div>
        </div>
        <div className="techstack">
          <h3>Tech Stack</h3>
          <ul>
            <li data-aos="fade-up">HTML5</li>
            <li data-aos="fade-left">CSS3</li>
            <li data-aos="fade-down">SASS</li>
            <li data-aos="fade-up">JavaScript</li>
            <li data-aos="fade-right">JQuery</li>
            <li data-aos="fade-up">React</li>
            <li data-aos="fade-left">Next Js</li>
            <li data-aos="fade-up">Github</li>
            <li data-aos="fade-right">Redux</li>
            <li data-aos="fade-left">Node Js</li>
            <li data-aos="fade-up">Accessbility</li>
            <li data-aos="fade-right">Github</li>
            <li data-aos="fade-down">Tailwind CSS</li>
            <li data-aos="fade-right">Redux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
