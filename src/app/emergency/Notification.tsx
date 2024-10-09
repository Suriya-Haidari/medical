import "./style.css";
import React, { useEffect, useState } from "react";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Simulate user registration
    const simulateUserRegistration = () => {
      const newMessage = "User has registered successfully!";
      setMessage(newMessage);
      setIsVisible(true);
      localStorage.setItem("notificationMessage", newMessage);

      // Automatically hide the notification after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
        localStorage.removeItem("notificationMessage"); // Clear notification from localStorage
      }, 3000);
    };

    // Check if there's a notification message in localStorage
    const savedMessage = localStorage.getItem("notificationMessage");
    if (savedMessage) {
      setMessage(savedMessage);
      setIsVisible(true);

      // Automatically hide the notification after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
        localStorage.removeItem("notificationMessage"); // Clear notification from localStorage
      }, 3000);
    } else {
      // Simulate a user registration
      simulateUserRegistration();
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.removeItem("notificationMessage");
  };

  return (
    <div
      className={`absolute top-5 right-5 transition-opacity duration-500 ${
        isVisible ? "opacity-100 z-50" : "opacity-0"
      }`}
    >
      {isVisible && (
        <div className="p-4 bg-green-100 border border-green-300 rounded notification">
          <strong>Notification:</strong> {message}
          <button onClick={handleDismiss} className="ml-4 text-red-500">
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
