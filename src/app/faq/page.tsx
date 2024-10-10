"use client";
// @ts-ignore

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFaq } from "../store/slices/faqSlice"; // Update your redux slice accordingly
import Link from "next/link";

export default function Faq() {
  const faqs = [
    {
      question: "What should I bring for my hospital visit?",
      answer:
        "Please bring a valid ID, insurance card, and any relevant medical records or medications.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment through our website, by calling our appointment desk, or via our mobile app.",
    },
    {
      question: "What types of insurance do you accept?",
      answer: "We accept most major insurance plans.",
    },
    {
      question: "What should I do in case of an emergency?",
      answer:
        "In case of an emergency, please call 911 or go to the nearest emergency room immediately.",
    },
    {
      question: "Are visitors allowed in the hospital?",
      answer: "Yes, visitors are allowed during designated visiting hours.",
    },
    {
      question: "What if I need to cancel my appointment?",
      answer:
        "Please call our office as soon as possible to cancel or reschedule your appointment.",
    },
    {
      question: "Do you have a pharmacy on-site?",
      answer:
        "Yes, our hospital has an on-site pharmacy for your convenience, where you can fill prescriptions after your visit.",
    },
    {
      question: "Is there a waiting area for family members?",
      answer:
        "Yes, we have designated waiting areas for family members near the patient care units.",
    },
    {
      question: "What are the hospital's visiting hours?",
      answer:
        "Visiting hours may vary by department. Please check our website or contact us for specific visiting hours.",
    },
  ];

  const contentRefs = useRef([]);
  const dispatch = useDispatch();
  // @ts-ignore

  const openFaqIndices = useSelector((state) => state.faq.openFaqIndices); // Use an array for open indices

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (openFaqIndices.includes(i)) {
        el.style.maxHeight = el.scrollHeight + "px"; // Open this FAQ
      } else {
        el.style.maxHeight = "0px"; // Close this FAQ
      }
    });
  }, [openFaqIndices]);

  const handleToggle = (index) => {
    dispatch(toggleFaq(index)); // Dispatch action to toggle the FAQ
  };

  return (
    <div className="bg-white dark:bg-neutral-900">
      <br />
      <br />
      <section className="flex justify-center items-center min-h-screen bg-white dark:bg-neutral-900">
        <br />
        <br />
        <br />
        <div className="w-full max-w-4xl p-8 rounded-lg bg-white dark:bg-neutral-900 shadow-md">
          <h1 className="text-2xl font-bold text-center dark:text-white mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 dark:border-neutral-700"
              >
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none dark:text-white"
                  onClick={() => handleToggle(index)} // Call handleToggle on button click
                >
                  <span className="text-base font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 dark:text-white transform transition-transform duration-200 ${
                      openFaqIndices.includes(index) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                </button>
                <div
                  // @ts-ignore

                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                  style={{ maxHeight: "0px" }} // Default closed height
                >
                  <div className="mt-2 text-gray-600 text-sm">
                    <p>{faq.answer}</p>
                    <Link
                      href="/about"
                      className="text-blue-500 hover:underline"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
