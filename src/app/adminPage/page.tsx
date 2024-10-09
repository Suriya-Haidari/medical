"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoutButton from "../auth/logout";
import Graph from "./Chart";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Notif from "../emergency/Notif";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "New Post ", href: "/new-post", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [userId, setUserId] = useState(null);
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [adminCount, setAdminCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await axios.get("http://localhost:3001/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const allUsers = response.data;
        setUsers(allUsers);

        // Count users by role
        const adminUsers = allUsers.filter((user) => user.role === "admin");
        const managerUsers = allUsers.filter((user) => user.role === "manager");
        const regularUsers = allUsers.filter((user) => user.role === "user");

        setAdminCount(adminUsers.length);
        setManagerCount(managerUsers.length);
        setUserCount(regularUsers.length);
      } catch (error) {
        console.error("Error fetching users:", error);
        setErrorMessage("Failed to load user data.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-neutral-900">
      {/* Navbar */}
      <Disclosure as="nav" className="bg-gray-200 dark:bg-neutral-800 w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  {/* Mobile menu button */}
                  <div className="flex-shrink-0 sm:hidden">
                    <Disclosure.Button className="text-gray-200 inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden sm:flex sm:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-teal-500 dark:bg-white dark:text-black"
                            : "text-black bg-gray-200 hover:bg-gray-500 hover:text-gray-300",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Viewing notification */}
                  <div className="relative">
                    {/* Button stays visible */}
                    <button
                      onClick={() => setShowNotifications(!showNotifications)}
                      className="text-gray-900 dark:text-gray-200 "
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" />
                    </button>

                    {/* Display notifications as a modal or dropdown */}
                    {showNotifications && (
                      <div className="absolute dark:bg-black border-white border right-0 mt-2 w-64 bg-white shadow-lg rounded-md">
                        <Notif />
                      </div>
                    )}
                  </div>
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/default.jpg"
                        alt=""
                      />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/adminPage/profile"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/adminPage/UsersControllers"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            <LogoutButton />
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-blue-700 text-white"
                        : "text-black hover:bg-blue-500 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Main content */}
      <div className="py-10 dark:text-gray-200">
        <header className="bg-gray-200 dark:bg-neutral-800 text-black shadow dark:text-gray-200">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Manager Dashboard</h1>
            <p className="mt-2">
              Welcome to the admin panel! Manage users, monitor system activity,
              and configure settings.
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Cards/Grid Section */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total Users */}
            <div className="bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 text-black shadow-sm rounded-lg p-6">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="mt-1 text-3xl font-bold">{users.length}</p>
              <p className="mt-2 text-sm">Total registered users</p>
            </div>

            {/* Admins */}
            <div className="bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 text-black shadow-sm rounded-lg p-6">
              <h2 className="text-lg font-semibold">Admins</h2>
              <p className="mt-1 text-3xl font-bold">{adminCount}</p>
              <p className="mt-2 text-sm">Total admins</p>
            </div>

            {/* Managers */}
            <div className="bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 text-black shadow-sm rounded-lg p-6">
              <h2 className="text-lg font-semibold">Managers</h2>
              <p className="mt-1 text-3xl font-bold">{managerCount}</p>
              <p className="mt-2 text-sm">Total managers</p>
            </div>

            {/* Regular Users */}
            <div className="bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 text-black shadow-sm rounded-lg p-6">
              <h2 className="text-lg font-semibold">Regular Users</h2>
              <p className="mt-1 text-3xl font-bold">{userCount}</p>
              <p className="mt-2 text-sm">Total regular users</p>
            </div>
          </div>

          {/* Graph Section */}
          <div className="mt-10">
            <Graph />
          </div>

          {/* Error message display */}
          {errorMessage && (
            <div className="mt-6 text-red-500">{errorMessage}</div>
          )}
        </main>
      </div>
    </div>
  );
}
