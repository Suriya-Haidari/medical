"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/slices/authSlice";
import Cookies from "js-cookie";
import HandleGoogleLogin from "../auth/HandleLogin";
import { RootState } from "../store/store";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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

        if (response.data.isAuthenticated) {
          dispatch(setAuthenticated(true));
          router.push("/emergency"); // Redirect to a different page if authenticated
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
      const response = await axios.post(
        "http://localhost:3001/api/register",
        { fullName, email, password },
        { withCredentials: true }
      );
      if (response.status === 201) {
        Cookies.set("token", response.data.token, {
          expires: 1,
          path: "/",
          sameSite: "Lax",
        }); // Set token with an expiration of 71days
      }
      dispatch(setAuthenticated(true));
      router.push("/emergency");
    } catch (error) {
      setError("Failed to register. Please try again.");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isAuthenticated) {
    return <p>You are already registered and logged in!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full section p-6">
      <br />

      {/* Form section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto text-black dark:text-black"
      >
        <h2 className="text-2xl mb-4 text-center">
          Sign <span className="text-teal-500">Up</span>
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200">
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
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-teal-500 text-gray-200 hover:bg-teal-600 py-2 rounded"
        >
          Sign Up
        </button>
      </form>
      <br />
      <br />
      <div className="flex justify-end w-full max-w-md mb-4 ">
        <div className="mr-4 px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600">
          <a className="text-white mr-4" href="/signin">
            Sign in
          </a>
        </div>
        <HandleGoogleLogin />
      </div>
    </div>
  );
};

export default RegisterForm;
