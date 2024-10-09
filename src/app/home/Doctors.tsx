"use client";

import { useEffect, useRef } from "react";
import "./index.css";
import { doctorsData } from "./doctorsData"; // Assuming doctorsData is imported from a separate file

interface Product {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  des: string;
}

interface CardsProps {
  products: Product[];
}

export default function Doctors({ doctorsData }: CardsProps) {
  const productCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-card");
          } else {
            entry.target.classList.remove("animate-card"); // Reset animation for infinite scroll
          }
        });
      },
      { threshold: 0.1 }
    );

    productCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      productCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="doctore relative w-11/12 min-h-screen bg-cover bg-center bg-white dark:bg-neutral-900 text-black dark:text-white">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Doctors</h1>
          <p className="text-sm w-full max-w-lg mx-auto">
            Meet our experienced and qualified doctors.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-4">
          {doctorsData.map((doctor, index) => (
            <div
              key={doctor.id}
              ref={(el) => (productCardsRef.current[index] = el!)} // Add ref for each card
              className="group rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 opacity-0 translate-y-10"
            >
              <div className="h-72 w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={doctor.imageSrc}
                  alt={doctor.imageAlt}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl text-gray-200">
                  {doctor.name}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 group-hover:opacity-100">
                  {doctor.price}
                </p>
                <p className="mb-3 text-sm text-white opacity-0 group-hover:opacity-100">
                  {doctor.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
