import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Reach out with any questions or feedback.
      </p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <br />
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
