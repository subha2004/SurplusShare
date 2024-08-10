
import React, { useState } from 'react';
import axios from 'axios'; 
import './ClothDonate.css';

const ClothDonate = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    phone: '',
    address: '',
    clothItems: [],
    date: '',
    newClothType: '',
    newQuantity: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddClothItem = () => {
    const { newClothType, newQuantity } = formData;
    if (newClothType && newQuantity) {
      setFormData({
        ...formData,
        clothItems: [...formData.clothItems, { clothType: newClothType, quantity: newQuantity }],
        newClothType: '',
        newQuantity: '',
      });
    }
  };

  const handleRemoveClothItem = (index) => {
    const newClothItems = [...formData.clothItems];
    newClothItems.splice(index, 1);
    setFormData({
      ...formData,
      clothItems: newClothItems,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/cloth-donations', formData);
      setPopupMessage('Thank you for your donation! Your form has been submitted successfully.');
      setShowPopup(true);

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        clothItems: [],
        date: '',
        newClothType: '',
        newQuantity: '',
      });
      console.log('Form Data Submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form data:', error);
      setPopupMessage('There was an error submitting your form. Please try again.');
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='cdd'>
      <div className='cddd'>
        <div className="cddform-container">
          <h2>Cloth Donation Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="cddform-group cddform-group-names">
              <div className="cddform-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="cddform-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cddform-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cddform-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="cddform-group">
              <label>Cloth Items:</label>
              <div className="cddcloth-items">
                {formData.clothItems.map((clothItem, index) => (
                  <div key={index} className="cddcloth-item">
                    <span>{clothItem.clothType} - {clothItem.quantity}</span>
                    <button type="button" className="cddremove-item-button" onClick={() => handleRemoveClothItem(index)}>
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="cddform-group">
                <input
                  type="text"
                  name="newClothType"
                  placeholder="Type of Cloth"
                  value={formData.newClothType}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="newQuantity"
                  placeholder="Quantity"
                  value={formData.newQuantity}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="cddadd-item-button" onClick={handleAddClothItem}>
                  Add Cloth Item
                </button>
              </div>
            </div>
            <div className="cddform-group">
              <label>Date of Donation:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="cddbutton">Submit</button>
          </form>

          {showPopup && (
            <div className="cddpopup">
              <div className="cddpopup-content">
                <h3>Message</h3>
                <p>{popupMessage}</p>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClothDonate;
