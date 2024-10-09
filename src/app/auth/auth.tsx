import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const AuthRoute = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");

      if (tokenFromUrl) {
        // Store the token in cookies
        Cookies.set("token", tokenFromUrl, { expires: 1, path: "/" });
        const token = Cookies.get("token");
        console.log(atob(token.split(".")[1])); // Decodes and prints the payload of the JWT
        setIsAuthenticated(true);
        router.push("/emergency"); // Redirect to the emergency page on successfull login
      } else {
        const token = Cookies.get("token");

        if (token) {
          setIsAuthenticated(true); // User is authenticated if token exists
        } else {
          // If no token found, redirect to login
          router.push("/register");
        }
      }
    };
    setIsAuthenticated(true);

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return <p>Loading...</p>; // Display loading state while checking authentication
  }

  return <>{children}</>; // Render the child components if authenticated
};

export default AuthRoute;
