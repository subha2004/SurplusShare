


import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';



const Navbar = () => {
  return (
    <div className='navbody'>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to ={`/`}><img src={logo}></img></Link>
          
          </div>
        <div className="navbar-links">

        <div className="navdropdown">
            <Link to={`/`}>Start Share</Link>

          </div>

          <div className="navdropdown">
            <Link to={`/aboutus`}>Who We Are</Link>

          </div>
         


          
          <div className="navdropdown">
            <Link to={`/ourwork`}>What We Do</Link>
            {/* <div className="navdropdown-menu">
              <Link to={`/feedingprog`}>Feeding Program</Link>
              <Link to={`/scheme`}>Plans</Link>
            </div> */}
          </div>
          <div className="navdropdown">
            <Link to={`/reghome`}>Partner With Us</Link>
            {/* <div className="navdropdown-menu">
              <Link to={`/orgreg`}>Organization Registration</Link>
              <Link to={`/volreg`}>Volunteer Registration</Link>
            </div> */}
          </div>
          <div className="navdropdown">
            <Link to={`/dashb`}>Call to Action</Link>
            {/* <div className="navdropdown-menu">
              <Link to={`/dashb`}>Donate Food</Link>
            </div> */}
          </div>
        </div>
        <div className="navnavbar-buttons">
          <Link to={`/donationf`} className="navdonate-link">
            <button className="navdonate-button">Donate Now</button>
          </Link>
          <Link to={`/useradmin`}>
            <button className="navlogin-button">Login</button>
          </Link>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;

