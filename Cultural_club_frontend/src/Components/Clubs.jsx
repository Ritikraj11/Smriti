import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Clubs.css";
import Navbar from "./Navbar";

const clubs = [
  {
    name: "Q CODING",
    slug: "q-coding",
    logo: "/logos/qcoding.png",
    shortDesc: "Q CODING: built today inspire tomorrow ",
    fullDesc: `Q CODING: built today inspire tomorrow  

At Q Coding we create solutions through hands-on workshops, coding challenges, hackathons, and collaborative projects. In a world driven by technology, Q Coding is the hub where ideas transform into applications.  

Whether you are passionate about coding, problem-solving, or building the next big tech revolution — from web and app development to AI, data science, and competitive programming projects. No matter your experience level, if you are impassioned for programming, you have a home here.  

Join us in coding the future, because we code today for a better tomorrow.  

Q Coding welcomes:  
• Developers & Coders  
• Innovators & Problem-Solvers  
• AI & Tech Enthusiasts  
• And more  

— Team Q Coding`,
    link: "https://qcoding.in/",
    images: ["/Club_Images/test.png", "/Club_Images/test2.png", "/Club_Images/test3.jpg"],
  },
  {
    name: "VIGYAANAM",
    slug: "vigyaanam",
    logo: "/logos/vigyaanam.png",
    shortDesc: "VIGYAANAM: Unveiling the Wonders of Science and technology",
    fullDesc: ` VIGYAANAM: Unveiling the Wonders of Science and technology
 When your curiosity needs techy innovation and the science comes alive vigyaanam is the place 
which you need. It is the perfect space for you to discover, question, experiment and innovate. 
Engineering and science is about precision, pushing boundaries and exploration with new 
possibilities.
 From thought-provoking discussions to hands-on experiments, scientific competitions to innovative 
projects, we ensure that your ideas finds the correct way to grow under good guidance.
 Either you are passionate for laws of physics and reactions of chemistry to explorer of astronomy or 
fascinates from operating complex machines to designing brilliant models Vigyaanam is your 
platform to dive deep into the world of research and innovation.
 Vigyaanam welcomes 
Science enthusiasts
 Tech innovators 
And more

 Team Vigyaanam`,
    images: ["/Club_Images/Tech1.gif"],
  },
  {
    name: "RANN",
    slug: "rann",
    logo: "/logos/rann.png",
    shortDesc: "RANN : rules strength and strategy forge the winner",
    fullDesc: `RANN : rules strength and strategy forge the winner
 Sports and games are not just about winning—they’re about passion, teamwork and pushing your limits.
 RANN is the battleground where athletes, gamers, and sports enthusiasts come to challenge and refine their 
own strength and strategies. We celebrate shaping character and resilience through sports and games
 Whether on the field, in the court, on the board or in the virtual arena, we believe that every game is an 
opportunity to learn lead and win.
 RANN welcomes:
 Outdoor and indoor Sports Enthusiasts 
Athletes
 E-Gamers
 And more

 Team RANN
`,
    images: ["/logos/rann.png"],
  },
  {
    name: "SAMVAD SABHA",
    slug: "samvad-sabha",
    logo: "/logos/samvad.png",
    shortDesc: "SAMVAD SABHA: speculate with brilliant social minds",
    fullDesc: ` SAMVAD SABHA: speculate with brilliant social minds
 Samvad Sabha is about thinking, exploring and expressing yourself through discussions and debates.
 If you find yourself in the depth of philosophies, laws and theories, challenging ideas Samvad Sabha is where 
you belong.
 It is a space where creativity flows freely, words spark ideas and conversations shapes perspectives.
 From thought-provoking debates and book discussions to sessions with intellectual minds, we provide a 
platform for minds to engage, express, and evolve.
 Samvad sabha welcomes:
 Debaters & Public Speakers
 Critical Thinkers & Analysts
 Curious Minds & Opinion Leaders
 And more

 Team SAMVAD SABHA`,
    images: ["/logos/samvad.png"],
  },
  {
    name: "DRISHYAM",
    slug: "drishyam",
    logo: "/logos/drishyam.png",
    shortDesc: "Drishyam: Dive into your snaped moments",
    fullDesc: `Drishyam: Dive into your snaped moments
 Play it again, live it again and again
 drishyam is a lens through which memories are captured and stories are told. Every frame holds an emotion, 
every click preserves a moment, and every shot brings life to an untold story. If you see the world differently 
through a lens, if capturing emotions excites you, drishyam is where you belong.
 Whether you just loves to shot, cinnamate or edit moments drishyam is your creative space. From covering 
events and crafting visual masterpieces to learning the art of photography and cinematography we ensure all 
of your work will remain in everyones smriti
 Join drishyam where moments are captured, memories are relived, and stories last forever!
 drishyam welcomes
 Photography and videography enthusiast
 Photo and video editors
 And more

 Team drishyam
`,
    images: ["/logos/drishyam.png"],
  },
  {
    name: "LEKHNI",
    slug: "lekhni",
    logo: "/logo/lekhenki.jpg",
    shortDesc: "LEKHNI:Inked Emotions, Dreamy Life",
    fullDesc: `LEKHNI:Inked Emotions, Dreamy Life
 At Lekhni, every words holds a universe and every pen stroke whispers about some event. From poetry reciting and storytelling session to creative writing workshops and literary discussions, we embrace the art and beauty of expression in all its forms.
 Words have the power to shape world, evoke emotions, and immortalize your imaginations. 
Whether you are an aspiring writer or a passionate poet, a reader or a reciter of masterpiece literatures Lekhni welcomes 
you to be part of a world where imaginations has no boundaries. 
Lekhni welcomes:
 Writers
 Poets
 Story tellers and poetry reciters
 Screenplay writers
 And more

 Team Lekhni
`,
    images: ["/logos/lekhni.png"],
  },
  {
    name: "UTSAV",
    slug: "utsav",
    logo: "/logos/utsav.png",
    shortDesc: "UTSAV: we wish your joy",
    fullDesc: `UTSAV: we wish your joy
 Utsav is the team that brings life to any event where every celebration begins with passion, precision, and 
teamwork.
 Utsav believes that  organizing events is not just about doing formalities but also about creating memories that 
lasts forever.
 Whether it is planning, coordinating, organizing and managing performances and schedules, or making smooth 
and faultless operations we make sure that every event is an experience of  joy and energy.
 Utsav welcomes 
Event Planners & Coordinators
 Hosts & Anchors
 Creative Thinkers & Organizers
 And more

 Team Utsav
`,
    images: ["/logos/utsav.png"],
  },
];

export default function Clubs() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    // 🎉 Dot animation logic
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.dx = (Math.random() - 0.5) * 1.5;
        this.dy = (Math.random() - 0.5) * 1.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
        this.draw();
      }
    }

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

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

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openClub = clubs[openIndex] || null;

  const handleViewMore = (club, idx) => {
    if (club.slug === "utsav") {
      navigate(`/clubs/${club.slug}`);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <div className="clubs-page">
      {/* 🎉 Canvas background */}
      <canvas ref={canvasRef} className="dots-bg"></canvas>

      <Navbar />

      <header className="clubs-header">
        <h1 className="clubs-title">Our Vibrant Clubs</h1>
        <p className="clubs-subtitle">
          Discover, connect, and grow with our diverse cultural family.
        </p>
      </header>

      <main className="clubs-grid" role="list">
        {clubs.map((club, idx) => (
          <article key={club.slug || idx} role="listitem" className="club-card">
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <div className="club-image">
                  <img src={club.logo} alt={`${club.name} logo`} />
                </div>
              </div>

              {/* Back Side */}
              <div className="card-back">
                <h2 className="club-name">{club.name}</h2>
                <p className="club-desc">{club.shortDesc}</p>
                <div className="club-actions">
                  <button
                    className="club-btn"
                    onClick={() => handleViewMore(club, idx)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>

      {openClub && (
        <div className="modal-overlay" onClick={() => setOpenIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="masonry-grid">
              {openClub.images?.map((img, i) => (
                <div key={i} className="masonry-item">
                  <img src={img} alt={`${openClub.name} ${i + 1}`} />
                </div>
              ))}
            </div>

            <div className="modal-right">
              <h2>{openClub.name}</h2>
              <p className="club-full-desc">{openClub.fullDesc}</p>
              {openClub.link && (
                <a
                  href={openClub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
