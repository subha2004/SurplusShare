import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialCardsPage.css';

const SpecialCard = ({ icon, title, description, link }) => {
  return (
    <div className="special-card">
      <Link to={link} className="card-link">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default SpecialCard;
