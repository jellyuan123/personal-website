import React from 'react';
import './JobBox.css';
import JobTextData from './JobText';

const JobBox = ( {currentJob} ) => {
  const jobInfo = JobTextData[currentJob];
  // const list  = document.getElementById('list');
 
  // window.onload = () => {
  //   list.innerHTML = jobInfo.bodytext.map(i => `<li>${i}</li>`).join('');
  // };
  

    return (
      <div className="container">
        <div className="title">
            {jobInfo.role}
            <div className="timeline"> 
              {jobInfo.timeline}
            </div>
            <div className="body-text"> 
              {jobInfo.bodytext}
            </div>
        </div>
      </div>
        
    );
};

export default JobBox;
