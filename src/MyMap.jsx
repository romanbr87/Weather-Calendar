import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./styles.scss";

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
// } from "https://cdn.esm.sh/react-leaflet";

export default function App() {
  return (
    <MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}