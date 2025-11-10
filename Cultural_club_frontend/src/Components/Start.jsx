import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Start.css";
import Clubs from "./Clubs";
import About from "./About";

export default function Start() {
  // Words for animated loop
  const words = [
    "FOR MEMORABLE MOMENTS",
    "Celebrate Diversity",
    "Together We Shine",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="start-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="title">Welcome to SMRITI</h1>

          {/* Animated Text */}
          <h2 className="title2">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                style={{ display: "inline-block" }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </h2>

          <p className="subtitle">
            Celebrating diversity, creativity, and togetherness — join us in
            spreading colors of joy and culture!
          </p>
          <link to="/join" className="join-btn-big">Join Us</link>
          <a
            href="https://www.gecmadhubani.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="clg-btn-big"
          >
            Visit Our College
          </a>
        </div>
      </div>

      <br />
      <About />

      {/* ⭐ Hall of Fame Section */}
      <section className="hall-of-fame">
        <h1 className="hof-title">🌟 Hall of Fame</h1>
        <p className="hof-subtitle">
          Celebrating our shining stars who brought glory with their talent and
          dedication.
        </p>
        <div className="hof-grid">
          <div className="hof-card">
            <img src="https://via.placeholder.com/150" alt="Fame1" />
            <h3>Riya Sharma</h3>
            <p>National Level Dancer</p>
          </div>
          <div className="hof-card">
            <img src="https://via.placeholder.com/150" alt="Fame2" />
            <h3>Arjun Mehta</h3>
            <p>Classical Singer</p>
          </div>
          <div className="hof-card">
            <img src="https://via.placeholder.com/150" alt="Fame3" />
            <h3>Sneha Patel</h3>
            <p>Best Event Organizer</p>
          </div>
          <div className="hof-card">
            <img src="https://via.placeholder.com/150" alt="Fame4" />
            <h3>Amit Verma</h3>
            <p>Creative Writer</p>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <br />
      <Clubs />

      {/* Publication Society */}
      <section className="publication-section">
        <div className="pub-card">
          <h1 className="pub-title">📖 Publication Society</h1>
          <p className="pub-desc">
            The Publication Society is dedicated to promoting creative writing,
            research, and knowledge sharing. We publish magazines, journals, and
            digital content that inspire students to express themselves and
            showcase their talents.
          </p>
          <div className="pub-actions">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="pub-btn"
            >
              Visit Society
            </a>
            <a href="/events" className="pub-btn secondary">
              View Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
