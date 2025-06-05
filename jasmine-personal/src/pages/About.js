import './About.css';

function About() {
  return (
    <div className="body"> 
    <div className="outline-box">  
      <div className='inside-box'>
      <div className='biography'> 
        <h1> Hi, my name is </h1>
        <h2> Jasmine Schaber. </h2>
        <h1> I’m a Computer Science student at Tufts University with experience in fullstack development, who is currently searching for opportunities in software engineering. </h1>
        <div className='link-box'>
          <a href="https://github.com/jellyuan123" className="link-text">GitHub</a>
          <a href="https://www.linkedin.com/in/jasmine-schaber-041603245/" className="link-text">LinkedIn</a>
          <a onClick={(e) => {window.location.href ='mailto:jyuanschaber@gmail.com';}} className='link-text'>Email Me
          </a>
        </div>
      </div>
      </div>
    </div>   
    </div> 
  );
}

export default About;
