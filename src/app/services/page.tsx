"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Btn from "../home/Btn.tsx";
import Services from "./Services";
import { services } from "./data";

// Parent component for the page
const Example: React.FC = () => {
  return (
    <div className="bg-white dark:text-white dark:bg-neutral-900 flex justify-center relative w-full min-h-screen flex flex-col">
      <div className="flex flex-col items-left justify-center flex-grow relative text-center lg:text-left mx-auto max-w-4xl py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white text-center">
            Comprehensive Healthcare Services for Every Need
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black dark:text-white">
            Our hospital is dedicated to providing a comprehensive array of
            healthcare services, ensuring that each patient receives exemplary
            care. Our team of skilled professionals formulates personalized
            treatment plans designed to address the unique needs of each
            individual, fostering a compassionate environment that promotes
            holistic wellness and recovery.
          </p>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-x-6">
          <Btn text="Explore Our Services" />
          <Link
            href="/departments"
            className="text-sm font-semibold leading-6 hover:underline text-black dark:text-white"
          >
            Learn More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      {/* <img
        src="/background12.jpg"
        className="about__image w-full object-cover"
        alt="About Image"
      /> */}
      <Image
        src="/background12.jpg"
        alt="Preview" // Provide an appropriate alt text
        layout="responsive" // Set the layout as needed
        className="about__image w-full object-cover"
        width={500}
        height={500}
      />
      <br />
      <br />
      <br />
      {/* Services section */}
      <Services services={services} />
      <br />
      <br /> <br />
      <br />
    </div>
  );
};

export default Example;
