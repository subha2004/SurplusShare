
import React from 'react';

import './RegisterHome.css';


const RegisterHome = () => {
  return (
    <div className='rhbody'>
      
      <div className="rhcontainer">
        
        <div className="rhheading">
        
          <h2 className="rhreghead">REGISTRATION</h2>
          
        </div>
        <div className="rhcards">
          <div className="rhcard1">
            <h1 className="rhregorg">
              For <span className="rhcard_hed">Organizations</span>
            </h1>
            <p className="rhdes">
            “Together, we can build stronger communities and create lasting change. Register your organization today and partner with us to make a difference in the lives of those in need.”
            </p>
            <form action="/orgreg">
              <button type="submit">Register</button>
            </form>
          </div>
          <div className="rhcard2">
            <h1 className="rhregorg">
              For <span className="rhcard_hed">Volunteer</span>
            </h1>
            <p className="rhdes2">
            “The best way to find yourself is to lose yourself in the service of others” - Mahatma Gandhi Ready to serve the needy! Then, register here to join hands with your local food sharing organisations.
            </p>
            <form action="/donRegister">
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default RegisterHome;

