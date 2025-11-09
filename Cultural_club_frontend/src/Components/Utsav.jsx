import React, { useEffect, useRef } from "react";
import "./Utsav.css";

const Utsav = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle resizing
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        this.draw();
      }
    }

    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="utsav-container">
      <canvas ref={canvasRef} className="dots-bg"></canvas>

      <section className="section dance">
        <h1>💃 Dance</h1>
        <p>Experience the rhythm and energy of dance like never before!</p>
        <div className="media-box">[Space for Dance Images/Videos]</div>
      </section>

      <section className="section music">
        <h1>🎵 Music</h1>
        <p>Let the music flow and take your soul to another world.</p>
        <div className="media-box">[Space for Music Images/Videos]</div>
      </section>

      <section className="section organizing">
        <h1>🎭 Organizing</h1>
        <p>The backbone of the event - perfectly planned and executed.</p>
        <div className="media-box">[Space for Organizing Images/Videos]</div>
      </section>
    </div>
  );
};

export default Utsav;
