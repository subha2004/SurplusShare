
import React from 'react';
import { Carousel, CarouselCaption } from 'react-bootstrap';
import './Carousel.css';

const CarouselComponent = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-overlay'></div>
      <div className='carousel-content'>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.cry.org/wp-content/uploads/health-and-nutrition-for-children.jpg"
              alt="First slide"
            />
            <CarouselCaption>
              <h1>FEEDING ASPIRATION</h1>
            </CarouselCaption>
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.cry.org/wp-content/themes/cry/images/children-banner.jpg"
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 carousel-image"
              src="https://anuaggarwalfoundation.org/wp-content/uploads/2022/10/aaf-feed-children-living-below-the-poverty-line-1.jpg"
              
              alt="Third slide"
            />
           
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 carousel-image"
              src="https://i.pinimg.com/564x/ab/09/dc/ab09dcda1c0a44b66aa97ce9e8c6c772.jpg"
              alt="Fourth slide"
            />
            
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    
  );
};

export default CarouselComponent;
