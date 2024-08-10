
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './DonorLogin.css';

// const DonarLogin = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-left">
//           <h2>Welcome back</h2>
//           <p>Login to the Dashboard</p>
//           <form>
//             <input type="text" placeholder="Username" className="input-field" />
//             <input type="password" placeholder="Password" className="input-field" />
//             <div className="remember-me">
//               <input type="checkbox" id="remember" />
//               <label htmlFor="remember">Remember me</label>
//             </div>
//             <button type="submit" className="login-button">LOGIN</button>
//           </form>
//           <p className="register-link">
//             Don't have an account? <Link to="/donRegister">Register</Link>
//           </p>
//         </div>
//         <div className="login-right">
//           <div className="illustration">
//             <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DonarLogin;


// OrgLogin.jsx

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './OrgLogin.css';

// const OrgLogin = () => {
//     const [formData, setFormData] = useState({
//         orgid: '',
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

//             if (response.ok) {
//                 setMessage("Login successful!");
//                 setShowPopup(true);
//                 setTimeout(() => {
//                     navigate('/');
//                 }, 2000);
//             } else {
//                 const data = await response.json();
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
//                             type="password" 
//                             name="password" 
//                             placeholder="Password" 
//                             className="OrgLogin-input-field"
//                             value={formData.password}
//                             onChange={handleChange} 
//                         />
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


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './OrgLogin.css';

// const OrgLogin = () => {
//     const [formData, setFormData] = useState({ orgid: '', password: '' });
//     const [message, setMessage] = useState('');
//     const [showPopup, setShowPopup] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
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
//                 setTimeout(() => navigate('/'), 2000);
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

//     const handleClosePopup = () => setShowPopup(false);

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
//                             type="password" 
//                             name="password" 
//                             placeholder="Password" 
//                             className="OrgLogin-input-field"
//                             value={formData.password}
//                             onChange={handleChange} 
//                         />
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






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './DonorLogin.css';

// const DonorLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/donars/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, psw: password }),
//       });

//       if (response.ok) {
//         const message = await response.text();
//         alert(message);
//         // Redirect to dashboard or another page
//       } else {
//         const error = await response.text();
//         setErrorMessage(error);
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-left">
//           <h2>Welcome back</h2>
//           <p>Login to the Dashboard</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Username"
//               className="input-field"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="input-field"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className="remember-me">
//               <input type="checkbox" id="remember" />
//               <label htmlFor="remember">Remember me</label>
//             </div>
//             <button type="submit" className="login-button">LOGIN</button>
//           </form>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <p className="register-link">
//             Don't have an account? <Link to="/donRegister">Register</Link>
//           </p>
//         </div>
//         <div className="login-right">
//           <div className="illustration">
//             <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonorLogin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DonorLogin.css';

const DonorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/donars/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, psw: password }),
      });

      if (response.ok) {
        const message = await response.text();
        setSuccessMessage(message); // Set success message
        setShowPopup(true); // Show popup
        setTimeout(() => {
          setShowPopup(false); // Hide popup
          navigate('/'); // Redirect after 2 seconds
        }, 2000);
      } else {
        const error = await response.text();
        setErrorMessage(error);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h2>Welcome back</h2>
          <p>Login to the Home</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="login-button">LOGIN</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p className="register-link">
            Don't have an account? <a href="/donRegister">Register</a>
          </p>
        </div>
        <div className="login-right">
          <div className="illustration">
            <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Success</h3>
            <p>{successMessage}</p>
            <button onClick={handleClosePopup} className="popup-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonorLogin;
