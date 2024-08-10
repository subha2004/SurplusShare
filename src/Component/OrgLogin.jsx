
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './OrgLogin.css';

// const OrgLogin = () => {
//     const [formData, setFormData] = useState({
//         org_id: '',
//         organizationname: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:8080/org/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData)
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 alert("Login successful!");
//                 navigate('/');
//             } else {
//                 alert(data.message);
//             }
//         } catch (error) {
//             console.error("Error during login:", error);
//         }
//     };

//     return (
//         <div className="OrgLogin-container">
//             <div className="OrgLogin-box">
//                 <div className="OrgLogin-left">
//                     <h2>Welcome back</h2>
//                     <p>Login to the Dashboard</p>
//                     <form onSubmit={handleSubmit}>
//                         <input 
//                             type="text" 
//                             name="orgid" 
//                             placeholder="Organization ID" 
//                             className="OrgLogin-input-field"
//                             value={formData.orgid}
//                             onChange={handleChange} 
//                         />
//                         <input 
//                             type="text" 
//                             name="organizationname" 
//                             placeholder="Organization Name" 
//                             className="OrgLogin-input-field"
//                             value={formData.organizationname}
//                             onChange={handleChange} 
//                         />
//                         <input 
//                             type="password" 
//                             name="password" 
//                             placeholder="Password" 
//                             className="OrgLogin-input-field"
//                             value={formData.password}
//                             onChange={handleChange} 
//                         />
//                         <div className="OrgLogin-remember-me">
//                             <input type="checkbox" id="OrgLogin-remember" />
//                             <label htmlFor="OrgLogin-remember">Remember me</label>
//                         </div>
//                         <button type="submit" className="OrgLogin-button">LOGIN</button>
//                     </form>
//                 </div>
//                 <div className="OrgLogin-right">
//                     <div className="OrgLogin-illustration">
//                         <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OrgLogin;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './OrgLogin.css';

// const OrgLogin = () => {
//     const [formData, setFormData] = useState({
//         orgid: '',
//         organizationname: '',
//         password: ''
//     });

//     const [message, setMessage] = useState('');
//     const [showPopup, setShowPopup] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:8080/org/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData)
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 setMessage("Login successful!");
//                 setShowPopup(true);
//                 // Navigate after a delay to allow users to read the message
//                 setTimeout(() => {
//                     navigate('/');
//                 }, 2000);
//             } else {
//                 setMessage(data.message || 'Login failed, please try again.');
//                 setShowPopup(true);
//             }
//         } catch (error) {
//             console.error("Error during login:", error);
//             setMessage("An error occurred, please try again later.");
//             setShowPopup(true);
//         }
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//     };

//     return (
//         <div className="OrgLogin-container">
//             <div className="OrgLogin-box">
//                 <div className="OrgLogin-left">
//                     <h2>Welcome back</h2>
//                     <p>Login to the Dashboard</p>
//                     <form onSubmit={handleSubmit}>
//                         <input 
//                             type="text" 
//                             name="orgid" 
//                             placeholder="Organization ID" 
//                             className="OrgLogin-input-field"
//                             value={formData.orgid}
//                             onChange={handleChange} 
//                         />
//                         <input 
//                             type="text" 
//                             name="organizationname" 
//                             placeholder="Organization Name" 
//                             className="OrgLogin-input-field"
//                             value={formData.organizationname}
//                             onChange={handleChange} 
//                         />
//                         <input 
//                             type="password" 
//                             name="password" 
//                             placeholder="Password" 
//                             className="OrgLogin-input-field"
//                             value={formData.password}
//                             onChange={handleChange} 
//                         />
//                         <div className="OrgLogin-remember-me">
//                             <input type="checkbox" id="OrgLogin-remember" />
//                             <label htmlFor="OrgLogin-remember">Remember me</label>
//                         </div>
//                         <button type="submit" className="OrgLogin-button">LOGIN</button>
//                     </form>
//                 </div>
//                 <div className="OrgLogin-right">
//                     <div className="OrgLogin-illustration">
//                         <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
//                     </div>
//                 </div>
//             </div>

//             {showPopup && (
//                 <div className="org-popup">
//                     <div className="org-popup-content">
//                         <h3>Message</h3>
//                         <p>{message}</p>
//                         <button onClick={handleClosePopup}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default OrgLogin;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrgLogin.css';

const OrgLogin = () => {
    const [formData, setFormData] = useState({
        orgid: '',
        password: ''
    });

    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/org/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Login successful!");
                setShowPopup(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setMessage(data.message || 'Login failed, please try again.');
                setShowPopup(true);
            }
        } catch (error) {
            console.error("Error during login:", error);
            setMessage("An error occurred, please try again later.");
            setShowPopup(true);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="OrgLogin-container">
            <div className="OrgLogin-box">
                <div className="OrgLogin-left">
                    <h2>Welcome back</h2>
                    <p>Login to the Home</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="orgid" 
                            placeholder="Organization ID" 
                            className="OrgLogin-input-field"
                            value={formData.orgid}
                            onChange={handleChange} 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="OrgLogin-input-field"
                            value={formData.password}
                            onChange={handleChange} 
                        />
                        <button type="submit" className="OrgLogin-button">LOGIN</button>
                    </form>
                </div>
                <div className="OrgLogin-right">
                    <div className="OrgLogin-illustration">
                        <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
                    </div>
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
}

export default OrgLogin;
