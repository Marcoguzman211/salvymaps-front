import GoogleMapReact from "google-map-react";
import { useState } from "react";
const Map = () => {
  const [coordinates, setCoordinates] = useState({ lat: 48.8566, lng: 2.3522 });
  return (
    <div className="w-2/3">
      <GoogleMapReact
        // eslint-disable-next-line no-undef
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log("onChange", e);
        }}
        onClick={(e) => {
          console.log("click", e);
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
