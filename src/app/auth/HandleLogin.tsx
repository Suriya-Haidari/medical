import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function HandleGoogleLogin() {
  // Function to handle Google login
  const handleGoogleLogin = async () => {
    try {
      // Redirect to your backend OAuth Google route
      window.location.href = "http://localhost:3001/auth/google"; // Start Google's OAuth login process
    } catch (error) {
      console.error("Failed to initiate Google login", error);
    }
  };

  // This function should be called after the callback from Google
  const handleCallback = async () => {
    try {
      // Backend sends the token to this endpoint after successful authentication
      const response = await axios.get(
        "http://localhost:3001/auth/google/callback",
        {
          withCredentials: true, // This sends cookies with the request, if needed
        }
      );

      if (response.status === 200) {
        // Set token in cookies after a successful login
        Cookies.set("token", response.data.token, {
          expires: 1, // Token expires in 1 days
          path: "/",
          sameSite: "Lax",
        });
        console.log("Token cookie set:", token); // Log to confirm cookie is set
      }
    } catch (error) {
      console.error("Failed to handle callback", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600"
      >
        <svg
          className="w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.8 0 6.5 1.6 8 2.9l5.9-5.9C34.3 3.5 29.7 1.5 24 1.5 14.9 1.5 7.4 7.8 4.7 16.1l6.9 5.4C13.4 13.2 18.3 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.1 24.5c0-1.3-.1-2.6-.3-3.8H24v7.2h12.4c-.5 2.6-2.1 4.8-4.3 6.2l6.8 5.3c4-3.6 6.2-9 6.2-14.9z"
          />
          <path
            fill="#FBBC05"
            d="M11.6 28.3c-.9-2.5-.9-5.1 0-7.6l-6.9-5.4c-2.6 5.2-2.6 11.4 0 16.6l6.9-5.4z"
          />
          <path
            fill="#EA4335"
            d="M24 46.5c5.7 0 10.6-1.9 14.2-5.3l-6.8-5.3c-1.9 1.3-4.3 2.1-7.3 2.1-5.7 0-10.6-3.8-12.4-9.1l-6.9 5.4c2.7 8.3 10.2 14.6 19.2 14.6z"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}
