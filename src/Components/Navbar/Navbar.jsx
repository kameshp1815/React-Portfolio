import  { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Links */}
      <ul className="navList">
        <li>
          <a href="#header" className="navLink" onClick={toggleNavbar}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="navLink" onClick={toggleNavbar}>
            About
          </a>
        </li>
        <li>
          <a href="#education" className="navLink" onClick={toggleNavbar}>
            Education
          </a>
        </li>
        <li>
          <a href="#projects" className="navLink" onClick={toggleNavbar}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="navLink" onClick={toggleNavbar}>
            Skills
          </a>
        </li>
        <li>
          <a href="#certificates" className="navLink" onClick={toggleNavbar}>
            Certificates
          </a>
        </li>
        <li>
          <a href="#contact" className="navLink" onClick={toggleNavbar}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;