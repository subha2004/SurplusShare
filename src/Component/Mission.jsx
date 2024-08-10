
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Mission.css';

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='mbody'>
      <div className='mr'>
        <div className="mission-container" data-aos="fade-up">
          <div className="mission-section">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                Our mission is simple yet powerful: to reduce food waste and ensure that every meal finds its way to someone who needs it. By facilitating the redistribution of surplus food from events and individuals to those who are struggling, we not only combat hunger but also support a more sustainable food system. Our dedicated team of volunteers and supporters work tirelessly to ensure that food is not wasted and that it reaches those who need it most.
              </p>
            </div>
            <div className="mission-image">
              <img src="https://t3.ftcdn.net/jpg/05/98/71/58/360_F_598715864_cPpOCBHDGafqkoOlSJSRJ8OPBbZ8gEjV.jpg" alt="Mission" />
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default Mission;
