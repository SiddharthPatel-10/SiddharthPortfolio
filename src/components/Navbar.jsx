import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 className="magnet">Siddharth Patel</h2>
      </div>
      <div className="navbar-menu">
        <div className="menu-icon button magnet" onClick={toggleMenu}>
          <span className="ri-menu-line"></span>
        </div>
        <div className={`menu-items ${isMenuOpen ? "show" : ""}`}>
          <h4 className="button magnet">
            <Link to="/projects">Projects</Link>
          </h4>
          <h4 className="button magnet">
            <Link to="/about">About</Link>
          </h4>
          <h4 className="button magnet">
            <Link to="/contact">Contact</Link>
          </h4>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
