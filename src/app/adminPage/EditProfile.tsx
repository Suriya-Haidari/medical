"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserUpdate() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "", // Add password to the state
  });
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user data when the component is mounted
  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = Cookies.get("token"); // Use Cookies to get the token
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await axios.get(
          "http://localhost:3001/api/user/role",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { id, full_Name, email } = response.data;
        setUserId(id);
        setUserData({ fullName: full_Name, email, password: "" }); // Initialize password to empty
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError("An error occurred while fetching user data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to update user data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      toast.error("User ID not found");
      return;
    }

    try {
      const token = Cookies.get("token");
      await axios.put(`http://localhost:3001/api/users/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("User data updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("Failed to update user data:", error);
      toast.error("Error updating user data");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update User</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 dark:text-black">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-200">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-200">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
          />
          <small className="text-gray-500">
            Leave blank if you don't want to update the password
          </small>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update Info
        </button>
      </form>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
}
