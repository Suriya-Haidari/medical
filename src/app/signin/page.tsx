"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/slices/authSlice";
import Cookies from "js-cookie";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Log the payload being sent to the API
      console.log({ email, password });

      const response = await axios.post(
        "http://localhost:3001/api/signin",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        // Store token in cookie after successful sign-in
        Cookies.set("token", response.data.token, {
          expires: 1, // Token expires in 1 days
          path: "/",
          sameSite: "Lax",
        });

        dispatch(setAuthenticated(true));
        router.push("/emergency");
      } else {
        console.error("Login failed.");
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error(error.response?.data || "Failed to log in.");
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col p-4 items-center justify-center w-full section bg-red">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto text-black"
      >
        <h2 className="text-2xl mb-4 text-center text-black dark:text-gray-200">
          Sign <span className="text-teal-500">In</span>
        </h2>
        <div className="mb-8">
          <label className="block text-black dark:text-gray-200">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black dark:text-gray-200">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </div>
        <br />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-teal-500 text-gray-200 hover:bg-teal-600 py-2 rounded"
        >
          Sign In
        </button>

        <a
          href="/register"
          className="block mt-4 text-teal-500 dark:text-gray-200"
        >
          Don't have an account? Sign up here
        </a>
      </form>
    </div>
  );
};

export default SignInForm;
