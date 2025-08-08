import './Experience.css';
import { useState } from 'react';
import * as React from "react";
import JobBox from '../components/JobBox';

function Experience() {
  const [selectedJob, setSelectedJob] = useState("Groundwork Somerville");

  const handleClick = (event) => {
    event.target.scrollIntoView({ behavior: 'smooth' });
    const currentJob = event.target.textContent;
    setSelectedJob(currentJob);
    console.log({currentJob})
  };

  return (
    <div> 
      <div className="header">Projects/Experience<div className="left-list">
          <div className="dropdown">
            <div className="big-button">Experience</div>
              <div className="dropdown-list">
                <button className="button" onClick={handleClick}>Groundwork Somerville</button>
                <button className="button" onClick={handleClick}>Seeing Hands</button>
                <button className="button" onClick={handleClick}>A2 Empowerment</button>
              </div>
          <div className="big-button">Projects</div>
            <div className="dropdown-list">
              <button className="button" onClick={handleClick}>AI Outfit Curator</button>
              <button className="button" onClick={handleClick}>Personal Blog</button>
              <button className="button" onClick={handleClick}>RateMy DiningHall</button>
            </div>
          </div>

        </div>
        <div id="job-display">
          {selectedJob && <JobBox currentJob={selectedJob} />}
        </div>
      </div>
    </div>
  );
}

export default Experience;
