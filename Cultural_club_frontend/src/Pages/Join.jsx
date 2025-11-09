import React, { useState } from "react";
import "./Join.css";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    batch: "",
    interests: [],
    specification: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="join-background">
      <div className="form-container">
        <h1 id="form-h1">Join Us</h1>

        <form
          action="https://gecm.onrender.com/join"
          method="POST"
          className="form"
        >
          {/* Name Field */}
          <div className="form-group">
            <label id="name-head" htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="form-group">
            <label id="mob-head" htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              maxLength="10"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <small>Enter a 10-digit number</small>
          </div>

          {/* Batch Selection */}
          <div className="form-group batch">
            <label id="batch-head" htmlFor="batch">Select Your Batch</label>
            <select
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Batch</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>

          {/* Interests */}
          <div className="form-group">
            <label>Choose your interests:</label>
            <div className="checkbox-group">
              {[
                "sports",
                "music",
                "dance",
                "poetry",
                "photography",
                "drama",
                "science",
                "politics",
                "coding",
              ].map((interest) => (
                <label key={interest}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                  {interest.charAt(0).toUpperCase() + interest.slice(1)}
                </label>
              ))}
            </div>
            <input
              type="text"
              name="specification"
              id="textbox"
              placeholder="Name of the Sport (if any)"
              value={formData.specification}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit">Join Us</button>
          </div>
        </form>
      </div>

      {/* Footer Marquee */}
      <div className="marquee">
        <p>
          Why to Join Us? &emsp;&emsp; We are here to create Memorable moments
          and a better campus life.
        </p>
      </div>
    </div>
  );
}
