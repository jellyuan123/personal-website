import './Experience.css';
import { useState } from 'react';
import * as React from "react";
import JobBox from '../components/JobBox';

function Experience() {
  const [selectedJob, setSelectedJob] = useState("AI Outfit Curator");

  const handleClick = (event) => {
    event.target.scrollIntoView({ behavior: 'smooth' });
    const currentJob = event.target.textContent;
    setSelectedJob(currentJob);
  };

  return (
    <div> 
      <div className="header">Projects/Experience<div className="left-list">
        <button className="big-button">Projects</button>
          <div className="dropdown-list">
            <button className="button" onClick={handleClick}>AI Outfit Curator</button>
            <button className="button" onClick={handleClick}>Personal Blog</button>
            <button className="button" onClick={handleClick}>RateMy DiningHall</button>
          </div>

          <div className="dropdown">
            <button className="big-button">Experience</button>
              <div className="dropdown-list">
                <button className="button" onClick={handleClick}>Groundwork Somerville</button>
                <button className="button" onClick={handleClick}>Seeing Hands</button>
                <button className="button" onClick={handleClick}>A2 Empowerment</button>
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
