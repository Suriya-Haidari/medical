"use client";
// @ts-nocheck

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/slices/authSlice";
import { RootState } from "../store/store";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/auth/status",
          {
            withCredentials: true, // Ensure cookies are sent with the request
          }
        );

        if (response.data.isAuthenticated && response.data.role === "admin") {
          dispatch(setAuthenticated(true));
          router.push("/emergency"); // Redirect if authorized
        } else {
          dispatch(setAuthenticated(false));
        }
      } catch (error) {
        console.error("Failed to check authentication status", error);
        dispatch(setAuthenticated(false));
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, [dispatch, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/register",
        { email, password },
        { withCredentials: true }
      );
      dispatch(setAuthenticated(true));
      router.push("/emergency");
    } catch (error) {
      setError("Failed to register. Please try again.`");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return <p>You are already registered and logged in!</p>;
  }

  return (
    <section className="section">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto text-black dark:text-black"
      >
        <h2 className="text-2xl mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Register
        </button>

        <a
          className="font-bold text-blue-300 dark:text-gray-400"
          href="/signin"
        >
          Sign in
        </a>
      </form>
    </section>
  );
};

export default RegisterForm;
