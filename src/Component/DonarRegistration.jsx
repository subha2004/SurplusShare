// import React from 'react';
// import './DonarRegistration.css';

// const DonarRegistration = () => {
//   return (
//     <div className="drbody">
//       <div className="drbdy">
//         <div className="drinfo">
//           <h1>Donor Registration</h1>
//         </div>
//         <div className="drcontainer">
//           <h2>Create Account</h2>
//           <form action="/don_register_submit" method="post">
//             <div className="drform_data">
//               {[
//                 { label: 'Name', name: 'user_name', placeholder: 'Enter Name' },
//                 { label: 'State', name: 'state', placeholder: 'Enter State' },
//                 { label: 'District', name: 'district', placeholder: 'Enter District' },
//                 { label: 'City', name: 'city', placeholder: 'Enter City Name' },
//                 { label: 'Street', name: 'street', placeholder: 'Enter Street Name' },
//                 { label: 'Pin Code', name: 'pincode', placeholder: 'Enter Pin Code' },
//                 { label: 'Phone Number', name: 'phone_no', placeholder: 'Enter Phone Number' },
//                 { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Email' },
//                 { label: 'Password', name: 'psw', type: 'password', placeholder: 'Enter Password' },
//                 { label: 'Confirm Password', name: 'c_psw', type: 'password', placeholder: 'Re-Enter Password' }
//               ].map((input, index) => (
//                 <div key={index} className="drinput_box">
//                   <span>{input.label}</span>
//                   <input
//                     type={input.type || 'text'}
//                     name={input.name}
//                     placeholder={input.placeholder}
//                     required
//                   />
//                 </div>
//               ))}
//               <div className="button">
//                 <input type="submit" value="Register" />
//               </div>
//             </div>
//           </form>
//           <p className="dr-footer">
//             Already have an account? <a href="/donarlog">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonarRegistration;

import React, { useState } from 'react';
import './DonarRegistration.css';

const DonarRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    state: '',
    district: '',
    city: '',
    street: '',
    pincode: '',
    phoneno: '',
    email: '',
    psw: '',
    cpsw: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.psw !== formData.cpsw) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/donars/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Registration successful!');
        setFormData({
          username: '',
          state: '',
          district: '',
          city: '',
          street: '',
          pincode: '',
          phoneno: '',
          email: '',
          psw: '',
          cpsw: '',
        });
      } else {
        setMessage('Registration failed, please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage('An error occurred, please try again later.');
    }
  };

  return (
    <div className="drbody">
      <div className="drbdy">
        <div className="drinfo">
          <h1>Donor Registration</h1>
        </div>
        <div className="drcontainer">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="drform_data">
              {[
                { label: 'Name', name: 'username', placeholder: 'Enter Name' },
                { label: 'State', name: 'state', placeholder: 'Enter State' },
                { label: 'District', name: 'district', placeholder: 'Enter District' },
                { label: 'City', name: 'city', placeholder: 'Enter City Name' },
                { label: 'Street', name: 'street', placeholder: 'Enter Street Name' },
                { label: 'Pin Code', name: 'pincode', placeholder: 'Enter Pin Code' },
                { label: 'Phone Number', name: 'phoneno', placeholder: 'Enter Phone Number' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Email' },
                { label: 'Password', name: 'psw', type: 'password', placeholder: 'Enter Password' },
                { label: 'Confirm Password', name: 'cpsw', type: 'password', placeholder: 'Re-Enter Password' }
              ].map((input, index) => (
                <div key={index} className="drinput_box">
                  <span>{input.label}</span>
                  <input
                    type={input.type || 'text'}
                    name={input.name}
                    value={formData[input.name]}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
              <div className="button">
                <input type="submit" value="Register" />
              </div>
            </div>
          </form>
          {message && <p className="dr-message">{message}</p>}
          <p className="dr-footer">
            Already have an account? <a href="/donarlog">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonarRegistration;











