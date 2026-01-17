import React from 'react';
import './Navbar.css';
// import Resume from "../public/resume.pdf";

const Navbar = () => {
  const onResumeClick = () => {
    const pdfUrl = "resume.pdf"; // Replace with your PDF file path or URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume_Jasmine_Schaber.pdf"; // Specify the desired download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

return (
  <nav className="navbar">
    <div className="navbar-left"> 
      <div className="logo-text"> JS </div>
    </div>
    <div className="navbar-right">
      <a href="/" className="link-text"> About </a>
      <a href="/Experience" className="link-text"> Experience </a>
      <a href="/Blog" className="link-text"> Blog </a>
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="link-text"
      >
        Resume
      </a>
    </div>
  </nav>
);
};

export default Navbar;
