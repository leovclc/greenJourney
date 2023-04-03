// TrafficMap.js
import React from "react";
import { GoogleMap, LoadScript, TrafficLayer } from "@react-google-maps/api";
import "./TrafficMap.module.css";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -37.8136,
  lng: 144.9631,
};

const apiKey = "AIzaSyC23ZF9voWG9vvdsTx1--xV-RI_ArHYjsA";

const TrafficMap = () => {
  return (
    <div className="traffic-map-container">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
        >
          <TrafficLayer autoRefresh />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default TrafficMap;
