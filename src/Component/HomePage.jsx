
import React from 'react';
import CarouselComponent from './CarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mission from './Mission';
import Vission from './Vission';
import Footer from './Footer';
import Feedingpro from './Feedingpro';
import Scheme from './Scheme';
import Dashboard from './Dashboard';
import RegisterHome from './RegisterHome';
import ImpactPage from './ImpactPage';
import SpecialCardsPage from './SpecialCardsPage';
// import FoodBridge from './FoodBridge';



const HomePage = () => {
  return (
    <div className="home-page">
      <CarouselComponent />
      <Mission />
      <Vission />
      {/* <ImpactPage /> */}
      <Feedingpro />
      
      <Scheme />
      
      <SpecialCardsPage />
      <Dashboard />
      <RegisterHome />
      <Footer />
    </div>
  );
};

export default HomePage;
