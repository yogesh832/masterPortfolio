import React, { useState } from "react";
import contacting from "../assets/contact.png";
import axios from "axios";
import { FaFileDownload } from "react-icons/fa";
import "./contact.css"; // Ensure the correct path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://build-your-buzz-backend.vercel.app/send-email",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending the email. Please try again.");
    }
  };

  return (
    <section className="contact-section">
      {/* Contact Image */}
      <div className="contact-img-container">
        <img src={contacting} alt="Contact" />
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h1 className="contact-heading">Let's talk about your project</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter your full name"
            required
          />

          <div className="contact-input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
              required
            />

            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="input-field"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            <span>
              <FaFileDownload />
            </span>{" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
