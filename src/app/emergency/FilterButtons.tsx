"use client";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function FilterButtons({ filter, setFilter }) {
  const dispatch = useDispatch();
  const [role, setRole] = useState<string>("user");

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await axios.get(
          "http://localhost:3001/api/user/role",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRole(response.data.role); // Set role based on response
      } catch (error) {
        console.error("Error fetching user role:", error);
        setRole("user"); // Default to "user" if there's an error bez in default all of the users have user role and manager can verify admin
      }
    };

    fetchUserRole();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={() => dispatch(setFilter("hospital"))}
        className={`mx-2 px-4 py-2 rounded ${
          filter === "hospital"
            ? "bg-teal-500 text-white"
            : "bg-teal-400 text-black hover:bg-teal-300"
        }`}
      >
        Hospital News
      </button>

      {(role === "admin" || role === "manager") && (
        <>
          <button
            onClick={() => dispatch(setFilter("doctors"))}
            className={`mx-2 px-4 py-2 rounded ${
              filter === "doctors"
                ? "bg-blue-500 text-white"
                : "bg-blue-200 text-black hover:bg-blue-300"
            }`}
          >
            Doctors News
          </button>

          <button
            onClick={() => dispatch(setFilter("sick"))}
            className={`mx-2 px-4 py-2 rounded ${
              filter === "sick"
                ? "bg-red-500 text-white"
                : "bg-red-200 text-black hover:bg-red-300"
            }`}
          >
            Sick News
          </button>
        </>
      )}
    </div>
  );
}
