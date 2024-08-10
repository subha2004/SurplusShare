// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Admin.css';

// const Admin = () => {
//     return (
//         <div className="aOrgLogin-container">
//             <div className="aOrgLogin-box">
//                 <div className="aOrgLogin-left">
//                     <h2>Welcome back</h2>
//                     <p>Login to the Dashboard</p>
//                     <form>
//                         <input type="text" placeholder="Email" className="aOrgLogin-input-field" />
//                         <input type="password" placeholder="Password" className="aOrgLogin-input-field" />
//                         <div className="aOrgLogin-remember-me">
//                             <input type="checkbox" id="aOrgLogin-remember" />
//                             <label htmlFor="aOrgLogin-remember">Remember me</label>
//                         </div>
//                         <Link to="/" className="aOrgLogin-button">LOGIN</Link>
//                     </form>
//                 </div>
//                 <div className="aOrgLogin-right">
//                     <div className="aOrgLogin-illustration">
//                         <img src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg" alt="Illustration" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Admin;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'admin@admin.com' && password === '1234567890') {
            
            window.location.href = '/admindashboard'; 
        } else {
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div className="aOrgLogin-container">
            <div className="aOrgLogin-box">
                <div className="aOrgLogin-left">
                    <h2>Welcome back</h2>
                    <p>Login to the Dashboard</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Email"
                            className="aOrgLogin-input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="aOrgLogin-input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="aOrgLogin-remember-me">
                            <input type="checkbox" id="aOrgLogin-remember" />
                            <label htmlFor="aOrgLogin-remember">Remember me</label>
                        </div>
                        <button type="submit" className="aOrgLogin-button">
                            LOGIN
                        </button>
                    </form>
                    {errorMessage && <p className="aOrgLogin-error">{errorMessage}</p>}
                </div>
                <div className="aOrgLogin-right">
                    <div className="aOrgLogin-illustration">
                        <img
                            src="https://i.pinimg.com/originals/a5/cc/8a/a5cc8a24b1e3eee2529bca30b5aec261.jpg"
                            alt="Illustration"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

