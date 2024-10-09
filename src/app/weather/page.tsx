// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloud, faSun } from "@fortawesome/free-solid-svg-icons";

// export default function Home() {
//   const [weather, setWeather] = useState(null);
//   const [city, setCity] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch weather data based on user input or location
//   const fetchWeather = async (location) => {
//     setLoading(true);
//     try {
//       let url;

//       // If a city is entered, fetch weather by city
//       if (city) {
//         url = `http://localhost:3001/api/weather?city=${city}`;
//       } else if (location) {
//         // If no city is entered and location is available, fetch weather by coordinates
//         const { latitude, longitude } = location.coords;
//         url = `http://localhost:3001/api/weather?lat=${latitude}&lon=${longitude}`;
//       }

//       if (url) {
//         const response = await axios.get(url);
//         setWeather(response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//     setLoading(false);
//   };

//   // Automatically fetch weather data using geolocation when the component mounts
//   useEffect(() => {
//     if (!city) {
//       navigator.geolocation.getCurrentPosition(
//         (location) => fetchWeather(location),
//         (error) => console.error("Error getting location:", error)
//       );
//     }
//   }, [city]);

//   return (
//     <div className="flex flex-col items-center dark:bg-neutral-800 justify-center p-6 dark:text-gray-500">
//       {/* <h1 className="text-3xl font-bold mb-6">Weather App</h1> */}
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         className="p-2 border border-gray-300 rounded-lg mb-4"
//       />
//       <button
//         onClick={() => fetchWeather(null)}
//         disabled={loading}
//         className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//       >
//         {loading ? "Loading..." : "Get Weather"}
//       </button>

//       {weather && (
//         <div className="bg-white p-6 mt-6 rounded-lg shadow-md text-center w-full max-w-sm  dark:bg-neutral-800">
//           <h2 className="text-2xl font-bold mb-2">Weather in {weather.name}</h2>
//           <div className="flex justify-center items-center mb-4">
//             {/* Conditional display of icons based on weather */}
//             {weather.weather[0].main.toLowerCase().includes("cloud") ? (
//               <FontAwesomeIcon
//                 icon={faCloud}
//                 className="text-blue-500"
//                 size="4x"
//               />
//             ) : (
//               <FontAwesomeIcon
//                 icon={faSun}
//                 className="text-yellow-500"
//                 size="4x"
//               />
//             )}
//           </div>
//           <p className="text-xl">Temperature: {weather.main.temp}°C</p>
//           <p className="text-lg text-gray-500 capitalize">
//             {weather.weather[0].description}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSun } from "@fortawesome/free-solid-svg-icons"; // Import the cloud and sun icons

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch weather data based on user input or location
  const fetchWeather = useCallback(
    async (location) => {
      setLoading(true);
      try {
        let url;

        // If a city is entered, fetch weather by city
        if (city) {
          url = `http://localhost:3001/api/weather?city=${city}`;
        } else if (location) {
          // If no city is entered and location is available, fetch weather by coordinates
          const { latitude, longitude } = location.coords;
          url = `http://localhost:3001/api/weather?lat=${latitude}&lon=${longitude}`;
        }

        if (url) {
          const response = await axios.get(url);
          setWeather(response.data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
      setLoading(false);
    },
    [city]
  ); // Add city to dependencies

  // Automatically fetch weather data using geolocation when the component mounts
  useEffect(() => {
    if (!city) {
      navigator.geolocation.getCurrentPosition(
        (location) => fetchWeather(location),
        (error) => console.error("Error getting location:", error)
      );
    }
  }, [city, fetchWeather]); // Add fetchWeather to dependencies

  return (
    <div className="flex flex-col items-center dark:bg-neutral-800 justify-center p-6 dark:text-gray-500">
      {/* <h1 className="text-3xl font-bold mb-6">Weather App</h1> */}
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={() => fetchWeather(null)}
        disabled={loading}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        {loading ? "Loading..." : "Get Weather"}
      </button>

      {weather && (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md text-center w-full max-w-sm dark:bg-neutral-800">
          <h2 className="text-2xl font-bold mb-2">Weather in {weather.name}</h2>
          <div className="flex justify-center items-center mb-4">
            {/* Conditional display of icons based on weather */}
            {weather.weather[0].main.toLowerCase().includes("cloud") ? (
              <FontAwesomeIcon
                icon={faCloud}
                className="text-blue-500"
                size="4x"
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                className="text-yellow-500"
                size="4x"
              />
            )}
          </div>
          <p className="text-xl">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg text-gray-500 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}
