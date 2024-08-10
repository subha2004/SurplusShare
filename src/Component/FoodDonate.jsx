// import React, { useState } from 'react';
// import './FoodDonate.css';

// const FoodDonate = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     address: '',
//     foodItems: [],
//     date: '',
//     newFoodType: '',
//     newQuantity: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddFoodItem = () => {
//     const { newFoodType, newQuantity } = formData;
//     if (newFoodType && newQuantity) {
//       setFormData({
//         ...formData,
//         foodItems: [...formData.foodItems, { foodType: newFoodType, quantity: newQuantity }],
//         newFoodType: '',
//         newQuantity: '',
//       });
//     }
//   };

//   const handleRemoveFoodItem = (index) => {
//     const newFoodItems = [...formData.foodItems];
//     newFoodItems.splice(index, 1);
//     setFormData({
//       ...formData,
//       foodItems: newFoodItems,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div className='fdd'>
//       <div className='fddd'>
//         <div className="fddform-container">
//           <h2>Food Donation Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="fddform-group fddform-group-names">
//               <div className="fddform-group">
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
              
//             </div>
//             <div className="fddform-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="fddform-group">
//               <label>Phone:</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="fddform-group">
//               <label>Address:</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="fddform-group">
//               <label>Food Items:</label>
//               <div className="fddfood-items">
//                 {formData.foodItems.map((foodItem, index) => (
//                   <div key={index} className="fddfood-item">
//                     <span>{foodItem.foodType} - {foodItem.quantity}</span>
//                     <button type="button" className="fddremove-item-button" onClick={() => handleRemoveFoodItem(index)}>
//                       X
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="fddform-group">
//                 <input
//                   type="text"
//                   name="newFoodType"
//                   placeholder="Type of Food"
//                   value={formData.newFoodType}
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
//                 <button type="button" className="fddadd-item-button" onClick={handleAddFoodItem}>
//                   Add Food Item
//                 </button>
//               </div>
//             </div>
//             <div className="fddform-group">
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
//       </div>
//     </div>
//   );
// };

// export default FoodDonate;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './FoodDonate.css';

// const FoodDonate = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     foodItems: [],
//     date: '',
//     newFoodType: '',
//     newQuantity: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddFoodItem = () => {
//     const { newFoodType, newQuantity } = formData;
//     if (newFoodType && newQuantity) {
//       setFormData({
//         ...formData,
//         foodItems: [...formData.foodItems, { foodType: newFoodType, quantity: newQuantity }],
//         newFoodType: '',
//         newQuantity: '',
//       });
//     }
//   };

//   const handleRemoveFoodItem = (index) => {
//     const newFoodItems = [...formData.foodItems];
//     newFoodItems.splice(index, 1);
//     setFormData({
//       ...formData,
//       foodItems: newFoodItems,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/food-donations', formData);
//       console.log('Form Data Submitted:', response.data);
//     } catch (error) {
//       console.error('Error submitting form data:', error);
//     }
//   };

//   return (
//     <div className='fdd'>
//       <div className='fddd'>
//         <div className="fddform-container">
//           <h2>Food Donation Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="fddform-group">
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="fddform-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="fddform-group">
//               <label>Phone:</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="fddform-group">
//               <label>Address:</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="fddform-group">
//               <label>Food Items:</label>
//               <div className="fddfood-items">
//                 {formData.foodItems.map((foodItem, index) => (
//                   <div key={index} className="fddfood-item">
//                     <span>{foodItem.foodType} - {foodItem.quantity}</span>
//                     <button type="button" className="fddremove-item-button" onClick={() => handleRemoveFoodItem(index)}>
//                       X
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="fddform-group">
//                 <input
//                   type="text"
//                   name="newFoodType"
//                   placeholder="Type of Food"
//                   value={formData.newFoodType}
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
//                 <button type="button" className="fddadd-item-button" onClick={handleAddFoodItem}>
//                   Add Food Item
//                 </button>
//               </div>
//             </div>
//             <div className="fddform-group">
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
//       </div>
//     </div>
//   );
// };

// export default FoodDonate;



import React, { useState } from 'react';
import axios from 'axios';
import './FoodDonate.css';

const FoodDonate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    foodItems: [],
    date: '',
    newFoodType: '',
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

  const handleAddFoodItem = () => {
    const { newFoodType, newQuantity } = formData;
    if (newFoodType && newQuantity) {
      setFormData({
        ...formData,
        foodItems: [...formData.foodItems, { foodType: newFoodType, quantity: newQuantity }],
        newFoodType: '',
        newQuantity: '',
      });
    }
  };

  const handleRemoveFoodItem = (index) => {
    const newFoodItems = [...formData.foodItems];
    newFoodItems.splice(index, 1);
    setFormData({
      ...formData,
      foodItems: newFoodItems,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/food-donations', formData);
      setPopupMessage('Donation submitted successfully!');
      setShowPopup(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        foodItems: [],
        date: '',
        newFoodType: '',
        newQuantity: '',
      });
      console.log('Form Data Submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form data:', error);
      setPopupMessage('Failed to submit donation. Please try again.');
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='fdd'>
      <div className='fddd'>
        <div className="fddform-container">
          <h2>Food Donation Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="fddform-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="fddform-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="fddform-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="fddform-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="fddform-group">
              <label>Food Items:</label>
              <div className="fddfood-items">
                {formData.foodItems.map((foodItem, index) => (
                  <div key={index} className="fddfood-item">
                    <span>{foodItem.foodType} - {foodItem.quantity}</span>
                    <button type="button" className="fddremove-item-button" onClick={() => handleRemoveFoodItem(index)}>
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="fddform-group">
                <input
                  type="text"
                  name="newFoodType"
                  placeholder="Type of Food"
                  value={formData.newFoodType}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="newQuantity"
                  placeholder="Quantity"
                  value={formData.newQuantity}
                  onChange={handleChange}
                />
                <button type="button" className="fddadd-item-button" onClick={handleAddFoodItem}>
                  Add Food Item
                </button>
              </div>
            </div>
            <div className="fddform-group">
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

          {showPopup && (
            <div className="fddpopup">
              <div className="fddpopup-content">
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

export default FoodDonate;
