// import React from 'react';
// import './VolunteerLogin.css';

// const VolunteerLogin = () => {
//   return (
//     <div className='vrlbody'>
//       <div className="vrlinfo">
//         <h1>Volunteer LOGIN</h1>
//       </div>
//       <div className="vrlbg_img">
//         <div className="vrlcontainer">
//           <div className="vrlqot">
//           </div>
//           <div className="vrlcon_bdy">
//             <form action='/home' method="post">
//               <div className="vrlinput_box">
//                 <p>Volunteer ID</p>
//                 <input
//                   type="text"
//                   name="vol_id"
//                   placeholder="Enter Volunteer ID"
//                 />
//               </div>
//               <div className="vrlinput_box">
//                 <p>Email</p>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter Email"
//                   required
//                 />
//               </div>
//               <div className="vrlinput_box">
//                 <p>Password</p>
//                 <input
//                   type="password"
//                   name="psw"
//                   placeholder="Enter Password"
//                   required
//                 />
//               </div><br></br>
//               <div className="vrlbutton">
//                 <input type="submit" value="Login" />
//               </div>
//             </form>
//             {/* <p id="vrlreg_link">
//               Register New Volunteer?
//               <a href="/volreg" style={{ color: 'skyblue' }}>Register</a>
//             </p> */}
//             <button id="back" onClick={() => window.history.back()}>
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/709/709624.png"
//                 height="30px"
//                 width="30px"
//                 alt="Back"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VolunteerLogin;


// import React from 'react';
// import './VolunteerLogin.css';

// const VolunteerLogin = () => {
//     return (
//         <div className="VolunteerLogin-container">
//             <div className="VolunteerLogin-box">
//                 <div className="VolunteerLogin-left">
//                     <h2>Welcome back</h2>
//                     <p>Login to the Dashboard</p>
//                     <form>
//                         <input type="text" placeholder="Volunteer ID" className="VolunteerLogin-input-field" />
//                         <input type="text" placeholder="Volunteer Name" className="VolunteerLogin-input-field" />
//                         <input type="password" placeholder="Password" className="VolunteerLogin-input-field" />
//                         <div className="VolunteerLogin-remember-me">
//                             <input type="checkbox" id="VolunteerLogin-remember" />
//                             <label htmlFor="VolunteerLogin-remember">Remember me</label>
//                         </div>
//                         <button type="submit" className="VolunteerLogin-button">LOGIN</button>
//                     </form>
//                 </div>
//                 <div className="VolunteerLogin-right">
//                     <div className="VolunteerLogin-illustration">
//                         <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default VolunteerLogin;



import React, { useState } from 'react';
import './VolunteerLogin.css';
import { useNavigate } from 'react-router-dom';

const VolunteerLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
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
            const response = await fetch('http://localhost:8080/volunteer/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Login successful!");
                setShowPopup(true);
                setTimeout(() => {
                    navigate('/'); // Redirect to the home page or dashboard
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
        <div className="VolunteerLogin-container">
            <div className="VolunteerLogin-box">
                <div className="VolunteerLogin-left">
                    <h2>Welcome back</h2>
                    <p>Login to the Dashboard</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="VolunteerLogin-input-field"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="VolunteerLogin-input-field"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <div className="VolunteerLogin-remember-me">
                            <input type="checkbox" id="VolunteerLogin-remember" />
                            <label htmlFor="VolunteerLogin-remember">Remember me</label>
                        </div>
                        <button type="submit" className="VolunteerLogin-button">LOGIN</button>
                    </form>
                </div>
                <div className="VolunteerLogin-right">
                    <div className="VolunteerLogin-illustration">
                        <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="volunteer-popup">
                    <div className="volunteer-popup-content">
                        <h3>Message</h3>
                        <p>{message}</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VolunteerLogin;
