import React, { useEffect } from "react";
import "./Notification.css"; // Import your CSS for animations

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close the notification after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      {message}
      <button className="close-button" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Notification;
