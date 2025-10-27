import React, { useState } from "react";
import "./NavBarStyle.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar-container">
      <a href="#home" className="title-link">
        SpringClean
      </a>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#aboutus">About Us</a>
        <a href="/chooseyouruser">Login/Sign Up</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
