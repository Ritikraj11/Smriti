import React from "react";
import "./Committee.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Committee() {
  // Sample data — you can replace with real names & links
  const headCommittee = [
    {
      name: "John Doe",
      position: "President",
      img: "/assets/head1.jpg",
      linkedin: "https://linkedin.com",
      gmail: "mailto:john@example.com",
    },
    {
      name: "Jane Smith",
      position: "Vice President",
      img: "/assets/head2.jpg",
      linkedin: "https://linkedin.com",
      gmail: "mailto:jane@example.com",
    },
  ];

  const developerCommittee = [
    { name: "Dev A", linkedin: "https://linkedin.com", gmail: "mailto:devA@example.com" },
    { name: "Dev B", linkedin: "https://linkedin.com", gmail: "mailto:devB@example.com" },
  ];

  const clubCommittee = [
    {
      club: "Dance Club",
      coordinator: { name: "Alice", linkedin: "https://linkedin.com", gmail: "mailto:alice@example.com" },
      subCoordinator: { name: "Bob", linkedin: "https://linkedin.com", gmail: "mailto:bob@example.com" }
    },
    {
      club: "Music Club",
      coordinator: { name: "Chris", linkedin: "https://linkedin.com", gmail: "mailto:chris@example.com" },
      subCoordinator: { name: "Diana", linkedin: "https://linkedin.com", gmail: "mailto:diana@example.com" }
    }
  ];

  return (
    <div className="committee-page">
      {/* Head Committee */}
      <h2 className="section-title">Head Committee</h2>
      <div className="head-committee">
        {headCommittee.map((member, index) => (
          <div className="head-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <div className="social-links">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href={member.gmail}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Developer Committee */}
      <h2 className="section-title">Developer Committee</h2>
      <div className="developer-committee">
        {developerCommittee.map((dev, index) => (
          <div className="dev-card" key={index}>
            <h3>{dev.name}</h3>
            <div className="social-links">
              <a href={dev.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href={dev.gmail}><FaEnvelope /></a>
            </div>
          </div>
        ))}
      </div>

      {/* Club Committee */}
      <h2 className="section-title">Club Committee</h2>
      {clubCommittee.map((club, index) => (
        <div className="club-section" key={index}>
          <h3 className="club-name">{club.club}</h3>
          <div className="club-members">
            <div className="member-card">
              <h4>Coordinator</h4>
              <p>{club.coordinator.name}</p>
              <div className="social-links">
                <a href={club.coordinator.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={club.coordinator.gmail}><FaEnvelope /></a>
              </div>
            </div>
            <div className="member-card">
              <h4>Sub-Coordinator</h4>
              <p>{club.subCoordinator.name}</p>
              <div className="social-links">
                <a href={club.subCoordinator.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={club.subCoordinator.gmail}><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
