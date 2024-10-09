import { useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const client = new WebSocket("ws://localhost:3002");

    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // Check if the message is of the type 'new_email'
      if (data.type === "new_email") {
        setNotifications((prev) => [...prev, data.notification]);
      }
    };

    client.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      client.close(); // Clean up WebSocket on component unmount
    };
  }, []);

  return (
    <div className="notifications bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mt-8">
      <h2 className="text-2xl text-black/80 text-center mb-4">Appointments</h2>
      <ul className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li
              key={index}
              className="bg-gray-100 border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-black">
                  {notification.appointment_count}/20
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(notification.date).toLocaleString()}{" "}
                  {/* Assuming there's a date field */}
                </span>
              </div>
              <p className="mt-2">
                <strong>{notification.full_name}</strong>:{" "}
                {notification.message}
              </p>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No notifications yet.</li>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
