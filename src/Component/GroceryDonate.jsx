// import React, { useState } from 'react';
// import './GroceryDonate.css';

// const GroceryDonate = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     address: '',
//     groceryItems: [],
//     date: '',
//     newGroceryType: '',
//     newQuantity: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddGroceryItem = () => {
//     const { newGroceryType, newQuantity } = formData;
//     if (newGroceryType && newQuantity) {
//       setFormData({
//         ...formData,
//         groceryItems: [...formData.groceryItems, { groceryType: newGroceryType, quantity: newQuantity }],
//         newGroceryType: '',
//         newQuantity: '',
//       });
//     }
//   };

//   const handleRemoveGroceryItem = (index) => {
//     const newGroceryItems = [...formData.groceryItems];
//     newGroceryItems.splice(index, 1);
//     setFormData({
//       ...formData,
//       groceryItems: newGroceryItems,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div className='gdd'>
//       <div className='gddd'>
//         <div className="gddform-container">
//           <h2>Grocery Donation Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="gddform-group gddform-group-names">
//               <div className="gddform-group">
//                 <label>First Name:</label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//             </div>
//             <div className="gddform-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="gddform-group">
//               <label>Phone:</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="gddform-group">
//               <label>Address:</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="gddform-group">
//               <label>Grocery Items:</label>
//               <div className="gddfood-items">
//                 {formData.groceryItems.map((groceryItem, index) => (
//                   <div key={index} className="gddfood-item">
//                     <span>{groceryItem.groceryType} - {groceryItem.quantity}</span>
//                     <button type="button" className="gddremove-item-button" onClick={() => handleRemoveGroceryItem(index)}>
//                       X
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="gddform-group">
//                 <input
//                   type="text"
//                   name="newGroceryType"
//                   placeholder="Type of Grocery"
//                   value={formData.newGroceryType}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="newQuantity"
//                   placeholder="Quantity"
//                   value={formData.newQuantity}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button type="button" className="gddadd-item-button" onClick={handleAddGroceryItem}>
//                   Add Grocery Item
//                 </button>
//               </div>
//             </div>
//             <div className="gddform-group">
//               <label>Date of Donation:</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <div className="gddimage-container"></div>
//       </div>
//     </div>
//   );
// };

// export default GroceryDonate;


// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios for making HTTP requests
// import './GroceryDonate.css';

// const GroceryDonate = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     email: '',
//     phone: '',
//     address: '',
//     groceryItems: [],
//     date: '',
//     newGroceryType: '',
//     newQuantity: '',
//   });

//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddGroceryItem = () => {
//     const { newGroceryType, newQuantity } = formData;
//     if (newGroceryType && newQuantity) {
//       setFormData({
//         ...formData,
//         groceryItems: [...formData.groceryItems, { groceryType: newGroceryType, quantity: newQuantity }],
//         newGroceryType: '',
//         newQuantity: '',
//       });
//     }
//   };

//   const handleRemoveGroceryItem = (index) => {
//     const newGroceryItems = [...formData.groceryItems];
//     newGroceryItems.splice(index, 1);
//     setFormData({
//       ...formData,
//       groceryItems: newGroceryItems,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/grocery-donations', formData);
//       console.log('Form Data Submitted:', response.data);
//       setPopupMessage('Thank you for your donation! Your form has been submitted successfully.');
//       setShowPopup(true);

//       // Reset form after submission
//       setFormData({
//         firstname: '',
//         email: '',
//         phone: '',
//         address: '',
//         groceryItems: [],
//         date: '',
//         newGroceryType: '',
//         newQuantity: '',
//       });
//     } catch (error) {
//       console.error('Error submitting form data:', error);
//       setPopupMessage('There was an error submitting your form. Please try again.');
//       setShowPopup(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className='gdd'>
//       <div className='gddd'>
//         <div className="gddform-container">
//           <h2>Grocery Donation Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="gddform-group gddform-group-names">
//               <div className="gddform-group">
//                 <label>First Name:</label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="gddform-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="gddform-group">
//               <label>Phone:</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="gddform-group">
//               <label>Address:</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="gddform-group">
//               <label>Grocery Items:</label>
//               <div className="gddfood-items">
//                 {formData.groceryItems.map((groceryItem, index) => (
//                   <div key={index} className="gddfood-item">
//                     <span>{groceryItem.groceryType} - {groceryItem.quantity}</span>
//                     <button type="button" className="gddremove-item-button" onClick={() => handleRemoveGroceryItem(index)}>
//                       X
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="gddform-group">
//                 <input
//                   type="text"
//                   name="newGroceryType"
//                   placeholder="Type of Grocery"
//                   value={formData.newGroceryType}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="newQuantity"
//                   placeholder="Quantity"
//                   value={formData.newQuantity}
//                   onChange={handleChange}
//                   required
//                 />
//                 <button type="button" className="gddadd-item-button" onClick={handleAddGroceryItem}>
//                   Add Grocery Item
//                 </button>
//               </div>
//             </div>
//             <div className="gddform-group">
//               <label>Date of Donation:</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit">Submit</button>
//           </form>

//           {showPopup && (
//             <div className="gddpopup">
//               <div className="gddpopup-content">
//                 <h3>Message</h3>
//                 <p>{popupMessage}</p>
//                 <button onClick={handleClosePopup}>Close</button>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="gddimage-container"></div>
//       </div>
//     </div>
//   );
// };

// export default GroceryDonate;



import React, { useState } from 'react';
import axios from 'axios';
import './GroceryDonate.css';

const GroceryDonate = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    phone: '',
    address: '',
    groceryItems: [],
    date: '',
    newGroceryType: '',
    newQuantity: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddGroceryItem = () => {
    const { newGroceryType, newQuantity } = formData;
    if (newGroceryType && newQuantity) {
      setFormData({
        ...formData,
        groceryItems: [
          ...formData.groceryItems,
          { groceryType: newGroceryType, quantity: newQuantity },
        ],
        newGroceryType: '',
        newQuantity: '',
      });
    }
  };

  const handleRemoveGroceryItem = (index) => {
    const newGroceryItems = [...formData.groceryItems];
    newGroceryItems.splice(index, 1);
    setFormData({
      ...formData,
      groceryItems: newGroceryItems,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/grocery-donations',
        formData
      );
      console.log('Form Data Submitted:', response.data);
      setMessage('Donation submitted successfully!');
      setShowPopup(true);

      // Reset form after submission
      setFormData({
        firstname: '',
        email: '',
        phone: '',
        address: '',
        groceryItems: [],
        date: '',
        newGroceryType: '',
        newQuantity: '',
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
      setMessage('Failed to submit donation. Please try again.');
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="gdd">
      <div className="gddd">
        {showPopup && (
          <div className="gddpopup">
            <div className="gddpopup-content">
              <h3>Message</h3>
              <p>{message}</p>
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        )}
        <div className="gddform-container">
          <h2>Grocery Donation Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="gddform-group gddform-group-names">
              <div className="gddform-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="gddform-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="gddform-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="gddform-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="gddform-group">
              <label>Grocery Items:</label>
              <div className="gddfood-items">
                {formData.groceryItems.map((groceryItem, index) => (
                  <div key={index} className="gddfood-item">
                    <span>
                      {groceryItem.groceryType} - {groceryItem.quantity}
                    </span>
                    <button
                      type="button"
                      className="gddremove-item-button"
                      onClick={() => handleRemoveGroceryItem(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="gddform-group">
                <input
                  type="text"
                  name="newGroceryType"
                  placeholder="Type of Grocery"
                  value={formData.newGroceryType}
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
                <button
                  type="button"
                  className="gddadd-item-button"
                  onClick={handleAddGroceryItem}
                >
                  Add Grocery Item
                </button>
              </div>
            </div>
            <div className="gddform-group">
              <label>Date of Donation:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="gddimage-container"></div>
      </div>
    </div>
  );
};

export default GroceryDonate;
