import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const ConditionalNavbar = () => {
  const location = useLocation();

  
  const noNavbarRoutes = [
    '/admindashboard',
    '/manageorg',
    '/managevol',
    '/managedon',
    '/mfooddonate',
    '/mgrocerydonate',
    '/mclothdonate',
    '/useradmin'
  ];

  // Check if the current path is in the noNavbarRoutes array
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return showNavbar ? <Navbar /> : null;
};

export default ConditionalNavbar;
