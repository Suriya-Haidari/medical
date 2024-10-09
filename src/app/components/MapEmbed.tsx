import React from "react";
import "./style.css";

const MapEmbed = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg h-80 sm:h-96 lg:h-96 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.4730145777767!2d62.18917197444954!3d34.36388780121264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce6bde133bff9%3A0xa3253830809fc07d!2sMehraban%20hospital!5e0!3m2!1sen!2s!4v1727695545982!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapEmbed;
