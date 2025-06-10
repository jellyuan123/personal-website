import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left"> 
  <div className="logo-text"> JYS </div>
  </div>
  <div className="navbar-right">
    <a href="/" className="link-text"> About </a>
    <a href="/Experience" className="link-text"> Experience </a>
    <a href="/Blog" className="link-text"> Blog </a>
    <a href="/Resume" className="link-text"> Resume </a>
  </div>
</nav>
);
};

export default Navbar;
