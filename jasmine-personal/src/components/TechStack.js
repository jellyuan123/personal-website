import React from 'react';
import './TechStack.css';

const TechStack = ({techstack}) => {
  // console.log(typeof(bodytext));
  // console.log(bodytext);
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
                  <ul>
                    {bodytext.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
            </div>
        </div>
      </div>
        
    );
};

export default JobBox;
