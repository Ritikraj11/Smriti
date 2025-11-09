import React from "react";
import "./Event.css";

const previousEvents = [
  {
    title: "Tech Fest 2024",
    date: "March 15, 2024",
    description: "A celebration of technology with coding contests, workshops, and talks by industry experts.",
    image: "https://source.unsplash.com/800x600/?technology,conference"
  },
  {
    title: "Cultural Night",
    date: "Feb 05, 2024",
    description: "An evening full of music, dance, and drama to celebrate our diverse culture.",
    image: "https://source.unsplash.com/800x600/?concert,stage"
  },
  {
    title: "Hackathon",
    date: "Jan 20, 2024",
    description: "24-hour coding marathon where participants built solutions to real-world problems.",
    image: "https://source.unsplash.com/800x600/?hackathon,coding"
  }
];

const upcomingEvents = [
  {
    title: "AI Summit 2025",
    date: "Sept 15, 2025",
    description: "A grand event focusing on Artificial Intelligence, ML, and Data Science."
  },
  {
    title: "Sports Meet",
    date: "Oct 10, 2025",
    description: "Annual inter-college sports championship with multiple events and prizes."
  }
];

const Event = () => {
  return (
    <div className="event-page">
      {/* Hero Section */}
      <header className="event-hero">
        <h1>✨ Our Events</h1>
        <p>Explore our past achievements and upcoming gatherings</p>
      </header>

      {/* Upcoming Events */}
      <section className="event-section">
        <h2>🚀 Upcoming Events</h2>
        <div className="upcoming-grid">
          {upcomingEvents.map((event, index) => (
            <div className="upcoming-card" key={index}>
              <h3>{event.title}</h3>
              <p className="date">{event.date}</p>
              <p className="desc">{event.description}</p>
              <button className="register-btn">Register Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Events */}
      <section className="event-section">
        <h2>📸 Previous Events</h2>
        <div className="previous-grid">
          {previousEvents.map((event, index) => (
            <div className="previous-card" key={index}>
              <div className="img-wrapper">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="content">
                <h3>{event.title}</h3>
                <p className="date">{event.date}</p>
                <p className="desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Event;
