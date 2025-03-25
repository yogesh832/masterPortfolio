import React, { useState } from "react";
import contacting from "../../assets/contact.png";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import "./ContactComponent.css"; // Import external CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://build-your-buzz-backend.vercel.app/send-email",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
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
      <div className="contact-container">
        {/* Left Section - Image */}
        <div className="contact-image">
          <img src={contacting} alt="Contact" />
        </div>

        {/* Right Section - Form */}
        <div className="contact-form">
          <h2>Let's Talk About Your Project</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <div className="contact-input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="contact-button">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
