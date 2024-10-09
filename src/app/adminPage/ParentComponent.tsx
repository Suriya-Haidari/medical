// ParentComponent.tsx
import React, { useEffect, useId, useState } from "react";
import Notifications from "../emergency/Notif"; // Adjust the import path as necessary
import Cookies from "js-cookie"; // Ensure you have js-cookie installed

const ParentComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }
        const response = await fetch("http://localhost:3001/api/user/role", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserId(data.id); // Extract the userId from the response
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  console.log(userId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (userId) {
    return console.log(userId);
  }
  if (!userId) {
    return <div>No user ID found.</div>;
  }

  return (
    <div>
      <h1>Welcome User {userId}</h1>
      <Notifications userId={userId} />{" "}
      {/* Pass userId to the Notifications component */}
    </div>
  );
};

export default ParentComponent;
