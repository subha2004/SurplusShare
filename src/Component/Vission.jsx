



// import React from 'react';
// import './Vission.css';

// const Vission = () => {
//   return (
//     <div className='vbody' id="vision">
//       <div className='vvbody'>
//       <div className="vision-container">
//         <div className="vision-section">
//           <div className="vision-image">
//             <img src="https://www.compassion.com/multimedia/hungry-children.jpg" alt="Vision" />
//           </div>
//           <div className="vision-text">
//             <h2>Our Vision</h2>
//             <p>
//             Our vision for SurplusShare is to create a seamless and efficient platform that bridges the gap between surplus food and those in need, ensuring that no meal goes to waste and no individual goes hungry. By partnering with event organizers, individuals, NGOs, and volunteers, we aim to build a community-driven network that facilitates the redistribution of excess food to the needy. Our unique 7 o'clock scheme guarantees that mostly evening at 7, food is reliably provided to those who depend on it, supported by donations and delivered by our volunteers. Beyond providing meals,it empowers volunteers and contributors with a points-based system, rewarding their efforts with redeemable benefits. 
//             </p>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Vission;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Vission.css';

const Vission = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className='vbody' id="vision">
      <div className='vvbody'>
        <div className="vision-container" data-aos="fade-up">
          <div className="vision-section">
            <div className="vision-image">
              <img src="https://www.compassion.com/multimedia/hungry-children.jpg" alt="Vision" />
            </div>
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
                Our vision for SurplusShare is to create a seamless and efficient platform that bridges the gap between surplus food and those in need, ensuring that no meal goes to waste and no individual goes hungry. By partnering with event organizers, individuals, NGOs, and volunteers, we aim to build a community-driven network that facilitates the redistribution of excess food to the needy.  Beyond providing meals, it empowers volunteers and contributors with a points-based system, rewarding their efforts with redeemable benefits. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vission;
