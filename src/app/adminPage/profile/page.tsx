"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Cookies from "js-cookie";
import EditProfile from "../EditProfile";

export default function UserProfile() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const profileResponse = await axios.get(
          "http://localhost:3001/api/user/role",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { email, role, created_at, full_Name, profile_picture, id } =
          profileResponse.data;

        const formattedDate = new Date(created_at)
          .toISOString()
          .split("T")[0]
          .replace(/-/g, "/");

        const response = await axios.get("http://localhost:3001/api/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data);
        setCurrentUser({
          id,
          email: email,
          role: role,
          created_at: formattedDate,
          full_Name: full_Name,
          profile_picture: profile_picture,
        });
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("An error occurred while fetching users");
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserProfile();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        console.error("No token found in cookies.");
        return;
      }

      const response = await axios.delete(
        `http://localhost:3001/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        alert("User deleted successfully.");
        setUsers(users.filter((user) => user.id !== userId));
        Cookies.remove("token");
        window.location.href = "/signin";
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      setError(
        "An error occurred while deleting the user. Refresh the page and try again."
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 flex items-center justify-center bg-gray-100 dark:text-black dark:bg-neutral-900 dark:text-gray-200">
      <div className="  bg-white dark:bg-neutral-800 text-black dark:text-white max-w-4xl w-full mx-auto rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {currentUser && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Your Information</h2>
            <table className="min-w-full  bg-white dark:bg-neutral-800 text-black dark:text-white border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Label
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    Name
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {currentUser.full_Name}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    Email
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {currentUser.email}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    Role
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {currentUser.role}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    Account Created
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {currentUser.created_at}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => setIsEditing((prev) => !prev)}
                className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded flex items-center"
              >
                <FaEdit className="mr-2" />
                Edit Profile
              </button>
              <button
                onClick={() => handleDelete(currentUser.id)}
                className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded flex items-center"
              >
                <FaTrash className="mr-2" />
                Delete Account
              </button>
            </div>
          </div>
        )}

        {isEditing && <EditProfile onClose={() => setIsEditing(false)} />}
      </div>
    </div>
  );
}
