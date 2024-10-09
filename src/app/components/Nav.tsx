"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Logout from "../auth/logout";
import "./Notification.css";

const navigationLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Departments", href: "/departments" },
  { name: "FAQ", href: "/faq" },
  { name: "Emergency News", href: "/emergency" },
  { name: "Contact", href: "/contactUs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await fetch("http://localhost:3001/api/user/role", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserRole(data.role);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Disclosure as="nav" className="z-50 w-full sm:w-64 fixed">
      {({ open }) => (
        <>
          {/* Mobile/Tablet Toggle Button */}
          <div className="sm:hidden">
            <div className="w-full bg-white dark:bg-neutral-800 text-black dark:text-white px-4">
              <Disclosure.Button className="flex items-center justify-between w-full p-4">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile and Tablet Navbar */}
          <Disclosure.Panel
            className={`sm:hidden fixed inset-0 w-full bg-teal-300 dark:bg-neutral-800 z-50 transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button inside mobile menu */}
            <div className="flex justify-end p-4">
              <Disclosure.Button>
                <XMarkIcon
                  className="h-6 w-6 text-black dark:text-white"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </div>

            <div className="px-4 mb-4 flex items-center space-x-4">
              <ThemeToggle /> {/* Mobile theme toggle */}
              <Logout /> {/* Mobile logout button */}
            </div>

            <div className="flex flex-col space-y-2 px-4">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={classNames(
                      isActive
                        ? "bg-white dark:bg-neutral-500 text-black dark:text-white"
                        : "text-gray-900 dark:text-gray-200 hover:bg-neutral-500 dark:hover:bg-neutral-700",
                      "flex h-[48px] items-center p-3 text-sm font-medium rounded-md"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Admin Panel link, visible only for 'manager' role */}
              {userRole === "manager" && (
                <Link
                  key="adminPanel"
                  href="/adminPage"
                  className={classNames(
                    pathname === "/adminPage"
                      ? "bg-white dark:bg-neutral-500 text-black dark:text-white"
                      : "text-gray-900 dark:text-gray-200 hover:bg-neutral-500 dark:hover:bg-neutral-700",
                    "flex h-[48px] items-center p-3 text-sm font-medium rounded-md"
                  )}
                >
                  Admin Panel
                </Link>
              )}
            </div>
          </Disclosure.Panel>

          {/* Desktop Navbar */}
          <div className="hidden sm:flex flex-col w-64 bg-gray-200 dark:bg-neutral-800 h-full fixed inset-y-0 z-50">
            <div className="p-4 flex items-center space-x-4">
              <ThemeToggle /> {/* Desktop theme toggle */}
            </div>

            <div className="flex flex-col space-y-2 px-4 flex-grow">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={classNames(
                      isActive
                        ? "bg-white dark:bg-neutral-500 text-black dark:text-white"
                        : "text-gray-900 dark:text-gray-200 hover:bg-neutral-500 dark:hover:bg-neutral-700",
                      "flex h-[48px] items-center p-3 text-sm font-medium rounded-md"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {/* Admin Panel link, visible only for 'manager' role */}
              {userRole === "manager" && (
                <Link
                  key="adminPanel"
                  href="/adminPage"
                  className={classNames(
                    pathname === "/adminPage"
                      ? "bg-white dark:bg-neutral-500 text-black dark:text-white"
                      : "text-gray-900 dark:text-gray-200 hover:bg-neutral-500 dark:hover:bg-neutral-700",
                    "flex h-[48px] items-center p-3 text-sm font-medium rounded-md"
                  )}
                >
                  Admin Panel
                </Link>
              )}
              <Logout /> {/* Desktop logout button */}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
