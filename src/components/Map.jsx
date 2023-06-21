import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "200px",
  };

  const center = {
    lat: -9.3832,
    lng: -37.997,
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={center}
      containerStyle={containerStyle}
    >
      <Marker position={center} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
})(MapContainer);
