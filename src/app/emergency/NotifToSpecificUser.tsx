// import React, { useState } from "react";
// import Cookies from "js-cookie";

// const CreateNotificationForm = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const token = Cookies.get("token");
//       const response = await fetch(
//         "http://localhost:3001/api/notifications/send",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, message }), // Ensure email is included
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to send notification.");
//       }

//       setSuccess("Notification sent successfully.");
//       setEmail("");
//       setMessage("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="notification-form">
//       <div>
//         <label htmlFor="email">User Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border rounded px-2 py-1"
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//           className="border rounded px-2 py-1"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//       >
//         Send Notification
//       </button>

//       {error && <p className="text-red-500">{error}</p>}
//       {success && <p className="text-green-500">{success}</p>}
//     </form>
//   );
// };

// export default CreateNotificationForm;

import React, { useState } from "react";
import Cookies from "js-cookie";

const CreateNotificationForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = Cookies.get("token");
      const response = await fetch(
        "http://localhost:3001/api/notifications/send", // Adjust endpoint
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message }), // Ensure email is included
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send notification.");
      }

      setSuccess("Notification sent successfully.");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="notification-form">
      <div>
        <label htmlFor="email">User Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded px-2 py-1"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border rounded px-2 py-1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send Notification
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </form>
  );
};

export default CreateNotificationForm;
