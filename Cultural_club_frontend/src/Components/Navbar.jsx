import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">SMRITI</div>
      
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/Clubs">Clubs</Link>
        <Link to="/Committee">Committee</Link>
        <Link to="/join" className="join-btn">Join Us</Link>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
