// import React from 'react';
// import './VolunteerRegistration.css';

// const VolunteerRegistration = () => {
//   return (
//     <div className="vrbody">
//       <div className="vrbdy">
//         <div className="vrinfo">
//           {/* <h1>Volunteer Registration</h1> */}
//         </div>
//         <div className="vrcontainer">
//           <h2>Create Account</h2>
//           <form action="/volunteer_register_submit" method="post">
//             <div className="vrform_data">
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
//                 <div key={index} className="vrinput_box">
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
//           <p className="vr-footer">
//             Already have an account? <a href="/volunteerlogin">Login</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VolunteerRegistration;



import React, { useState } from 'react';
import './VolunteerRegistration.css';

const VolunteerRegistration = () => {
    const [formData, setFormData] = useState({
        userName: '',
        state: '',
        district: '',
        city: '',
        street: '',
        pincode: '',
        phoneNo: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match!");
            setShowPopup(true);
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/volunteer/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMessage("Registration successful!");
                setFormData({
                    userName: '',
                    state: '',
                    district: '',
                    city: '',
                    street: '',
                    pincode: '',
                    phoneNo: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
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
        <div className="vrbody">
            <div className="vrbdy">
                <div className="vrinfo">
                    {/* <h1>Volunteer Registration</h1> */}
                </div>
                <div className="vrcontainer">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="vrform_data">
                            {[
                                { label: 'Name', name: 'userName', placeholder: 'Enter Name' },
                                { label: 'State', name: 'state', placeholder: 'Enter State' },
                                { label: 'District', name: 'district', placeholder: 'Enter District' },
                                { label: 'City', name: 'city', placeholder: 'Enter City Name' },
                                { label: 'Street', name: 'street', placeholder: 'Enter Street Name' },
                                { label: 'Pin Code', name: 'pincode', placeholder: 'Enter Pin Code' },
                                { label: 'Phone Number', name: 'phoneNo', placeholder: 'Enter Phone Number' },
                                { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter Email' },
                                { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter Password' },
                                { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Re-Enter Password' }
                            ].map((input, index) => (
                                <div key={index} className="vrinput_box">
                                    <span>{input.label}</span>
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
                            <div className="button">
                                <input type="submit" value="Register" />
                            </div>
                        </div>
                    </form>
                    <p className="vr-footer">
                        Already have an account? <a href="/volunteerlogin">Login</a>
                    </p>
                </div>
            </div>

            {showPopup && (
                <div className="volunteer-reg-popup">
                    <div className="volunteer-reg-popup-content">
                        <h3>Message</h3>
                        <p>{message}</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VolunteerRegistration;
