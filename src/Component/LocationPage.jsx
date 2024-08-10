// src/Component/LocationPage.jsx
import React, { useState } from 'react';
import Map from './Map';
import './LocationPage.css';

const locations = {
  coimbatore: { lat: 11.0168, lng: 76.9558 },
  erode: { lat: 11.3404, lng: 77.7176 },
  tirupur: { lat: 11.3414, lng: 77.3588 },
  dharmapuri: { lat: 12.1264, lng: 78.1711 },
  salem: { lat: 11.6633, lng: 78.1684 },
  karur: { lat: 10.9639, lng: 78.0978 },
};

const LocationPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations.coimbatore);

  const handleChangeLocation = (e) => {
    setSelectedLocation(locations[e.target.value]);
  };

  return (
    <div className='locbody'>
    <div className="location-page">
      <h1>Select a District</h1>
      <select onChange={handleChangeLocation} className="district-select">
        <option value="coimbatore">Coimbatore</option>
        <option value="erode">Erode</option>
        <option value="tirupur">Tirupur</option>
        <option value="dharmapuri">Dharmapuri</option>
        <option value="salem">Salem</option>
        <option value="karur">Karur</option>
      </select>
      <Map center={selectedLocation} />
    </div>
    </div>
  );
};

export default LocationPage;

