"use client";
import React, { useState, useEffect } from "react";
import DisplayEmails from "./dispkayEmails"; // Corrected import statement
import AuthRoute from "../auth/auth";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState<any[]>([]); // Hold notifications state
  const [client, setClient] = useState<WebSocket | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // WebSocket to listen for real-time notifications
    const newClient = new WebSocket("ws://localhost:3002");

    newClient.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    newClient.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "new_notification") {
        setNotifications((prev) => [...prev, data.notification]); // Append new notification
      }
    };

    setClient(newClient);

    return () => {
      newClient.close(); // Cleanup WebSocket on component unmount
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (client) {
      client.send(
        JSON.stringify({
          type: "new_email",
          email: { fullName, email, message },
        })
      );
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/formNotifications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error sending notification");
      }

      console.log("Notification sent successfully!");
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError((err as Error).message);
      console.error("Error sending notification", err);
    }
  };

  return (
    <div className="article__container">
      <AuthRoute>
        <article className="article text-black article w-full h-full flex flex-col md:flex-row justify-center items-center bg-cover bg-center bg-fixed ">
          <section className="relative md:w-5/12 max-w-xl bg-transparent border-2 border-white/50 rounded-3xl backdrop-blur-lg flex justify-center items-center px-20 py-10 mt-4 md:mt-0">
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className="text-2xl text-black/60 text-center mb-6">
                Send Feedback
              </h1>
              <div className="relative mb-8 max-w-[310px] border-b-2 border-black/40 mx-auto">
                <input
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="w-full h-14 bg-transparent border-none outline-none text-base pl-2 text-black/60 peer"
                />
                <label className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black/60 text-base pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-valid:-top-2">
                  Your Name
                </label>
              </div>

              <div className="relative mb-8 max-w-[310px] border-b-2 border-black/40 mx-auto">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                  className="w-full h-14 bg-transparent border-none outline-none text-base pl-2 text-black/60 peer"
                />
                <label className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black/60 text-base pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-valid:-top-2">
                  Your Email
                </label>
              </div>

              <div className="relative mb-8 max-w-[310px] border-b-2 border-black/40 mx-auto">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={handleInputChange}
                  required
                  className="w-full h-auto bg-transparent border-none outline-none text-base pl-2 pt-4 text-black/60 peer"
                />
                <label className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black/60 text-base pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-valid:-top-2">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-10 rounded-full bg-white text-black font-semibold hover:bg-white/50 transition-all duration-300"
              >
                Send
              </button>
            </form>
            <br />
            <br />
            <br />
          </section>
          <div className="w-11/12 md:w-5/12 mt-4 md:mt-0">
            {/* Display Notifications */}
            <DisplayEmails notifications={notifications} setError={setError} />
          </div>
          {/* Display error if present */}
          {error && <div className="error">{error}</div>}
        </article>
      </AuthRoute>
    </div>
  );
};

export default ContactForm;
