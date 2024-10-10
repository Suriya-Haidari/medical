// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { useState } from "react";

// // Set container style for responsiveness
// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 34.3464572, // Replace with your latitude
//   lng: 62.1952466, // Replace with your longitude
// };

// const MapComponent = () => {
//   const [map, setMap] = useState(null);

//   const onLoad = (mapInstance) => {
//     setMap(mapInstance);
//   };

//   return (
//     <div className="w-full">
//       <LoadScript
//         googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
//       >
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           className="rounded-lg"
//         >
//           {/* Optional: Add a marker at the center */}
//           <Marker position={center} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default MapComponent;
