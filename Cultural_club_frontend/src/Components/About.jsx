import React, { useEffect, useState } from "react";
import "./About.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // 🎵 Dancing Dots Background
    const canvas = document.getElementById("dotsCanvas");
    const ctx = canvas.getContext("2d");

    let w, h, dots;
    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      dots = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 3 + 2,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
      }));
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((dot) => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > w) dot.dx *= -1;
        if (dot.y < 0 || dot.y > h) dot.dy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 77, 109, 0.7)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();
    window.addEventListener("resize", init);

    return () => window.removeEventListener("resize", init);
  }, []);

  return (
    <div className="about-page">
      {/* 🎵 Dancing Dots Background */}
      <canvas id="dotsCanvas"></canvas>

      <div className={`about-container ${isVisible ? "show" : ""}`}>
        <h1 className="about-title">SMRITI: For Memorable Moments</h1>
        <p className="about-text">
          Smriti: For memorable moments is more than a tagline—it’s the soul of
          the GECM campus. Here, every event we organize builds a legacy of joy,
          inspiration, and togetherness. It is our promise to create a space
          where memories are crafted, talents are celebrated, and creativity
          blooms.
        </p>
        <p className="about-text">
          From small gatherings to the grandest celebrations — whether it is
          brainstorming for the next big event, organizing thrilling
          competitions, or simply sharing the joy of achievements, Smriti
          ensures that every moment counts.
        </p>
        <p className="about-text">
          Smriti is the stage where your story begins, and lasts forever.
        </p>

        {/* Showcase Section */}
        <div className="about-showcase">
          <div className="showcase-item">
            <h3>✨ Creativity</h3>
            <p>We celebrate artistic expression in all forms.</p>
          </div>
          <div className="showcase-item">
            <h3>🎭 Events</h3>
            <p>From fests to competitions, we make every event unforgettable.</p>
          </div>
          <div className="showcase-item">
            <h3>🤝 Togetherness</h3>
            <p>Building bonds and creating lasting friendships.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
