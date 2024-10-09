"use client";
import ClientReview from "./ClientReview";
import Process from "./Process";
import AuthRoute from "../auth/auth";
import { clientReviews, imagesData } from "./data.tsx";
import "./style.css";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <AuthRoute>
      <div className="flex w-full flex-col justify-center items-center dark:bg-neutral-900 bg-white p-6">
        <h1 className="text-5xl font-bold dark:text-white mb-10 mt-8 sm:mt-12 text-center">
          About Our Hospital
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            {/* <img
              src="/de.png"
              alt="About Our Hospital"
              className="rounded-lg w-full about_img"
            /> */}
            <Image src="/de.png" alt="Description" width={500} height={300} />
          </div>

          <div className="w-full lg:w-1/2 lg:ml-8 flex flex-col justify-center items-center text-center">
            <div className="w-full sm:w-11/12 md:w-10/12 lg:w-full px-4">
              <p className="dark:text-white mb-4">
                Welcome to our hospital! We are dedicated to providing the best
                medical services to our patients and their families.
              </p>
              <p className="dark:text-white mb-4">
                Our journey started with a simple idea: to make a positive
                impact in our community by offering compassionate and quality
                healthcare. Our team of experienced professionals is here to
                ensure you receive the care you deserve.
              </p>
              <button className="btn dark:bg-white bg-gray-800 p-2 hover:bg-gray-700 hover:text-white rounded-lg text-white dark:text-gray-950">
                <Link href="/contactUs"> Take an Appointment</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Clients Review Section */}
        <div className="mt-12 w-full max-w-6xl">
          <h2 className="text-3xl font-semibold dark:text-white mb-4 text-center">
            Patient Reviews
          </h2>
          {/* Sending data from data.tsx file */}
          <ClientReview reviews={clientReviews} />
        </div>

        <div className="mt-12 w-full max-w-6xl">
          <Process images={imagesData} />
        </div>
      </div>
    </AuthRoute>
  );
}
