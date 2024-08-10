import React from 'react';
import './ImpactPage.css'; // Make sure to import the CSS file

function ImpactPage() {
  return (
    <div className='impact-body'>
    <div className="impact-container">
      <div className="header">
        <h1>Our Impact</h1>
      </div>
      <div className="stats">
        <div className="stat-item">
          <p>1760+</p>
          <p>Donors for Food Aid</p>
        </div>
        <div className="stat-item">
          <p>42,190+</p>
          <p>Members Donated</p>
        </div>
        <div className="stat-item">
          <p>670+</p>
          <p>People Fed</p>
        </div>
        <div className="stat-item">
          <p>540</p>
          <p>Meals Delivered</p>
        </div>
      </div>
      <div className="map">
      
        <img src="https://3.imimg.com/data3/KO/YG/MY-9646804/tamilnadu-tourist-spots-1000x1000.gif" alt="Impact Map" />
        <p>SurplusShare is more than just a platform—it's a catalyst for change. By connecting surplus food from event organizers and individuals with those in need, we’re making a tangible difference in communities across the region. Here’s how SurplusShare is creating a lasting impact.</p>
       
      </div>
    </div>
    </div>
  );
}

export default ImpactPage;
