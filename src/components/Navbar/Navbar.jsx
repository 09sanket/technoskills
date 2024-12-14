import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/sritlogo.png";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-head">Techno Skills Coaching Classes</span>
      <img
  id="navLogo"
  className="nav-logo"
  style={{ width: "4rem", height: "4rem", marginLeft: "-55rem" }}
  src={Logo}
  alt="Logo"
/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link id="nav-link" to="/">
          Home
        </Link>
        <Link id="nav-link" to="courses">
          Courses
        </Link>
        <Link id="nav-link" to="contact">
          Contact
        </Link>
        <Link id="nav-link" to="about">
          About
        </Link>
        <Link id="nav-link" to="gallery">
          Gallery
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;