import React from 'react';
import SpecialCard from './SpecialCard';
import './SpecialCardsPage.css';

const SpecialCardsPage = () => {
  return (
    <div className='spclbody'>
      <div className="container">
        <SpecialCard
          icon="🏠"
          title="Get in touch"
          description="Donors with surplus food/resources can reach us at +91 9087790877"
          link="/hyprocess"
        />
        <SpecialCard
          icon="🔍"
          title="Quality check"
          description="Excess Food will be checked based on our Food Safety and Standard Guidelines"
          link="/hyprocess"
        />
        <SpecialCard
          icon="📍"
          title="Locate"
          description='We spot the nearest "Hunger Spot" which is the most underserved areas'
          link="/hyprocess"
        />
        <SpecialCard
          icon="🚚"
          title="Deliver"
          description="Excess food is distributed to needy people with Care."
          link="/hyprocess"
        />
      </div>
    </div>
  );
};

export default SpecialCardsPage;
