import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / Logo */}
        <div className="footer-section brand">
          <h2 className="footer-logo">SMRITI</h2>
          <p className="footer-tagline">
            Inspiring creativity & innovation every day.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/clubs">Our Clubs</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">🌐</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
