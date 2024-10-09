import React from "react";
import Weather from "../weather/page";
import MapEmbed from "./MapEmbed";

const Footer = () => {
  const linkGroups = [
    {
      title: "Website Contents",
      links: [
        { text: "Home", url: "/home" },
        { text: "About", url: "/about" },
        { text: "Department", url: "/department" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "F&Q", url: "/faq" },
        { text: "Contact Us", url: "contactUs" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Our Services", url: "/services" },
        { text: "Emergency", url: "/emergency" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-200 dark:bg-neutral-800 text-black dark:text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row: Links divided into 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {linkGroups.map((group, index) => (
            <div key={index} className="flex flex-col">
              {group.title && (
                <h4 className="font-bold mb-2 text-center text-xl">
                  {group.title}
                </h4>
              )}
              <div className="flex flex-col space-y-2 items-center">
                {group.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="text-black dark:text-gray-300 hover:text-gray-400 text-lg"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <hr className="border-gray-400 my-0 w-full" /> */}
        <br />
        <br />
        {/* Second Row: Weather and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Weather Component */}
          <div className="flex justify-center">
            <Weather />
          </div>

          {/* Right Column: Google Map */}
          <div className="flex justify-center">
            <MapEmbed />
          </div>
        </div>
        <br />
        <br />
        <hr className="border-gray-400 my-0 w-full" />
        <br />
        <br />
        <br />
        <div className="text-sm font-bold text-center mb-4">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
