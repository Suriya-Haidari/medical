import React, { useState } from "react";
import Cookies from "js-cookie";

const CreateNotificationForm = ({ setNotifications }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token found.");
      }

      const response = await fetch("http://localhost:3001/api/notifications", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create notification.");
      }

      const newNotification = await response.json();
      setNotifications((prev) => [newNotification, ...prev]);
      setMessage("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1 className="w-11/12 font-bold flex justify-center items-center">
        Create a new notification:
      </h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div>
          <br />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter notification message"
            className="p-2 border rounded mb-2 w-full bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Create Notification
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </>
  );
};

export default CreateNotificationForm;
