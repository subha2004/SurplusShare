import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="contactbody">
      <div className="contact-us-container">
        <div className="left-image">
          <img
            src="https://www.nicepng.com/png/detail/70-700924_contact-us-png-contact.png"
            alt="Contact Us"
          />
        </div>
        <div className="right-form">
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                name="firstname"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                name="lastname"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="form-control email-input"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

