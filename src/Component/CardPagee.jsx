import React from "react";
import "./CardPagee.css";
import { Link } from "react-router-dom";


const CardPagee = () => {
  return (
    <div className="cardd-container">
      <div className="cardd">
        <img src="https://www.shutterstock.com/image-vector/online-registration-sign-login-account-600nw-2056307726.jpg" alt="User Login" className="cardd-image" />
        <Link to="/donarlog">
          <button className="logind-button">User Login</button>
        </Link>
      </div>
      <div className="cardd">
        <img src="https://www.shutterstock.com/image-vector/man-working-laptop-computer-desk-600nw-1967455246.jpg" alt="Admin Login" className="card-image" />
        <Link to="/admin">
          <button className="logind-button">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default CardPagee;
