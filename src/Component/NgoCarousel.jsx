import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './NgoCarousel.css'; // Your custom CSS for additional styling

const NGOCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,          
    autoplaySpeed: 1500,     
 };

  return (
    <div className="ngo-carousel">
      <h2>Our NGO Partners</h2>
      <Slider {...settings}>
        <div className="ngo-item">
          <img src="https://thedesignlove.com/wp-content/uploads/2020/11/Best-NGO-Logo-Designs-22.jpg" alt="Katha" />
         
        </div>
        <div className="ngo-item">
          <img src="https://cdn.dribbble.com/users/1039637/screenshots/4326512/media/d489a752a70b322e0f30e9c79543309b.png" alt="Lotus Petal Charitable Foundation" />
          
        </div>
        <div className="ngo-item">
          <img src="https://thedesignlove.com/wp-content/uploads/2020/11/Best-NGO-Logo-Designs-27.jpg" alt="Parikrma Centre for Learning" />
         
        </div>
        <div className="ngo-item">
          <img src="https://tse3.mm.bing.net/th?id=OIP.MQMN2P-OW9ivYrjqYwL-fwHaD5&pid=Api&P=0&h=180" alt="Parivaar" />
          
        </div>
        <div className="ngo-item">
          <img src="https://thedesignlove.com/wp-content/uploads/2020/11/Best-NGO-Logo-Designs-19.jpg?is-pending-load=1" alt="Parivaar" />
         
        </div>
        <div className="ngo-item">
          <img src="https://logodix.com/logo/1788495.jpg" alt="Parivaar" />
         
        </div>
        
        
      </Slider>
    </div>
  );
};

export default NGOCarousel;
