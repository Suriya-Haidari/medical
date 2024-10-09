import React, { useEffect, useState } from "react";
import axios from "axios";
import CreatingNewNotification from "./CreatingNewNotification";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState("");

  // Fetch notifications from the backend
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/notifications",
        {
          withCredentials: true, // Include cookies with the request
        }
      );
      // Filter only unread notifications
      const unreadNotifications = response.data.filter(
        (notification) => !notification.is_read
      );
      setNotifications(unreadNotifications);
    } catch (err) {
      console.error("Error fetching notifications:", err);
      setError("Failed to load notifications");
    }
  };

  // Mark notification as read
  const markAsRead = async (id) => {
    try {
      await axios.patch(
        `http://localhost:3001/api/notifications/${id}`,
        {},
        {
          withCredentials: true, // Include cookies with the request
        }
      );
      // Remove the marked notification from the displayed list
      setNotifications(
        notifications.filter((notification) => notification.id !== id)
      );
    } catch (err) {
      console.error("Error marking notification as read:", err);
      setError("Failed to mark notification as read");
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="notifications dark:bg-black p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <CreatingNewNotification setNotifications={setNotifications} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-600">No unread notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="unread dark:text-gray-200 bg-gray-200 dark:bg-neutral-800 p-4 bg-gray-100 rounded-md border border-gray-300 flex justify-between items-center"
            >
              <p>{notification.message}</p>
              <button
                onClick={() => markAsRead(notification.id)}
                className="ml-4 bg-teal-500 text-white rounded-lg px-1 py-1 hover:bg-teal-600 transition-colors"
              >
                Mark as Read
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
