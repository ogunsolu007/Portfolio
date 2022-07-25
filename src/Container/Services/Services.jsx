import React from "react";
import "./services.css";
import Techstack from "../../Components/TechStack/Techstack";
const Services = () => {
  return (
    <div className="services">
      <div className="services_container container">
        <p className="title">Services</p>
        <h1 className="subtitle">
          Building Digital Product <br /> Better Experience
        </h1>
        <div className="service-list">
          <div className="service_1 service">
            <i class="fa-solid fa-blog"></i>
            <h3>Web Development</h3>
            <p>
              I use various web technology to develop attractive websites which
              converts visitors to customers. I develop creative and responsive
              website layouts.
            </p>
          </div>
          <div className="service_2 service">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <h3>Mobile Development</h3>
            <p>
              I use a crossplatform tchnology to build mobile responsive mobile
              applications
            </p>
          </div>
          <div className="service_1 service">
            <i class="fa-solid fa-chart-mixed"></i>
            <h3>Digital Marketing</h3>
            <p>
              I identify and evaluates new digital technologies and use web
              analytics tools to measure site traffic to better optimize
              marketing campaigns.
            </p>
          </div>
        </div>
      </div>
      <Techstack />
    </div>
  );
};

export default Services;
