import React, { useState } from 'react';
import './Ngoreg.css';

function NGORegistration() {
  const [formData, setFormData] = useState({
    organizationName: '',
    registrationNumber: '',
    contactPersonName: '',
    contactNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2>NGO Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="organizationName"
              placeholder="Organization Name"
              value={formData.organizationName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="registrationNumber"
              placeholder="Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="contactPersonName"
              placeholder="Contact Person's Name"
              value={formData.contactPersonName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="postalCode"
              placeholder="Postal/Zip Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label>I agree to the terms and conditions of FoodBridge</label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default NGORegistration;
