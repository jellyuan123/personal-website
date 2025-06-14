import React from 'react';
import './JobBox.css';
import JobTextData from './JobText';
import TechStack from './TechStack';

const JobBox = ( {currentJob} ) => {
  const jobInfo = JobTextData[currentJob];
  const bodytext = jobInfo.bodytext;
  // console.log(typeof(bodytext));
  // console.log(bodytext);
  // const list  = document.getElementById('list');
 
  // window.onload = () => {
  //   list.innerHTML = jobInfo.bodytext.map(i => `<li>${i}</li>`).join('');
  // };
  

    return (
      <div className="container">
        {/* <div className="title"> */}
            {jobInfo.role}
            <div className="timeline"> 
              {jobInfo.timeline}
            </div>
            <div className="body-text"> 
                  <ul>
                    {bodytext.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
            </div>
            <div className="techstack-container">
              Tech Stack {<TechStack techstack={jobInfo.techstack} />}
            </div>
        {/* </div> */}
      </div>
        
    );
};

export default JobBox;
