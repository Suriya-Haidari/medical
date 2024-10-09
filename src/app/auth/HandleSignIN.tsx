import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

const compareUserInfo = (existingUser, newUser) => {
  if (existingUser.email === newUser.email) {
    console.log("User already exists.");
  } else {
    console.log("New user.");
  }
};

export default function HandleSignIn() {
  const handleGoogleLogin = async () => {
    try {
      // Redirect to your backend OAuth Google route
      window.location.href = "http://localhost:3001/auth/google";

      // Assuming after authentication, the backend sends user details
      const response = await axios.post("http://localhost:3001/token", {
        withCredentials: true,
      });

      if (response.status === 201) {
        Cookies.set("authToken", response.data.token, {
          expires: 7,
          path: "/",
        });
        console.log("Token set in cookies");

        // Call compareUserInfo to check if the user is new or already exists
        const newUser = { email: "newUserEmail@example.com" }; // Replace with actual user info from Google response
        const existingUser = await axios.get("http://localhost:3001/getUser", {
          params: { email: newUser.email },
        });

        compareUserInfo(existingUser.data, newUser);
      }
    } catch (error) {
      console.error("Failed to sign in. Please try again.", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Sign In with Google
      </h1>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
      >
        <svg
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        ></svg>
        Sign In with Google
      </button>
    </div>
  );
}
