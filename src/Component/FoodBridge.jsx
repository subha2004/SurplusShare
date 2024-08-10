// import React, { useState } from 'react';
// import './FoodBridge.css';

// function FoodBridge() {
//   const slides = [
//     {
//       title: "Donations",
//       description: "Your monthly donation will be successfully matched to a person in urgent need of food aid.",
//       imageUrl: "http://pluspng.com/img-png/png-donation-big-image-png-2400.png",
//       buttonText: "Donate Now"
//     },
//     {
//       title: "Complete Transparency on Your Donations",
//       description: "We will ensure that every donation reaches the person each month.",
//       imageUrl: "https://cdni.iconscout.com/illustration/premium/thumb/donating-fund-9535451-7740772.png",
//       buttonText: "Gift a Meal"
//     },
//     {
//       title: "Receive  Updates",
//       description: "You will come to know about the impact of your donation & the life you saved.",
//       imageUrl: "https://donorbox.org/nonprofit-blog/wp-content/uploads/2018/02/how-to-get-donations.jpg",
//       buttonText: "Get Updates"
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className='show-body'>
//       <div className="showcase-container">
//         <div className="showcase-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div className="showcase-content-container" key={index}>
//               <div className="showcase-content">
//                 <h2>{slide.title}</h2>
//                 <p>{slide.description}</p>
//                 <button className="donate-button" onClick={() => alert("Action for: " + slide.buttonText)}>{slide.buttonText}</button>
//               </div>
//               <div className="showcase-image">
//                 <img src={slide.imageUrl} alt={slide.title} />
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="showcase-indicators">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`indicator-button ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => setCurrentSlide(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodBridge;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './FoodBridge.css';

function FoodBridge() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const slides = [
    {
      title: "Donations",
      description: "Your monthly donation will be successfully matched to a person in urgent need of food aid.",
      imageUrl: "http://pluspng.com/img-png/png-donation-big-image-png-2400.png",
      buttonText: "Donate Now",
      link: "/donationf" // Set link for navigation
    },
    {
      title: "Complete Transparency on Your Donations",
      description: "We will ensure that every donation reaches the person each month.",
      imageUrl: "https://cdni.iconscout.com/illustration/premium/thumb/donating-fund-9535451-7740772.png",
      buttonText: "Gift a Meal",
      link: "/donationf" // Set link for navigation
    },
    {
      title: "Receive Updates",
      description: "You will come to know about the impact of your donation & the life you saved.",
      imageUrl: "https://donorbox.org/nonprofit-blog/wp-content/uploads/2018/02/how-to-get-donations.jpg",
      buttonText: "Get Updates",
      link: "/donationf" 
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className='show-body'>
      <div className="showcase-container">
        <div className="showcase-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="showcase-content-container" key={index}>
              <div className="showcase-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button
                  className="donate-button"
                  onClick={() => navigate(slide.link)} 
                >
                  {slide.buttonText}
                </button>
              </div>
              <div className="showcase-image">
                <img src={slide.imageUrl} alt={slide.title} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="showcase-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator-button ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodBridge;
