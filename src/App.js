



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConditionalNavbar from './Component/ConditionalNavbar'; // Import the updated component
import Mission from './Component/Mission';
import Vission from './Component/Vission';
import OrgRegister from './Component/OrgRegister';
import OrgLogin from './Component/OrgLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Component/HomePage';
import FeedingPro from './Component/Feedingpro';
import Scheme from './Component/Scheme';
import VolunteerRegistration from './Component/VolunteerRegistration';
import VolunteerLogin from './Component/VolunteerLogin';
import Dashboard from './Component/Dashboard';
import Aboutus from './Component/Aboutus';
import DonarLogin from './Component/DonarLogin';
import DonarRegister from './Component/DonarRegistration';
import FoodDonate from './Component/FoodDonate';
import RegisterHome from './Component/RegisterHome';
import Ourwork from './Component/Ourwork';
import GroceryDonate from './Component/GroceryDonate';
import ClothDonate from './Component/ClothDonate';
import DonationPage from "./Component/DonationPage";
import Admin from './Component/Admin';
import CardPagee from './Component/CardPagee';
import AdminDashboard from './Component/AdminDashboard';
import ManageOrganizations from './Component/ManageOrganizations';
import ManageVolunteer from './Component/ManageVolunteer';
import ManageDonor from './Component/ManageDonor';
import ManageFoodDonation from './Component/ManageFoodDonation';
import ManageGroceryDonation from './Component/ManageGroceryDonation';
import ManageClothDonation from './Component/ManageClothDonation';
import Hyprocess from './Component/Hyprocess';
import ContactUs from './Component/Contactus';
import VolunteeringCarousel from './Component/VolunteeringCarousel';






const App = () => {
  return (
    <Router>
      <div>
        <ConditionalNavbar /> {/* Use the updated ConditionalNavbar component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/misionp" element={<Mission />} />
          <Route path="/vission" element={<Vission />} />
          <Route path="/orgreg" element={<OrgRegister />} />
          <Route path="/orglogin" element={<OrgLogin />} />
          <Route path="/feedingprog" element={<FeedingPro />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/volreg" element={<VolunteerRegistration />} />
          <Route path='/volunteerlogin' element={<VolunteerLogin />} />
          <Route path='/dashb' element={<Dashboard />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/donarlog' element={<DonarLogin />} />
          <Route path='/donRegister' element={<DonarRegister />} />
          <Route path='/donate_food' element={<FoodDonate />} />
          <Route path='/reghome' element={<RegisterHome />} />
          <Route path='/donationf' element={<DonationPage />} />
          <Route path='/ourwork' element={<Ourwork />} />
          <Route path='/grocery' element={<GroceryDonate />} />
          <Route path='/cloth' element={<ClothDonate />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/useradmin' element={<CardPagee />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/manageorg" element={<ManageOrganizations />} />
          <Route path="/managevol" element={<ManageVolunteer />} />
          <Route path="/managedon" element={<ManageDonor />} />
          <Route path="/mfooddonate" element={<ManageFoodDonation />} />
          <Route path="/mgrocerydonate" element={<ManageGroceryDonation />} />
          <Route path="/mclothdonate" element={<ManageClothDonation />} />
          <Route path="/hyprocess" element={<Hyprocess />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/volcarousel" element={<VolunteeringCarousel />} />
         
          
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;



