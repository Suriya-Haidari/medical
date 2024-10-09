// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice";

// const RegisterForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const isAuthenticated = useSelector(
//     (state: any) => state.auth.isAuthenticated
//   );

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/api/auth/status",
//           {
//             withCredentials: true, // Ensure cookies are sent with the request
//           }
//         );
//         if (response.data.isAuthenticated) {
//           dispatch(setAuthenticated(true));
//         } else {
//           dispatch(setAuthenticated(false));
//         }
//       } catch (error) {
//         console.error("Failed to check authentication status", error);
//         dispatch(setAuthenticated(false));
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     checkAuthStatus();
//   }, [dispatch]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:3001/register",
//         { email, password },
//         { withCredentials: true } // Ensure cookies are sent with the request
//       );
//       dispatch(setAuthenticated(true));
//       router.push("/emergency");
//     } catch (error) {
//       setError("Failed to register. Please try again.");
//     }
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isAuthenticated) {
//     return <p>You are already registered and logged in!</p>;
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto text-black dark:text-black"
//     >
//       <h2 className="text-2xl mb-4">Register</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Register
//       </button>

//       <a className="font-bold text-blue-300 dark:text-gray-400" href="/signin">
//         Sign in
//       </a>
//     </form>
//   );
// };

// export default RegisterForm;

//
//
//
//
//
//
//
//

//
//
// rigister filee
// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice";

// const RegisterForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const isAuthenticated = useSelector(
//     (state: any) => state.auth.isAuthenticated
//   );

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/api/auth/status",
//           {
//             withCredentials: true, // Ensure cookies are sent with the request
//           }
//         );
//         if (response.data.isAuthenticated) {
//           dispatch(setAuthenticated(true));
//         } else {
//           dispatch(setAuthenticated(false));
//         }
//       } catch (error) {
//         console.error("Failed to check authentication status", error);
//         dispatch(setAuthenticated(false));
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     checkAuthStatus();
//   }, [dispatch]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:3001/register",
//         { email, password },
//         { withCredentials: true } // Ensure cookies are sent with the request
//       );
//       dispatch(setAuthenticated(true));
//       router.push("/emergency");
//     } catch (error) {
//       setError("Failed to register. Please try again.");
//     }
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isAuthenticated) {
//     return <p>You are already registered and logged in!</p>;
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto text-black dark:text-black"
//     >
//       <h2 className="text-2xl mb-4">Register</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Register
//       </button>

//       <a className="font-bold text-blue-300 dark:text-gray-400" href="/signin">
//         Sign in
//       </a>
//     </form>
//   );
// };

// export default RegisterForm;

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../store/slices/authSlice";
import Cookies from "js-cookie"; // Import js-cookie
import HandleGoogleLogin from "../auth/HandleLogin";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
        "http://localhost:3001/register",
        { fullName, email, password }, // You're sending "fullName" here
        { withCredentials: true }
      );
      if (response.status === 201) {
        // Store token in cookie after successful sign-in
        Cookies.set("token", response.data.token, {
          expires: 365,
          path: "/",
          sameSite: "Lax",
        }); // Set token with an expiration of 7 days
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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto text-black dark:text-black"
    >
      <h2 className="text-2xl mb-4">Register</h2>
      <div className="mb-4">
        <label className="block text-gray-700">fullName</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
          required
        />
      </div>
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

      <a className="font-bold text-blue-300 dark:text-gray-400" href="/signin">
        HandleGoogleLogin
      </a>
      <HandleGoogleLogin />
    </form>
  );
};

export default RegisterForm;

// new post

//
//
//
//
//
// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Notification from "../components/notification"; // Import your Notification component
// import Notif from "../emergency/Notif";
// import Cookies from "js-cookie";

// export default function CreateForm() {
//   const [title, setTitle] = useState("");
//   const [paragraph, setParagraph] = useState("");
//   const [option, setOption] = useState("");
//   const [image, setImage] = useState(null);
//   const [file, setFile] = useState(null); // State for the file upload
//   const [notification, setNotification] = useState(null);
//   const [error, setError] = useState(""); // State to hold error message
//   const [focusedField, setFocusedField] = useState(""); // To track focused input

//   const router = useRouter(); // Use the router hook for navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = Cookies.get("token");
//     if (!token) {
//       console.error("No token found in cookies.");
//       return;
//     }

//     // Validate the paragraph length
//     if (paragraph.length < 60 || paragraph.length > 100) {
//       setError("Paragraph must be between 60 and 100 characters.");
//       return;
//     }
//     if (title.length > 25) {
//       setError("Title must be 25 characters or fewer.");
//       return;
//     }

//     // Validate the image and file
//     if (!image) {
//       setError("Please upload an image.");
//       return;
//     }
//     if (image.size > 5 * 1024 * 1024) {
//       setError("Image must be smaller than 5MB.");
//       return;
//     }
//     if (!file) {
//       setError("Please upload a file.");
//       return;
//     }
//     if (file.size > 10 * 1024 * 1024) {
//       setError("File must be smaller than 10MB.");
//       return;
//     }

//     setError(""); // Clear any previous error

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("paragraph", paragraph);
//     formData.append("option", option);
//     formData.append("image", image);
//     formData.append("file", file); // Append the file as well

//     try {
//       const res = await axios.post("http://localhost:3001/upload", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (res.status >= 200 && res.status < 300) {
//         setNotification({
//           message: "Item uploaded successfully!",
//           type: "success",
//         });
//         setTitle("");
//         setParagraph("");
//         setOption("");
//         setImage(null);
//         setFile(null); // Reset file input
//       } else {
//         setNotification({
//           message: `Upload failed with status ${res.status}`,
//           type: "error",
//         });
//       }
//     } catch (error) {
//       setNotification({
//         message: `Error uploading item: ${error.message}`,
//         type: "error",
//       });
//     }
//   };

//   const handleCloseNotification = () => {
//     setNotification(null);
//   };

//   return (
//     <>
//       <Notif />
//       <form
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//         className="max-w-md mx-auto p-4 bg-white text-black dark:text-black shadow-md rounded-lg space-y-4"
//       >
//         {/* Title Input */}
//         <div>
//           <label
//             htmlFor="title"
//             className="block text-sm font-medium text-black dark:text-black"
//           >
//             Title:
//           </label>
//           <input
//             id="title"
//             type="text"
//             name="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             onFocus={() => setFocusedField("title")}
//             onBlur={() => setFocusedField("")}
//             required
//             className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${
//               title.length > 25 ? "border-red-500" : ""
//             }`}
//           />
//           {focusedField === "title" && title.length > 25 && (
//             <p className="text-red-500 text-sm mt-1">
//               Title must be 25 characters or fewer.
//             </p>
//           )}
//         </div>

//         {/* Paragraph Textarea */}
//         <div>
//           <label
//             htmlFor="paragraph"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Paragraph:
//           </label>
//           <textarea
//             id="paragraph"
//             name="paragraph"
//             value={paragraph}
//             onChange={(e) => setParagraph(e.target.value)}
//             onFocus={() => setFocusedField("paragraph")}
//             onBlur={() => setFocusedField("")}
//             required
//             className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none ${
//               paragraph.length < 60 || paragraph.length > 100
//                 ? "border-red-500"
//                 : ""
//             }`}
//           />
//           {focusedField === "paragraph" && (
//             <p className="text-red-500 text-sm mt-1">
//               {paragraph.length < 60
//                 ? "Paragraph must be at least 60 characters."
//                 : paragraph.length > 100
//                 ? "Paragraph must not exceed 100 characters."
//                 : ""}
//             </p>
//           )}
//         </div>

//         {/* Section Select */}
//         <div>
//           <label
//             htmlFor="option"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Section
//           </label>
//           <select
//             id="option"
//             name="option"
//             value={option}
//             onChange={(e) => setOption(e.target.value)}
//             required
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//           >
//             <option value="">Select Section:</option>
//             <option value="hospital">Hospital</option>
//             <option value="doctors">Doctors News</option>
//             <option value="sick">Sick People News</option>
//           </select>
//         </div>

// {/* Image Upload */}
// <div>
//   <label
//     htmlFor="image"
//     className="block text-sm font-medium text-gray-700"
//   >
//     Image:
//   </label>
//   <input
//     id="image"
//     type="file"
//     name="image"
//     accept="image/*"
//     onChange={(e) => setImage(e.target.files[0])}
//     required
//     className="mt-1 block w-full text-sm text-gray-500 file:border file:border-gray-300 file:bg-gray-50 file:px-3 file:py-2 file:text-gray-700 file:rounded-md hover:file:bg-gray-100"
//   />
//   {image && image.size > 5 * 1024 * 1024 && (
//     <p className="text-red-500 text-sm mt-1">
//       Image must be smaller than 5MB.
//     </p>
//   )}
// </div>

// {/* Display Selected Image or Placeholder */}
// <div className="mt-2">
//   <label className="block text-sm font-medium text-gray-700">
//     Image Preview:
//   </label>
//   <div className="w-full h-48 border border-gray-300 rounded-md overflow-hidden">
//     {image ? (
//       <img
//         src={URL.createObjectURL(image)} // Create a URL for the selected image
//         alt="Preview"
//         className="object-cover w-full h-full"
//       />
//     ) : (
//       <img
//         src="placeholder.jpg" // Placeholder image path
//         alt="Placeholder"
//         className="object-cover w-full h-full"
//       />
//     )}
//   </div>
// </div>

//         {/* File Upload */}
//         <div>
//           <label
//             htmlFor="file"
//             className="block text-sm font-medium text-gray-700"
//           >
//             File (PDF, DOC, etc.):
//           </label>
//           <input
//             id="file"
//             type="file"
//             name="file"
//             accept=".pdf,.doc,.docx,.txt"
//             onChange={(e) => setFile(e.target.files[0])}
//             required
//             className="mt-1 block w-full text-sm text-gray-500 file:border file:border-gray-300 file:bg-gray-50 file:px-3 file:py-2 file:text-gray-700 file:rounded-md hover:file:bg-gray-100"
//           />
//           {file && file.size > 10 * 1024 * 1024 && (
//             <p className="text-red-500 text-sm mt-1">
//               File must be smaller than 10MB.
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={
//             paragraph.length < 60 ||
//             paragraph.length > 100 ||
//             title.length > 25 ||
//             !image ||
//             !file
//           }
//           className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
//         >
//           Submit
//         </button>

//         {/* Error Notification */}
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

//         {/* Notification Component */}
//         {notification && (
//           <Notification
//             message={notification.message}
//             type={notification.type}
//             onClose={handleCloseNotification}
//           />
//         )}
//       </form>
//     </>
//   );
// }

//
//
//

//
//
// .profile
// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import Cookies from "js-cookie"; // Import js-cookie
// import EditProfile from "../EditProfile";

// export default function UserProfile() {
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [role, setRole] = useState("user");
//   const [isLoading, setIsLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     async function fetchUserProfile() {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No token found in localStorage.");
//           return;
//         }

//         // Fetch current user details
//         const profileResponse = await axios.get(
//           "http://localhost:3001/api/user/role",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const { email, role, created_at, full_Name, profile_picture, id } =
//           profileResponse.data;

//         // Format the created_at date as YYYY/MM/DD
//         const formattedDate = new Date(created_at)
//           .toISOString()
//           .split("T")[0]
//           .replace(/-/g, "/");

//         // Fetch all users
//         const response = await axios.get("http://localhost:3001/api/users", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUsers(response.data); // Set the users if response is successful

//         // Set the current user details with the formatted date
//         setCurrentUser({
//           id, // Set user ID
//           email: email,
//           role: role,
//           created_at: formattedDate,
//           full_Name: full_Name,
//           profile_picture: profile_picture,
//         });
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError("An error occurred while fetching users");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchUserProfile();
//   }, []);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No token found in localStorage.");
//           return;
//         }

//         const response = await axios.get(
//           "http://localhost:3001/api/user/role",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         setRole(response.data.role);
//       } catch (error) {
//         console.error("Error fetching user role:", error);
//         setRole("user");
//       }
//     };

//     fetchUserRole();
//   }, []);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleDelete = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found in localStorage.");
//         return;
//       }

//       const userId = currentUser?.id; // Use currentUser's id or another method to get the correct user ID

//       const response = await axios.delete(
//         `http://localhost:3001/api/users/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 204) {
//         // Clear localStorage and cookies
//         localStorage.removeItem("token");
//         Cookies.remove("auth_token"); // Remove cookie if used

//         // Redirect to login or homepage
//         alert("Profile deleted successfully");
//         window.location.href = "/signin"; // Redirect to login page or homepage
//       }
//     } catch (error) {
//       console.error("Error deleting profile:", error);
//       setError("An error occurred while deleting the profile");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-gray-600">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-8 px-4 flex items-center justify-center sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-gray-900 mb-4">User Profile</h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         {currentUser && (
//           <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 relative">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-6">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {currentUser.full_Name}
//                   </h2>
//                   <p className="text-gray-600">Email: {currentUser.email}</p>
//                   <p className="text-gray-600">Role: {currentUser.role}</p>
//                   <p className="text-gray-600">
//                     Account created at: {currentUser.created_at}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col items-end space-y-2">
//                 <a>
//                   <EditProfile />
//                 </a>
//                 <button
//                   onClick={handleDelete}
//                   className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded flex items-center space-x-2"
//                 >
//                   <FaTrash className="text-xl" />
//                   <span>Delete Account</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {role === "admin" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">All Users</h2>
//             <table className="min-w-full bg-white table-auto border border-gray-200 rounded-lg shadow-sm">
//               <thead className="bg-gray-50 border-b border-gray-200">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-gray-600">Email</th>
//                   <th className="py-3 px-4 text-left text-gray-600">Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user, index) => (
//                   <tr key={index} className="hover:bg-gray-100">
//                     <td className="py-3 px-4 text-gray-800">{user.email}</td>
//                     <td className="py-3 px-4 text-gray-800">{user.role}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// Authen

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import Cookies from "js-cookie"; // Import js-cookie for cookies management
// import EditProfile from "../EditProfile";

// export default function UserProfile() {
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [role, setRole] = useState("user");
//   const [isLoading, setIsLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     async function fetchUserProfile() {
//       try {
//         const token = Cookies.get("token"); // Use Cookies to get the token
//         if (!token) {
//           console.error("No token found in cookies.");
//           return;
//         }

//         // Fetch current user details
//         const profileResponse = await axios.get(
//           "http://localhost:3001/api/user/role",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const { email, role, created_at, full_Name, profile_picture, id } =
//           profileResponse.data;

//         // Format the created_at date as YYYY/MM/DD
//         const formattedDate = new Date(created_at)
//           .toISOString()
//           .split("T")[0]
//           .replace(/-/g, "/");

//         // Fetch all users
//         const response = await axios.get("http://localhost:3001/api/users", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUsers(response.data); // Set the users if response is successful

//         // Set the current user details with the formatted date
//         setCurrentUser({
//           id, // Set user ID
//           email: email,
//           role: role,
//           created_at: formattedDate,
//           full_Name: full_Name,
//           profile_picture: profile_picture,
//         });
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError("An error occurred while fetching users");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchUserProfile();
//   }, []);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const token = Cookies.get("token"); // Use Cookies to get the token
//         if (!token) {
//           console.error("No token found in cookies.");
//           return;
//         }

//         const response = await axios.get(
//           "http://localhost:3001/api/user/role",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         setRole(response.data.role);
//       } catch (error) {
//         console.error("Error fetching user role:", error);
//         setRole("user");
//       }
//     };

//     fetchUserRole();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       const token = Cookies.get("token"); // Use Cookies to get the token
//       if (!token) {
//         console.error("No token found in cookies.");
//         return;
//       }

//       const userId = currentUser?.id; // Use currentUser's id

//       const response = await axios.delete(
//         `http://localhost:3001/api/users/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 204) {
//         // Clear the token cookie
//         Cookies.remove("token");

//         // Redirect to login or homepage
//         alert("Profile deleted successfully");
//         window.location.href = "/signin"; // Redirect to login page or homepage
//       }
//     } catch (error) {
//       console.error("Error deleting profile:", error);
//       setError("An error occurred while deleting the profile");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-gray-600">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-8 px-4 flex items-center justify-center sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-gray-900 mb-4">User Profile</h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         {currentUser && (
//           <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 relative">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-6">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {currentUser.full_Name}
//                   </h2>
//                   <p className="text-gray-600">Email: {currentUser.email}</p>
//                   <p className="text-gray-600">Role: {currentUser.role}</p>
//                   <p className="text-gray-600">
//                     Account created at: {currentUser.created_at}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-col items-end space-y-2">
//                 <a>
//                   <EditProfile />
//                 </a>
//                 <button
//                   onClick={handleDelete}
//                   className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded flex items-center space-x-2"
//                 >
//                   <FaTrash className="text-xl" />
//                   <span>Delete Account</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {role === "manager" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">All Users</h2>
//             <table className="min-w-full bg-white table-auto border border-gray-200 rounded-lg shadow-sm">
//               <thead className="bg-gray-50 border-b border-gray-200">
//                 <tr>
//                   <th className="py-3 px-4 text-left text-gray-600">Email</th>
//                   <th className="py-3 px-4 text-left text-gray-600">Role</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user, index) => (
//                   <tr key={index} className="hover:bg-gray-100">
//                     <td className="py-3 px-4 text-gray-800">{user.email}</td>
//                     <td className="py-3 px-4 text-gray-800">{user.role}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// Manager route verify button

//
//

//

//
//

//
// edit proile page // "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// export default function UserUpdate() {
//   const [userData, setUserData] = useState({
//     fullName: "",
//     email: "",
//   });
//   const [userId, setUserId] = useState(null); // To store the user ID
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch user data when the component is mounted
//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const token = Cookies.get("token"); // Use Cookies to get the token
//         if (!token) {
//           console.error("No token found in cookies.");
//           return;
//         }

//         // Fetch user ID and profile data from /api/user/role
//         const response = await axios.get(
//           "http://localhost:3001/api/user/role",
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const { id, full_Name, email } = response.data; // Destructure the response
//         setUserId(id); // Set the user ID
//         setUserData({ fullName: full_Name, email });
//       } catch (error) {
//         console.error("Failed to fetch user data:", error);
//         setError("An error occurred while fetching user data");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchUserData();
//   }, []);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission to update user data
//   const handleSubmit = async (e) => {
//     // e.preventDefault();

//     if (!userId) {
//       alert("User ID not found");
//       return;
//     }

//     try {
//       const token = Cookies.get("token"); // Use Cookies to get the token
//       await axios.put(`http://localhost:3001/api/users/${userId}`, userData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert("User data updated successfully");
//     } catch (error) {
//       console.error("Failed to update user data:", error);
//       alert("Error updating user data");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-gray-600">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Update User</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={userData.fullName}
//             onChange={handleInputChange}
//             className="border rounded w-full p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={userData.email}
//             onChange={handleInputChange}
//             className="border rounded w-full p-2"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Update Info
//         </button>
//       </form>
//     </div>
//   );
// }

//
//

//
// /
// #
//
//

//
//

// auth

// "use client";
// import { useEffect, useState } from "react";
// import LogIn from "../register/register";
// import HandleGoogleLogin from "./HandleLogin";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie"; // Import js-cookie

// interface AuthRouteProps {
//   children: React.ReactNode;
// }

// const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const token = Cookies.get("authToken"); // Check for the token in cookies
//     if (token) {
//       setIsAuthenticated(true);
//     } else {
//       setIsAuthenticated(false);
//       // Optionally redirect to login if not authenticated
//       // router.push("./register/register");
//     }
//     setAuthLoading(false); // Authentication check completed
//   }, [router]);

//   if (authLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="w-10/12 mx-auto py-8 text-black dark:bg-neutral-900 dark:text-white">
//         <h2 className="text-center text-2xl mb-4">Please Sign Up or Log In</h2>
//         <LogIn />
//         <HandleGoogleLogin />
//       </div>
//     );
//   }

//   return <>{children}</>;
// };

// export default AuthRoute;

// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import Cookies from "js-cookie";
// import { useDispatch } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice"; // Import the action
// import { RootState } from "../store/store";
// import HandleGoogleLogin from "./HandleLogin";
// import LogIn from "../register/register";

// interface AuthRouteProps {
//   children: React.ReactNode;
// }

// const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(
//     (state: RootState) => state.auth.isAuthenticated
//   );
//   const authLoading = useSelector((state: RootState) => state.auth.loading);

//   useEffect(() => {
//     const token = Cookies.get("authToken");
//     console.log(token);
//     if (token) {
//       dispatch(setAuthenticated(true));
//     }
//   }, [dispatch]);

//   if (authLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="flex w-full items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//         <HandleGoogleLogin />
//         <LogIn />
//       </div>
//     );
//   }

//   return <>{children}</>;
// };

// export default AuthRoute;

// import React, { useEffect } from "react";
// import Cookies from "js-cookie";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice";
// import { RootState } from "../store/store";
// import HandleGoogleLogin from "./HandleLogin";
// import LogIn from "../register/register";
// import Emergency from "../emergency/page";

// interface AuthRouteProps {
//   children: React.ReactNode;
// }

// const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(
//     (state: RootState) => state.auth.isAuthenticated
//   );
//   const authLoading = useSelector((state: RootState) => state.auth.loading);

//   useEffect(() => {
//     const token = Cookies.get("authToken");

//     // Debugging: log token value
//     console.log("Token from cookie:", token);

//     if (token) {
//       // Dispatch action to set authenticated state
//       dispatch(setAuthenticated(true));
//     } else {
//       console.log("No token found, user is not authenticated.");
//     }
//   }, [dispatch]);

//   if (authLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="flex w-full items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//         <HandleGoogleLogin />
//         <LogIn />
//       </div>
//     );
//   }
//   console.log("User is authenticated, rendering protected content.");

//   <>
//     {isAuthenticated ? (
//       <div>
//         <Emergency />
//       </div>
//     ) : (
//       <div>
//         {/* Redirect or show login link */}
//         <p>Please log in to view this content.</p>
//       </div>
//     )}
//   </>;
// };

// export default AuthRoute;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

// const AuthRoute = async ({ children }) => {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = Cookies.get("token"); // Ensure you're storing the correct auth token
//     if (token) {
//       setIsAuthenticated(true); // User is authenticated

//       try {
//         const response = await axios.post(
//           "http://localhost:3001/signin",
//           { withCredentials: true } // Ensure cookies are sent with the request
//         );

//         if (response.status === 201) {
//           // Store token in cookie after successful sign-in
//           Cookies.set("token", response.data.token, {
//             expires: 1,
//             path: "/",
//             sameSite: "Lax",
//           }); // Set token with an expiration of 7 days

//           router.push("/emergency");
//         } else {
//           console.error("Login failed.");
//         }
//       } catch (error) {
//         console.error("Failed to log in.");
//       }
//       console.log(token);
//     } else {
//       router.push("/register"); // Redirect to login if not authenticated
//     }
//   }, [router]);

//   if (!isAuthenticated) {
//     return <p>Loading...</p>; // You can display a loading state while checking auth
//   }

//   return <>{children}</>; // Display the content if authenticated
// };

// export default AuthRoute;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
// import axios from "axios";

// const AuthRoute = ({ children }) => {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       // Get token from URL parameters
//       const urlParams = new URLSearchParams(window.location.search);
//       const tokenFromUrl = urlParams.get("token");

//       if (tokenFromUrl) {
//         // Store the token from the URL into cookies
//         Cookies.set("token", tokenFromUrl, {
//           expires: 1, // Token expires in 1 day
//           path: "/",
//           sameSite: "Lax",
//         });

//         setIsAuthenticated(true); // Set authenticated to true
//         router.push("/emergency"); // Redirect to the emergency page
//       } else {
//         const token = Cookies.get("token"); // Check if the token is already stored in the cookies

//         if (token) {
//           setIsAuthenticated(true); // User is authenticated if token exists
//         } else {
//           // If no token found, redirect to login
//           router.push("/register");
//         }
//       }
//     };

//     checkAuth(); // Call the async function
//   }, [router]);

//   if (!isAuthenticated) {
//     return <p>Loading...</p>; // Display loading state while checking authentication
//   }

//   return <>{children}</>; // Render the child components if authenticated
// };

// export default AuthRoute;

// role
// import React from "react";
// import Cookies from "js-cookie";
// import axios from "axios";

// export default async function HandleGoogleLogin() {
//   const handleGoogleLogin = () => {
//     Cookies.set("authToken", "token", { expires: 7 }); // Save token in cookies, valid for 7 days
//     // You can now redirect or load authenticated content

//     // Redirect to your backend OAuth Google route

//     try {
//       const response = await axios.post("http://localhost:3001/register", {
//         withCredentials: true,
//       });
//       if (response.status === 201) {
//         // Store token in cookie after successful sign-in
//         Cookies.set("token", response.data.token, {
//           expires: 365,
//           path: "/",
//           sameSite: "Lax",
//         }); // Set token with an expiration of 7 days
//       }
//     } catch (error) {
//       console.log("Failed to register. Please try again.");
//     }

//     window.location.href = "http://localhost:3001/auth/google";
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
//         Log In or Register with Google
//       </h1>
//       <button
//         onClick={handleGoogleLogin}
//         className="flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
//       >
//         <svg
//           className="w-5 h-5 mr-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 48 48"
//         >
//           <path
//             fill="#4285F4"
//             d="M24 9.5c3.8 0 6.5 1.6 8 2.9l5.9-5.9C34.3 3.5 29.7 1.5 24 1.5 14.9 1.5 7.4 7.8 4.7 16.1l6.9 5.4C13.4 13.2 18.3 9.5 24 9.5z"
//           />
//           <path
//             fill="#34A853"
//             d="M46.1 24.5c0-1.3-.1-2.6-.3-3.8H24v7.2h12.4c-.5 2.6-2.1 4.8-4.3 6.2l6.8 5.3c4-3.6 6.2-9 6.2-14.9z"
//           />
//           <path
//             fill="#FBBC05"
//             d="M11.6 28.3c-.9-2.5-.9-5.1 0-7.6l-6.9-5.4c-2.6 5.2-2.6 11.4 0 16.6l6.9-5.4z"
//           />
//           <path
//             fill="#EA4335"
//             d="M24 46.5c5.7 0 10.6-1.9 14.2-5.3l-6.8-5.3c-1.9 1.3-4.3 2.1-7.3 2.1-5.7 0-10.6-3.8-12.4-9.1l-6.9 5.4c2.7 8.3 10.2 14.6 19.2 14.6z"
//           />
//         </svg>
//         Sign in with Google
//       </button>
//     </div>
//   );

// // }

// ok  but pro

// import React from "react";
// import Cookies from "js-cookie";
// import axios from "axios";

// export default function HandleGoogleLogin() {
//   // Function to handle Google login
//   const handleGoogleLogin = async () => {
//     try {
//       // Redirect to your backend OAuth Google route
//       window.location.href = "http://localhost:3001/auth/google"; // This triggers Google's OAuth login

//       // After Google authentication, the backend sends a response with a token
//       // Here you handle that response, e.g., after a callback
//       const response = await axios.post("http://localhost:3001/token", {
//         withCredentials: true,
//       });

//       if (response.status === 201) {
//         // Set token in cookies after a successful login
//         Cookies.set("authToken", response.data.token, {
//           expires: 7, // Token expires in 7 days
//           path: "/",
//           sameSite: "Lax",
//         });
//         console.log("Token set in cookies");
//         // You can now redirect or handle any other post-login logic here
//       }
//     } catch (error) {
//       console.error("Failed to register or login. Please try again.", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
//         Log In or Register with Google
//       </h1>
//       <button
//         onClick={handleGoogleLogin}
//         className="flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
//       >
//         <svg
//           className="w-5 h-5 mr-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 48 48"
//         >
//           <path
//             fill="#4285F4"
//             d="M24 9.5c3.8 0 6.5 1.6 8 2.9l5.9-5.9C34.3 3.5 29.7 1.5 24 1.5 14.9 1.5 7.4 7.8 4.7 16.1l6.9 5.4C13.4 13.2 18.3 9.5 24 9.5z"
//           />
//           <path
//             fill="#34A853"
//             d="M46.1 24.5c0-1.3-.1-2.6-.3-3.8H24v7.2h12.4c-.5 2.6-2.1 4.8-4.3 6.2l6.8 5.3c4-3.6 6.2-9 6.2-14.9z"
//           />
//           <path
//             fill="#FBBC05"
//             d="M11.6 28.3c-.9-2.5-.9-5.1 0-7.6l-6.9-5.4c-2.6 5.2-2.6 11.4 0 16.6l6.9-5.4z"
//           />
//           <path
//             fill="#EA4335"
//             d="M24 46.5c5.7 0 10.6-1.9 14.2-5.3l-6.8-5.3c-1.9 1.3-4.3 2.1-7.3 2.1-5.7 0-10.6-3.8-12.4-9.1l-6.9 5.4c2.7 8.3 10.2 14.6 19.2 14.6z"
//           />
//         </svg>
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

//
//

//

//
// cree new notification
// import React, { useState } from "react";
// import Cookies from "js-cookie";

// const CreateNotificationForm = () => {
//   const [message, setMessage] = useState("");
//   const [userId, setUserId] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = Cookies.get("token"); // Assuming you're using cookies for JWT

//     try {
//       const response = await fetch("http://localhost:3001/api/notifications", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ message, userId }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create notification.");
//       }

//       const data = await response.json();
//       console.log("Notification created:", data);
//       // Optionally reset the form or display a success message
//     } catch (error) {
//       console.error("Error creating notification:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <input
//           type="text"
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="userId">User ID:</label>
//         <input
//           type="text"
//           id="userId"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Send Notification</button>
//     </form>
//   );
// };

// export default CreateNotificationForm;

//
//

//
//
// filte rbuttons // // import { useDispatch } from "react-redux";
// // import { setFilter } from "../store/slices/filterSlice";

// // export default function FilterButtons({ filter }) {
// //   const dispatch = useDispatch();

// //   return (
// //     <div className="flex justify-center mb-8">
// //       <button
// //         onClick={() => dispatch(setFilter("hospital"))}
// //         className={`mx-2 px-4 py-2 rounded ${
// //           filter === "hospital"
// //             ? "bg-green-500 text-white"
// //             : "bg-green-200 text-black hover:bg-green-300"
// //         }`}
// //       >
// //         Hospital News
// //       </button>

// //       <button
// //         onClick={() => dispatch(setFilter("doctors"))}
// //         className={`mx-2 px-4 py-2 rounded ${
// //           filter === "doctors"
// //             ? "bg-blue-500 text-white"
// //             : "bg-blue-200 text-black hover:bg-blue-300"
// //         }`}
// //       >
// //         Doctors News
// //       </button>
// //       <button
// //         onClick={() => dispatch(setFilter("sick"))}
// //         className={`mx-2 px-4 py-2 rounded ${
// //           filter === "sick"
// //             ? "bg-red-500 text-white"
// //             : "bg-red-200 text-black hover:bg-red-300"
// //         }`}
// //       >
// //         Sick News
// //       </button>
// //     </div>
// //   );
// //
// // }

// // import { useDispatch } from "react-redux";

// // export default function FilterButtons({ filter, setFilter, role }) {
// //   const dispatch = useDispatch();

// //   return (
// //     <div className="flex justify-center mb-8">
// //       {role === "admin" ? (
// //         <>
// //           <button
// //             onClick={() => dispatch(setFilter("hospital"))}
// //             className={`mx-2 px-4 py-2 rounded ${
// //               filter === "hospital"
// //                 ? "bg-green-500 text-white"
// //                 : "bg-green-200 text-black hover:bg-green-300"
// //             }`}
// //           >
// //             Hospital News
// //           </button>

// //           <button
// //             onClick={() => dispatch(setFilter("doctors"))}
// //             className={`mx-2 px-4 py-2 rounded ${
// //               filter === "doctors"
// //                 ? "bg-blue-500 text-white"
// //                 : "bg-blue-200 text-black hover:bg-blue-300"
// //             }`}
// //           >
// //             Doctors News
// //           </button>

// //           <button
// //             onClick={() => dispatch(setFilter("sick"))}
// //             className={`mx-2 px-4 py-2 rounded ${
// //               filter === "sick"
// //                 ? "bg-red-500 text-white"
// //                 : "bg-red-200 text-black hover:bg-red-300"
// //             }`}
// //           >
// //             Sick News
// //           </button>
// //         </>
// //       ) : (
// //         <button
// //           onClick={() => dispatch(setFilter("hospital"))}
// //           className={`mx-2 px-4 py-2 rounded ${
// //             filter === "hospital"
// //               ? "bg-green-500 text-white"
// //               : "bg-green-200 text-black hover:bg-green-300"
// //           }`}
// //         >
// //           Hospital News
// //         </button>
// //       )}
// //     </div>
// //   );
// // // }
// "use client";
// import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function FilterButtons({ filter, setFilter }) {
//   const dispatch = useDispatch();
//   const [role, setRole] = useState<string>("user"); // Start with null

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Get token from localStorage
//         console.log(token);
//         if (!token) {
//           console.error("No token found in localStorage.");
//           return;
//         }

//         const response = await axios.get(
//           "http://localhost:3001/api/user/role",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setRole(response.data.role); // Set role based on response
//       } catch (error) {
//         console.error("Error fetching user role:", error);
//         setRole("user"); // Default to "user" if there's an error
//       }
//     };

//     fetchUserRole();
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     <div className="flex justify-center mb-8">
//       <button
//         onClick={() => dispatch(setFilter("hospital"))}
//         className={`mx-2 px-4 py-2 rounded ${
//           filter === "hospital"
//             ? "bg-green-500 text-white"
//             : "bg-green-200 text-black hover:bg-green-300"
//         }`}
//       >
//         Hospital News
//       </button>

//       {role === "admin" && (
//         <>
//           <button
//             onClick={() => dispatch(setFilter("doctors"))}
//             className={`mx-2 px-4 py-2 rounded ${
//               filter === "doctors"
//                 ? "bg-blue-500 text-white"
//                 : "bg-blue-200 text-black hover:bg-blue-300"
//             }`}
//           >
//             Doctors News
//           </button>

//           <button
//             onClick={() => dispatch(setFilter("sick"))}
//             className={`mx-2 px-4 py-2 rounded ${
//               filter === "sick"
//                 ? "bg-red-500 text-white"
//                 : "bg-red-200 text-black hover:bg-red-300"
//             }`}
//           >
//             Sick News
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// item cars
<div
  className=".
.
"

  // // components/ItemCard.tsx
  // import { useEffect, useRef, useState } from "react";
  // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  // import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
  // import { useRouter } from "next/navigation"; // Import from next/navigation

  // export default function ItemCard({
  //   item,
  //   handleEdit,
  //   handleDelete,
  //   isExpanded,
  //   toggleExpand,
  // }) {
  //   const [isInView, setIsInView] = useState(false);
  //   const [initialImage, setInitialImage] = useState<string | null>(null);
  //   const cardRef = useRef(null);
  //   const router = useRouter(); // Initialize router

  //   useEffect(() => {
  //     // Initialize the initial image URL
  //     setInitialImage(item.image);

  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             setIsInView(true);
  //             observer.unobserve(entry.target);
  //           }
  //         });
  //       },
  //       { threshold: 0.1 }
  //     );

  //     if (cardRef.current) {
  //       observer.observe(cardRef.current);
  //     }

  //     return () => {
  //       if (cardRef.current) {
  //         observer.unobserve(cardRef.current);
  //       }
  //     };
  //   }, [item.image]);

  //   // Use the new image if it differs from the initial image
  //   const imageSrc =
  //     item.image && item.image !== initialImage
  //       ? `data:image/jpeg;base64,${item.image}`
  //       : `data:image/jpeg;base64,${initialImage}`;

  //   // Determine the content to display (first 20 characters or full text)
  //   const displayedText = isExpanded
  //     ? item.paragraph
  //     : `${item.paragraph.slice(0, 20)}...`;

  //   const handleCardClick = () => {
  //     if (item.option === "emergency") {
  //       router.push("/signup"); // Redirect to the sign-up page
  //     } else {
  //       toggleExpand();
  //     }
  //   };

  //   return (
  //     <div
  //       ref={cardRef}
  //       className={`max-w-sm rounded-xl overflow-hidden shadow-lg transform bg-white dark:bg-neutral-800 dark:text-gray-300 transition-transform duration-300 ${
  //         isInView ? "animate-slide-up" : "card-initial"
  //       }`}
  //     >
  //       <img
  //         src={imageSrc || placeholderImage}
  //         alt={item.title}
  //         className="w-full h-48 object-cover"
  //       />

  //       <div className="px-6 py-4">
  //         <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
  //         {/* Paragraph with Show more/less functionality */}
  //         <p className="text-gray-700 dark:text-gray-400 break-words">
  //           {displayedText}
  //         </p>
  //         {item.paragraph.length > 20 && (
  //           <button
  //             onClick={toggleExpand}
  //             className="text-blue-500 underline focus:outline-none"
  //           >
  //             {isExpanded ? "Show less" : "Show more"}
  //           </button>
  //         )}

  //         <p className="mt-2">
  //           <span
  //             className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
  //               item.option === "hospital"
  //                 ? "bg-green-500 text-white"
  //                 : item.option === "doctors"
  //                 ? "bg-blue-500 text-white"
  //                 : "bg-red-500 text-white"
  //             }`}
  //           >
  //             {item.option}
  //           </span>
  //         </p>
  //       </div>
  //       <div className="px-6 py-4 flex justify-end items-center">
  //         <button
  //           onClick={() => handleEdit(item)}
  //           className="px-4 py-2 text-sm font-semibold text-white rounded hover:bg-blue-600"
  //         >
  //           <FontAwesomeIcon
  //             className="text-black dark:text-white"
  //             icon={faEdit}
  //           />
  //         </button>
  //         <button
  //           onClick={() => handleDelete(item.id)}
  //           className="px-4 py-2 text-sm font-semibold text-white rounded hover:bg-red-600"
  //         >
  //           <FontAwesomeIcon
  //             className="text-black dark:text-white"
  //             icon={faTrash}
  //           />
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
></div>;

//
//

//
//
//
//
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import CreateNotificationForm from "./CreatingNewNotification";

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [ws, setWs] = useState(null);
//   const [userId, setUserId] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = Cookies.get("token");
//         if (!token) {
//           console.error("No token found in cookies.");
//           return;
//         }
//         const response = await fetch("http://localhost:3001/api/user/role", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const data = await response.json();
//         setUserId(data.role); // Extract the userId from the response
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);
//   // Fetch initial notifications on component mount
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const token = Cookies.get("token");
//         if (!token) {
//           console.error("No token found in cookies.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "http://localhost:3001/api/notifications",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//             credentials: "include",
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch notifications.");
//         }

//         const data = await response.json();
//         setNotifications(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   // Set up WebSocket connection
//   useEffect(() => {
//     const token = Cookies.get("token");
//     const wsUrl = `ws://localhost:3002`;

//     // Establish WebSocket connection
//     const socket = new WebSocket(wsUrl);
//     setWs(socket);

//     socket.onopen = () => {
//       console.log("Connected to WebSocket server");
//       // Send user identification to WebSocket server
//       socket.send(JSON.stringify({ type: "join", token }));
//     };
//     // Inside the useEffect that handles WebSocket messages
//     socket.onmessage = (event) => {
//       try {
//         const messageData = JSON.parse(event.data);
//         if (messageData.type === "new_notification") {
//           // Update notifications state with the new notification
//           setNotifications((prev) => [messageData.notification, ...prev]);
//         }
//       } catch (err) {
//         console.error("Failed to parse WebSocket message", err);
//       }
//     };

//     socket.onclose = () => {
//       console.log("WebSocket connection closed");
//     };

//     socket.onerror = (error) => {
//       console.error("WebSocket error:", error);
//     };

//     // Clean up WebSocket on component unmount
//     return () => {
//       if (socket.readyState === WebSocket.OPEN) {
//         socket.close();
//       }
//     };
//   }, []);

//   // Function to handle marking a notification as read
//   const markAsRead = async (notificationId) => {
//     try {
//       const token = Cookies.get("token");
//       const response = await fetch(
//         `http://localhost:3001/api/notifications/${notificationId}`,
//         {
//           method: "PATCH",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to mark notification as read.");
//       }

//       // Remove the notification from the state
//       setNotifications((prev) =>
//         prev.filter((notification) => notification.id !== notificationId)
//       );
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   // Inside the return statement, where notifications are mapped
//   return (
//     <div className="notification-container p-4">
//       <h2 className="text-lg font-semibold">Notifications</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : notifications.length === 0 ? (
//         <p>No notifications yet.</p>
//       ) : (
//         <ul>
//           <CreateNotificationForm />
//           {/* <h1>Welcome User {userId.full_name}</h1> */}
//           {notifications
//             .filter((notification) => !notification.is_read) // Filter out read notifications
//             .map((notification) => (
//               <li
//                 key={notification.id}
//                 className="p-2 bg-gray-200 mb-2 rounded"
//               >
//                 {notification.message}
//                 {userId === "manager" && ( // Only show the button for admin
//                   <button onClick={() => markAsRead(notification.id)}>
//                     Mark as Read
//                   </button>
//                 )}
//               </li>
//             ))}
//         </ul>
//       )}
//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default Notifications;

// import React, { useEffect, useState, useCallback } from "react";
// import Cookies from "js-cookie";
// import CreateNotificationForm from "./CreatingNewNotification"; // Make sure this component handles notification creation logic

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [ws, setWs] = useState(null);
//   const [userId, setUserId] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = Cookies.get("token");
//         if (!token) {
//           console.error("No token found in cookies.");
//           return;
//         }
//         const response = await fetch("http://localhost:3001/api/user/role", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const data = await response.json();
//         setUserId(data.role); // Extract the userId from the response
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Fetch initial notifications on component mount
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const token = Cookies.get("token");
//         if (!token) {
//           console.error("No token found in cookies.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "http://localhost:3001/api/notifications",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//             credentials: "include",
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch notifications.");
//         }

//         const data = await response.json();
//         setNotifications(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchNotifications();
//   }, []);

//   // Set up WebSocket connection
//   useEffect(() => {
//     const token = Cookies.get("token");
//     const wsUrl = `ws://localhost:3002`;

//     const socket = new WebSocket(wsUrl);
//     setWs(socket);

//     socket.onopen = () => {
//       console.log("Connected to WebSocket server");
//       socket.send(JSON.stringify({ type: "join", token }));
//     };

//     socket.onmessage = (event) => {
//       try {
//         const messageData = JSON.parse(event.data);
//         if (messageData.type === "new_notification") {
//           // Update notifications state with the new notification
//           setNotifications((prev) => [messageData.notification, ...prev]);
//         }
//       } catch (err) {
//         console.error("Failed to parse WebSocket message", err);
//       }
//     };

//     socket.onclose = () => {
//       console.log("WebSocket connection closed");
//     };

//     socket.onerror = (error) => {
//       console.error("WebSocket error:", error);
//     };

//     return () => {
//       if (socket.readyState === WebSocket.OPEN) {
//         socket.close();
//       }
//     };
//   }, []);

//   // Function to handle marking a notification as read
//   const markAsRead = async (notificationId) => {
//     try {
//       const token = Cookies.get("token");
//       const response = await fetch(
//         `http://localhost:3001/api/notifications/${notificationId}`,
//         {
//           method: "PATCH",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to mark notification as read.");
//       }

//       setNotifications((prev) =>
//         prev.filter((notification) => notification.id !== notificationId)
//       );
//     } catch (error) {
//       console.error("Error marking notification as read:", error);
//     }
//   };

//   // Function to handle creating a new notification
//   const handleCreateNotification = async (message) => {
//     try {
//       const token = Cookies.get("token");
//       const response = await fetch("http://localhost:3001/api/notifications", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create notification.");
//       }

//       const newNotification = await response.json();
//       // Avoid adding duplicate notifications
//       if (
//         !notifications.some(
//           (notification) => notification.id === newNotification.id
//         )
//       ) {
//         setNotifications((prev) => [newNotification, ...prev]);
//       }
//     } catch (error) {
//       console.error("Error creating notification:", error);
//     }
//   };

//   return (
//     <div className="notification-container p-4">
//       <h2 className="text-lg font-semibold">Notifications</h2>
//       <CreateNotificationForm onCreate={handleCreateNotification} />
//       {loading ? (
//         <p>Loading...</p>
//       ) : notifications.length === 0 ? (
//         <p>No notifications yet.</p>
//       ) : (
//         <ul>
//           {notifications
//             .filter((notification) => !notification.is_read) // Filter out read notifications
//             .map((notification) => (
//               <li
//                 key={notification.id}
//                 className="p-2 bg-gray-200 mb-2 rounded"
//               >
//                 {notification.message}
//                 {userId === "manager" && ( // Only show the button for admin
//                   <button onClick={() => markAsRead(notification.id)}>
//                     Mark as Read
//                   </button>
//                 )}
//               </li>
//             ))}
//         </ul>
//       )}
//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default Notifications;
//
//
//

//
// post s
// "use client"; // Enables client-side rendering in Next.js
// import "./style.css";
// import { Suspense, useEffect, useState } from "react";
// import axios from "axios";
// import ItemCard from "./ItemCard";
// import EditForm from "./EditForm";
// import FilterButtons from "./FilterButtons";

// export default function ItemList() {
//   const [items, setItems] = useState([]);
//   const [filter, setFilter] = useState("hospital");
//   const [editItem, setEditItem] = useState(null);
//   const [title, setTitle] = useState("");
//   const [paragraph, setParagraph] = useState("");
//   const [option, setOption] = useState("hospital");
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     async function fetchItems() {
//       try {
//         const res = await axios.get("http://localhost:3001/api/items"); // Use relative path for API in Next.js
//         setItems(res.data);
//       } catch (error) {
//         console.error("Error fetching items:", error);
//       }
//     }

//     fetchItems();
//   }, []);

//   const handleEdit = (item) => {
//     setEditItem(item);
//     setTitle(item.title);
//     setParagraph(item.paragraph);
//     setOption(item.option);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/items/${id}`);
//       setItems(items.filter((item) => item.id !== id));
//     } catch (error) {
//       console.error("Error deleting item:", error);
//     }
//   };

//   const getFilteredItems = () => {
//     switch (filter) {
//       case "hospital":
//         return items.filter((item) => item.option === "hospital");
//       case "doctors":
//         return items.filter((item) => item.option === "doctors");
//       case "sick":
//         return items.filter((item) => item.option === "sick");
//       default:
//         return items;
//     }
//   };

//   const filteredItems = getFilteredItems();

//   return (
//     <div className="w-10/12 mx-auto py-8 text-black dark:bg-neutral-900 dark:text-white">
//       {/* <h2 className="text-3xl font-bold text-center mb-8">Items</h2> */}

//       {/* Filter Buttons */}
//       <FilterButtons filter={filter} setFilter={setFilter} />

//       {/* Edit Form */}
//       {editItem ? (
//         <EditForm
//           editItem={editItem}
//           title={title}
//           setTitle={setTitle}
//           paragraph={paragraph}
//           setParagraph={setParagraph}
//           option={option}
//           setOption={setOption}
//           image={image}
//           setImage={setImage}
//           setItems={setItems}
//           items={items}
//           setEditItem={setEditItem}
//         />
//       ) : (
//         <div>
//           {/* Display Items only when not editing */}
//           {filteredItems.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredItems.map((item) => (
//                 <Suspense fallback="Loading Posts..." key={item.id}>
//                   <ItemCard
//                     item={item}
//                     handleEdit={handleEdit}
//                     handleDelete={handleDelete}
//                   />
//                 </Suspense>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-lg">
//               No post yet be active come soon!
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchItems, deleteItem, addItem } from "../store/slices/itemsSlice";
// import { setEditItem } from "../store/slices/editSlice";
// import { setFilter } from "../store/slices/filterSlice";
// import ItemCard from "./ItemCard";
// import EditForm from "./EditForm";
// import FilterButtons from "./FilterButtons";
// import { useEffect } from "react";
// import axios from "axios";

// export default function ItemList() {
//   const dispatch = useDispatch();
//   const items = useSelector((state: any) => state.items.items);
//   const filter = useSelector((state: any) => state.filter.filter);
//   const editItem = useSelector((state: any) => state.edit.item);

//   useEffect(() => {
//     dispatch(fetchItems(filter));
//   }, [dispatch, filter]);

//   const handleEdit = (item) => {
//     dispatch(setEditItem(item));
//   };

//   const handleDelete = async (id, option) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/items/${option}/${id}`);
//       dispatch(deleteItem(id));
//     } catch (error) {
//       console.error("Error deleting item:", error);
//     }
//   };

//   // Function to handle adding new post
//   const handleAddPost = async (newPostData) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/items",
//         newPostData
//       );
//       const newPost = response.data;

//       // Dispatch the action to add the new post at the top
//       dispatch(addItem(newPost));
//     } catch (error) {
//       console.error("Error adding new post:", error);
//     }
//   };

//   const filteredItems = items.filter((item) => {
//     if (filter === "all") return true;
//     return item.option === filter;
//   });

//   return (
//     <div className="w-10/12 mx-auto py-8 text-black dark:bg-neutral-900 dark:text-white">
//       <FilterButtons
//         filter={filter}
//         setFilter={(filter) => dispatch(setFilter(filter))}
//       />
//       {editItem ? (
//         <EditForm />
//       ) : (
//         <div>
//           {filteredItems.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredItems.map((item) => (
//                 <ItemCard
//                   key={item.id}
//                   item={item}
//                   handleEdit={handleEdit}
//                   handleDelete={() => handleDelete(item.id, item.option)}
//                 />
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-lg">No posts available yet!</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// components/Posts.tsx
// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchItems, deleteItem, addItem } from "../store/slices/itemsSlice";
// import { setEditItem } from "../store/slices/editSlice";
// import { setFilter } from "../store/slices/filterSlice";
// import { setExpandedItemId } from "../store/slices/expandedItemState";
// import ItemCard from "./ItemCard";
// import EditForm from "./EditForm";
// import FilterButtons from "./FilterButtons";
// import { useEffect } from "react";
// import axios from "axios";
// import { RootState } from "../store/store";
// import AuthRoute from "../auth/auth";

// export default function Posts() {
//   const dispatch = useDispatch();
//   const items = useSelector((state: RootState) => state.items.items);
//   const filter = useSelector((state: RootState) => state.filter.filter);
//   const editItem = useSelector((state: RootState) => state.edit.item);
//   const expandedItemId = useSelector(
//     (state: RootState) => state.expandedItem.expandedItemId
//   );

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // Use the filter as the option for the API request
//         const postsResponse = await axios.get(
//           `http://localhost:3001/api/items/${filter}`
//         );

//         dispatch(fetchItems(filter)); // Pass the filter as option here
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, [dispatch, filter]);

//   const handleEdit = (item: any) => {
//     dispatch(setEditItem(item));
//   };

//   const handleDelete = async (id: string, option: string) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/items/${option}/${id}`);
//       dispatch(deleteItem(id));
//     } catch (error) {
//       console.error("Error deleting item:", error);
//     }
//   };

//   const handleAddPost = async (newPostData: any) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/items",
//         newPostData
//       );
//       const newPost = response.data;
//       dispatch(addItem(newPost));
//     } catch (error) {
//       console.error("Error adding new post:", error);
//     }
//   };

//   const filteredItems = items.filter((item) => {
//     if (filter === "all") return true;
//     return item.option === filter;
//   });

//   const toggleExpand = (id: string) => {
//     dispatch(setExpandedItemId(expandedItemId === id ? null : id));
//   };

//   return (
//     <AuthRoute>
//       <div className="w-10/12 mx-auto py-8 text-black dark:bg-neutral-900 dark:text-white">
//         <FilterButtons
//           filter={filter}
//           setFilter={(filter) => dispatch(setFilter(filter))}
//         />
//         {editItem ? (
//           <EditForm />
//         ) : (
//           <div>
//             {filteredItems.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredItems.map((item) => (
//                   <ItemCard
//                     key={item.id}
//                     item={item}
//                     handleEdit={handleEdit}
//                     handleDelete={() => handleDelete(item.id, item.option)}
//                     isExpanded={expandedItemId === item.id}
//                     toggleExpand={() => toggleExpand(item.id)}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <p className="text-center text-lg">No posts available yet!</p>
//             )}
//           </div>
//         )}
//       </div>
//     </AuthRoute>
//   );
// }

// Autho
// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { fetchItems, deleteItem, addItem } from "../store/slices/itemsSlice";
// import { setEditItem } from "../store/slices/editSlice";
// import { setFilter } from "../store/slices/filterSlice";
// import { setExpandedItemId } from "../store/slices/expandedItemState";
// import ItemCard from "./ItemCard";
// import EditForm from "./EditForm";
// import FilterButtons from "./FilterButtons";
// import { RootState } from "../store/store";
// import { useRouter } from "next/navigation";

// export default function Posts() {
//   const dispatch = useDispatch();
//   // const filter = "hospital"; // Example filter state
//   const handleSetFilter = (filterType) => dispatch(setFilter(filterType));
//   const items = useSelector((state: RootState) => state.items.items);
//   const filter = useSelector((state: RootState) => state.filter.filter);
//   const [userId, setUserId] = useState<number | null>(null); // Initially null

//   const editItem = useSelector((state: RootState) => state.edit.item);
//   const expandedItemId = useSelector(
//     (state: RootState) => state.expandedItem.expandedItemId
//   );
//   const router = useRouter(); // Get the router object

//   // Fetching posts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const postsResponse = await axios.get(
//           `http://localhost:3001/api/items/${filter}`
//         );

//         dispatch(fetchItems(filter)); // Pass the filter as an option here
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, [dispatch, filter]);

//   // Fetching user role for role based access controll

//   const handleEdit = (item) => {
//     dispatch(setEditItem(item));
//   };

//   const handleDelete = async (id, option) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/items/${option}/${id}`);
//       dispatch(deleteItem(id));
//     } catch (error) {
//       console.error("Error deleting item:", error);
//     }
//   };

//   const handleAddPost = async (newPostData) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/api/items",
//         newPostData
//       );
//       const newPost = response.data;
//       dispatch(addItem(newPost));
//     } catch (error) {
//       console.error("Error adding new post:", error);
//     }
//   };

//   const filteredItems = items.filter((item) => {
//     if (filter === "all") return true;
//     return item.option === filter;
//   });

//   const toggleExpand = (id) => {
//     dispatch(setExpandedItemId(expandedItemId === id ? null : id));
//   };

//   return (
//     <>
//       <div className="w-10/12 mx-auto py-8 text-black dark:bg-neutral-900 dark:text-white">
//         <FilterButtons
//           filter={filter}
//           setFilter={(filter) => dispatch(setFilter(filter))}
//         />

//         {editItem ? (
//           <EditForm />
//         ) : (
//           <div>
//             {filteredItems.length > 0 ? (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredItems.map((item) => (
//                   <ItemCard
//                     key={item.id}
//                     item={item}
//                     handleEdit={handleEdit}
//                     handleDelete={() => handleDelete(item.id, item.option)}
//                     isExpanded={expandedItemId === item.id}
//                     toggleExpand={() => toggleExpand(item.id)}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <p className="text-center text-lg">No posts available yet!</p>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

//
//
//
//

//

// login
// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice";

// const RegisterForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const isAuthenticated = useSelector(
//     (state: any) => state.auth.isAuthenticated
//   );

//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/api/auth/status",
//           {
//             withCredentials: true, // Ensure cookies are sent with the request
//           }
//         );
//         if (response.data.isAuthenticated) {
//           dispatch(setAuthenticated(true));
//         } else {
//           dispatch(setAuthenticated(false));
//         }
//       } catch (error) {
//         console.error("Failed to check authentication status", error);
//         dispatch(setAuthenticated(false));
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     checkAuthStatus();
//   }, [dispatch]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:3001/register",
//         { email, password },
//         { withCredentials: true } // Ensure cookies are sent with the request
//       );
//       dispatch(setAuthenticated(true));
//       router.push("/emergency");
//     } catch (error) {
//       setError("Failed to register. Please try again.");
//     }
//   };

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isAuthenticated) {
//     return <p>You are already registered and logged in!</p>;
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto text-black dark:text-black"
//     >
//       <h2 className="text-2xl mb-4">Register</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Register
//       </button>

//       <a className="font-bold text-blue-300 dark:text-gray-400" href="/signin">
//         Sign in
//       </a>
//     </form>
//   );
// };

// export default RegisterForm;

//
//
//
//
//
//
// sign in
// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Log the payload being sent to the API
//       console.log({ email, password });

//       const response = await axios.post(
//         "http://localhost:3001/signin",
//         { email, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         dispatch(setAuthenticated(true));
//         router.push("/emergency");
//       }
//     } catch (error) {
//       console.error(error.response?.data || "Failed to log in.");
//       setError("Failed to log in. Please check your credentials.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto text-black">
//       <h2 className="text-2xl mb-4">Sign In</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Sign In
//       </button>

//       <a href="/register" className="block mt-4 text-blue-500">
//         Don't have an account? Register here
//       </a>
//     </form>
//   );
// };

// export default SignInForm;

// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Log the payload being sent to the API
//       console.log({ email, password });

//       const response = await axios.post(
//         "http://localhost:3001/signin",
//         { email, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         const { token } = response.data; // Assuming your API returns a token
//         console.log(token);
//         if (token) {
//           localStorage.setItem("token", token); // Save the token in localStorage
//           console.log(token);

//           dispatch(setAuthenticated(true));
//           router.push("/emergency");
//         } else {
//           console.error("No token returned from API.");
//           setError("Login failed. Please try again.");
//         }
//       }
//     } catch (error) {
//       console.error(error.response?.data || "Failed to log in.");
//       setError("Failed to log in. Please check your credentials.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto text-black">
//       <h2 className="text-2xl mb-4">Sign In</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Sign In
//       </button>

//       <a href="/register" className="block mt-4 text-blue-500">
//         Don't have an account? Register here
//       </a>
//     </form>
//   );
// };

// export default SignInForm;

// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setAuthenticated } from "../store/slices/authSlice";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Log the payload being sent to the API
//       console.log({ email, password });

//       const response = await axios.post(
//         "http://localhost:3001/signin",
//         { email, password },
//         { withCredentials: true } // Ensure cookies are sent with the request
//       );

//       if (response.status === 200) {
//         dispatch(setAuthenticated(true));
//         router.push("/emergency");
//       } else {
//         console.error("Login failed.");
//         setError("Login failed. Please try again.");
//       }
//     } catch (error) {
//       console.error(error.response?.data || "Failed to log in.");
//       setError("Failed to log in. Please check your credentials.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto text-black">
//       <h2 className="text-2xl mb-4">Sign In</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mt-1 block w-full border rounded px-3 py-2"
//           required
//         />
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded"
//       >
//         Sign In
//       </button>

//       <a href="/register" className="block mt-4 text-blue-500">
//         Don't have an account? Register here
//       </a>
//     </form>
//   );
// };

// export default SignInForm;


/
/

// 
// 
// 
// 
ReactReduxContext
// import { createSlice } from "@reduxjs/toolkit";

// interface AuthState {
//   isAuthenticated: boolean;
//   loading: boolean;
// }

// const initialState: AuthState = {
//   isAuthenticated: false,
//   loading: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setAuthenticated(state, action) {
//       state.isAuthenticated = action.payload;
//     },
//     setLoading(state, action) {
//       state.loading = action.payload;
//     },
//   },
// });

// export const { setAuthenticated, setLoading } = authSlice.actions;

// export default authSlice.reducer;

// authSlice.js





// import { createSlice } from "@reduxjs/toolkit";

// interface EditState {
//   item: any;
//   title: string;
//   paragraph: string;
//   option: string;
//   image: File | null;
// }

// const initialState: EditState = {
//   item: null,
//   title: "",
//   paragraph: "",
//   option: "hospital",
//   image: null,
// };

// const editSlice = createSlice({
//   name: "edit",
//   initialState,
//   reducers: {
//     setEditItem: (state, action) => {
//       state.item = action.payload;
//       state.title = action.payload?.title || "";
//       state.paragraph = action.payload?.paragraph || "";
//       state.option = action.payload?.option || "hospital";
//       state.image = null;
//     },
//     clearEditItem: (state) => {
//       state.item = null;
//       state.title = "";
//       state.paragraph = "";
//       state.option = "hospital";
//       state.image = null;
//     },
//     setTitle: (state, action) => {
//       state.title = action.payload;
//     },
//     setParagraph: (state, action) => {
//       state.paragraph = action.payload;
//     },
//     setOption: (state, action) => {
//       state.option = action.payload;
//     },
//     setImage: (state, action) => {
//       state.image = action.payload;
//     },
//   },
// });

// export const {
//   setEditItem,
//   clearEditItem,
//   setTitle,
//   setParagraph,
//   setOption,
//   setImage,
// } = editSlice.actions;
// export default editSlice.reducer;

// import { Inter } from "next/font/google";
// import Nav from "./components/Nav";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Shopify e-commerce Website",
//   description: "Bye and Sell Everything that you need even sales!",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} dark:bg-black `}>
//         <div className="flex min-h-screen dark:bg-back text-black dark:text-white">
//           {/* Navbar on the left side */}
//           <div className="w-64">
//             <Nav />
//           </div>

//           {/* Main content area */}
//           <main className="flex flex-1">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }

// import { Inter } from "next/font/google";
// import Nav from "./components/Nav";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Shopify e-commerce Website",
//   description: "Buy and Sell Everything that you need even sales!",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} dark:bg-bg-neutral-900`}>
// <main className="main__content">
//   <div className="flex min-h-screen dark:bg-neutral-900 text-black dark:text-white">
//     {/* Navbar on the left side */}
//     <div className="lg:w-64 md:w-64 sm:w-64 flex-shrink-0">
//       <Nav />
//     </div>

//     {/* Main content area */}
//     <main className="flex flex-1">{children}</main>
//   </div>
// </main>
//       </body>
//     </html>
//   );
// }
// app/layout.tsx