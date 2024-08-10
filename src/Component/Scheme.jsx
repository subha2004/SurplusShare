
import React from 'react';
import './Scheme.css';
// import image1 from '../images/image1.jpeg'; 
// import image2 from '../images/image2.jpeg';
// import image3 from '../images/image3.jpeg';
import CardPage from './CardPage';
import NGOCarousel from './NgoCarousel';

const Scheme = () => {
  return (
    <div className='ssbody'>
      {/* <h1>7'O CLOCK SCHEME</h1>
    <div className="scontainer">
      <div className="scard">
        <img src={image1} alt="Meal Distruibution" className="sround-image" />
        <h2>Meal Distribution</h2>
        <p>Every day at 7 PM, our network of dedicated volunteers distributes freshly prepared meals to the needy in various communities.
           This consistent timing helps ensure that those in need know when and where they can rely on getting their evening meal, creating a sense of security and stability.
           The meals are sourced from surplus food collected from event organizers, restaurants, and individuals who have extra food to share. This not only helps in reducing food wastage but also ensures that perfectly good food
            reaches those who need it the most.</p>
        
      </div>
      <div className="scard">
        <img src={image2} alt="Volunteer action" className="sround-image" />
        <h2>Volunteer Involment</h2>
        <p>Volunteers pick up extra food from donors and bring it to designated distribution points.
        For some donations, volunteers help prepare meals to ensure they are nutritious and ready for distribution.
        Volunteers distribute meals to various locations, ensuring that all needy individuals get their food on time.
        </p>
      </div>
      <div className="scard">
        <img src={image3} alt="Donation" className="sround-image" />
        <h2>Donation-Funded Initive</h2>
        <p>The cost of running the 7 O'Clock Scheme is managed through generous donations from individuals and organizations who believe in the cause. These donations help cover the cost of logistics, packaging, and any additional ingredients needed to prepare the meals.
         This system incentivizes continuous involvement and recognizes the efforts of those who 
        help make the 7 O'Clock Scheme a success.Thus, helps build a stronger, more caring community. It not only addresses hunger but also fosters a spirit of giving and volunteering among community members.
        </p>
      </div>
      
    </div> */}

    <CardPage />
    <NGOCarousel />
    </div>
    
  );
}

export default Scheme;
