import data from "./data";
import { IoArrowRedoCircle } from "react-icons/io5";
import "./experience.css";
import { useState } from "react";
import Button from "../../Components/button/Button";
const Experience = () => {
  const [jobs, setJob] = useState(data);
  const [value, setValue] = useState(0);

  const { company, dates, duties, title, order, id } = jobs[value];

  return (
    <div className="experience" id="experience">
      <div className="experience-container container">
        <div className="section_title">
          <span>02.</span> <h4>Where I've Worked</h4>
          <div className="hr" />
        </div>
        <div className="job-container">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <Button
                  label={item.company}
                  key={item.id}
                  onClick={() => setValue(index)}
                  styling={`job-btn ${index === value && "active-btn"}`}
                />
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <IoArrowRedoCircle className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Experience;
