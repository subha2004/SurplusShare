// src/Component/Map.jsx
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
};

const Map = ({ center }) => {
  return (
    <MapContainer center={center} zoom={10} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationUpdater center={center} />
      <Marker position={center}>
        <Popup>
          {`Latitude: ${center.lat}, Longitude: ${center.lng}`}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

