"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Cookies from "js-cookie";
import Search from "./Search";

export default function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users based on search
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await axios.get("http://localhost:3001/api/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data);
        setFilteredUsers(response.data); // Initialize filtered users
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("An error occurred while fetching users");
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleSearch = (searchValue: string) => {
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleSuggestionClick = (suggestion: string) => {
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(suggestion.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const adminHandleDelete = async (userId) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.error("No token found in cookies.");
        return;
      }

      const response = await axios.delete(
        `http://localhost:3001/admin/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        alert("User deleted successfully.");
        setUsers(users.filter((user) => user.id !== userId));
        setFilteredUsers(filteredUsers.filter((user) => user.id !== userId)); // Update filtered list
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("An error occurred while deleting the user.");
    }
  };

  const handleVerify = async (userId) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.error("No token found in cookies.");
        return;
      }

      const response = await axios.post(
        "http://localhost:3001/api/promotetoadmin",
        { userId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert(`User with ID ${userId} has been promoted to admin.`);
        const updatedUsers = users.map((user) =>
          user.id === userId ? { ...user, role: "admin" } : user
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
      }
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      alert("Failed to promote the user to admin.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-4xl mx-4 dark:bg-black dark:text-gray-200 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Panel</h1>
        <p className="text-center  mb-4">
          As a manager, you can view all user accounts, promote users to admin,
          and delete accounts as necessary. Use the options below to manage your
          platform users effectively.
        </p>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <br />

        {/* Search component */}
        <Search
          onSearch={handleSearch}
          suggestions={users.map((user) => user.email)} // Pass suggestions as user emails
          onSuggestionClick={handleSuggestionClick}
        />
        <br />
        <h2 className="text-xl font-semibold mb-4 text-center">All Users</h2>
        {/* Responsive Card View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="border  dark:bg-neutral-800 dark:text-gray-200 rounded-lg p-4 bg-white shadow-md"
            >
              <h3 className="text-gray-800 font-semibold truncate dark:text-gray-200">
                {user.email}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Role: {user.role}
              </p>
              <div className="mt-2 flex flex-col space-y-2">
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleVerify(user.id)}
                    className="bg-teal-500 text-white hover:bg-teal-600 py-2 px-4 rounded transition duration-200 ease-in-out text-sm flex items-center justify-center"
                  >
                    Verify as Admin
                  </button>
                )}
                <button
                  onClick={() => adminHandleDelete(user.id)}
                  className="bg-gray-200 text-black hover:bg-gray-300 py-2 px-4 rounded flex items-center justify-center transition duration-200 ease-in-out text-sm"
                >
                  <FaTrash className="text-sm mr-1" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
