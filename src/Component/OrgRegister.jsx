// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OrgRegister.css';

// const OrgRegister = () => {
//   return (
//     <div className="org-body">
//       <div className="org-container">
//         <h2>Create Account</h2>
//         <form action="/org_register_submit" method="post">
//           <div className="org-form_data">
//             {[
//               { name: 'organization_name', placeholder: 'Enter Organization Name' },
//               { name: 'owner_name', placeholder: 'Enter Owner Name' },
//               { name: 'org_id', placeholder: 'Enter Organization ID' },
//               { name: 'state', placeholder: 'Enter State' },
//               { name: 'district', placeholder: 'Enter District' },
//               { name: 'city', placeholder: 'Enter City Name' },
//               { name: 'street', placeholder: 'Enter Street Name' },
//               { name: 'pincode', placeholder: 'Enter Pin Code' },
//               { name: 'phone_no', placeholder: 'Enter Phone Number' },
//               { name: 'email', type: 'email', placeholder: 'Enter Email' },
//               { name: 'password', type: 'password', placeholder: 'Enter Password' },
//               { name: 'confirm_password', type: 'password', placeholder: 'Re-Enter Password' },
//             ].map((input, index) => (
//               <div key={index} className="org-input_box">
//                 <span>
//                   {input.name
//                     .split('_')
//                     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//                     .join(' ')}
//                 </span>
//                 <input
//                   type={input.type || 'text'}
//                   name={input.name}
//                   placeholder={input.placeholder}
//                   required
//                 />
//               </div>
//             ))}
//             <div className="org-button">
//               <input type="submit" value="Register" />
//             </div>
//           </div>
//         </form>
//         <div className="org-footer">
//           Already have an account? <Link to="/orglogin">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrgRegister;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './OrgRegister.css';

// const OrgRegister = () => {
//   const [formData, setFormData] = useState({
//     organizationname: '',
//     ownername: '',
//     orgid: '',
//     state: '',
//     district: '',
//     city: '',
//     street: '',
//     pincode: '',
//     phoneno: '',
//     email: '',
//     password: '',
//     confirmpassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmpassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8080/org/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Registration successful!");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div className="org-body">
//       <div className="org-container">
//         <h2>Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="org-form_data">
//             {[
//               { name: 'organizationname', placeholder: 'Enter Organization Name' },
//               { name: 'ownername', placeholder: 'Enter Owner Name' },
//               { name: 'orgid', placeholder: 'Enter Organization ID' },
//               { name: 'state', placeholder: 'Enter State' },
//               { name: 'district', placeholder: 'Enter District' },
//               { name: 'city', placeholder: 'Enter City Name' },
//               { name: 'street', placeholder: 'Enter Street Name' },
//               { name: 'pincode', placeholder: 'Enter Pin Code' },
//               { name: 'phoneno', placeholder: 'Enter Phone Number' },
//               { name: 'email', type: 'email', placeholder: 'Enter Email' },
//               { name: 'password', type: 'password', placeholder: 'Enter Password' },
//               { name: 'confirmpassword', type: 'password', placeholder: 'Re-Enter Password' },
//             ].map((input, index) => (
//               <div key={index} className="org-input_box">
//                 <span>
//                   {input.name
//                     .split('_')
//                     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//                     .join(' ')}
//                 </span>
//                 <input
//                   type={input.type || 'text'}
//                   name={input.name}
//                   placeholder={input.placeholder}
//                   required
//                   value={formData[input.name]}
//                   onChange={handleChange}
//                 />
//               </div>
//             ))}
//             <div className="org-button">
//               <input type="submit" value="Register" />
//             </div>
//           </div>
//         </form>
//         <div className="org-footer">
//           Already have an account? <Link to="/orglogin">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrgRegister;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrgRegister.css';

const OrgRegister = () => {
  const [formData, setFormData] = useState({
    organizationname: '',
    ownername: '',
    orgid: '',
    state: '',
    district: '',
    city: '',
    street: '',
    pincode: '',
    phoneno: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      setMessage("Passwords do not match!");
      setShowPopup(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/org/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setFormData({
          organizationname: '',
          ownername: '',
          orgid: '',
          state: '',
          district: '',
          city: '',
          street: '',
          pincode: '',
          phoneno: '',
          email: '',
          password: '',
          confirmpassword: ''
        });
      } else {
        const data = await response.json();
        setMessage(data.message || 'Registration failed, please try again.');
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("An error occurred, please try again later.");
    } finally {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="org-body">
      <div className="org-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="org-form_data">
            {[
              { name: 'organizationname', placeholder: 'Enter Organization Name' },
              { name: 'ownername', placeholder: 'Enter Owner Name' },
              { name: 'orgid', placeholder: 'Enter Organization ID' },
              { name: 'state', placeholder: 'Enter State' },
              { name: 'district', placeholder: 'Enter District' },
              { name: 'city', placeholder: 'Enter City Name' },
              { name: 'street', placeholder: 'Enter Street Name' },
              { name: 'pincode', placeholder: 'Enter Pin Code' },
              { name: 'phoneno', placeholder: 'Enter Phone Number' },
              { name: 'email', type: 'email', placeholder: 'Enter Email' },
              { name: 'password', type: 'password', placeholder: 'Enter Password' },
              { name: 'confirmpassword', type: 'password', placeholder: 'Re-Enter Password' },
            ].map((input, index) => (
              <div key={index} className="org-input_box">
                <span>
                  {input.name
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </span>
                <input
                  type={input.type || 'text'}
                  name={input.name}
                  placeholder={input.placeholder}
                  required
                  value={formData[input.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="org-button">
              <input type="submit" value="Register" />
            </div>
          </div>
        </form>
        <div className="org-footer">
          Already have an account? <Link to="/orglogin">Login</Link>
        </div>
      </div>

      {showPopup && (
        <div className="org-popup">
          <div className="org-popup-content">
            <h3>Message</h3>
            <p>{message}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgRegister;
