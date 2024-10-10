"use client";

import { useEffect, useRef } from "react";
import "./index.css";
// import { doctorsData } from "./doctorsData"; // Assuming doctorsData is imported from a separate file

interface Product {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  des: string;
}

interface CardsProps {
  doctorsData: Product[];
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
              ref={(el) => {
                if (el) {
                  productCardsRef.current[index] = el;
                }
              }}
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

// import { useEffect, useRef } from "react";
// import Image from "next/image"; // Import Next.js Image component
// import "./index.css";
// import { doctorsData } from "./doctorsData"; // Assuming doctorsData is imported from a separate file

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   imageSrc: string;
//   imageAlt: string;
//   des: string;
// }

// interface CardsProps {
//   products: Product[];
// }

// export default function Doctors({ doctorsData }: CardsProps) {
//   const productCardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-card");
//           } else {
//             entry.target.classList.remove("animate-card"); // Reset animation for infinite scroll
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const currentRefs = productCardsRef.current;

//     currentRefs.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       currentRefs.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   return (
//     <div className="doctore relative w-11/12 min-h-screen bg-cover bg-center bg-white dark:bg-neutral-900 text-black dark:text-white">
//       <div className="absolute inset-0 opacity-50"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">Our Doctors</h1>
//           <p className="text-sm w-full max-w-lg mx-auto">
//             Meet our experienced and qualified doctors.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-4">
//           {doctorsData.map((doctor, index) => (
//             <div
//               key={doctor.id}
//               ref={(el) => (productCardsRef.current[index] = el!)} // Add ref for each card
//               className="group rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 opacity-0 translate-y-10"
//             >
//               <div className="h-72 w-full">
//                 <Image
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
//                   src={doctor.imageSrc}
//                   alt={doctor.imageAlt}
//                   layout="responsive"
//                   width={500}
//                   height={300}
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
//               <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
//                 <h1 className="font-dmserif text-3xl text-gray-200">
//                   {doctor.name}
//                 </h1>
//                 <p className="mb-3 text-lg italic text-white opacity-0 group-hover:opacity-100">
//                   {doctor.price}
//                 </p>
//                 <p className="mb-3 text-sm text-white opacity-0 group-hover:opacity-100">
//                   {doctor.des}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import Image from "next/image";

// const Doctors = ({ doctorsData }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const cards = [
//     {
//       id: 1,
//       title: "Card 1",
//       content: "This is a short paragraph for card 1.",
//     },
//     {
//       id: 2,
//       title: "Card 2",
//       content: "This is a short paragraph for card 2.",
//     },
//     {
//       id: 3,
//       title: "Card 3",
//       content: "This is a short paragraph for card 3.",
//     },
//     {
//       id: 4,
//       title: "Card 4",
//       content: "This is a short paragraph for card 4.",
//     },
//     {
//       id: 5,
//       title: "Card 5",
//       content: "This is a short paragraph for card 5.",
//     },
//     {
//       id: 6,
//       title: "Card 6",
//       content: "This is a short paragraph for card 6.",
//     },
//     {
//       id: 7,
//       title: "Card 7",
//       content: "This is a short paragraph for card 7.",
//     },
//     {
//       id: 8,
//       title: "Card 8",
//       content: "This is a short paragraph for card 8.",
//     },
//     {
//       id: 9,
//       title: "Card 9",
//       content: "This is a short paragraph for card 9.",
//     },
//     {
//       id: 10,
//       title: "Card 10",
//       content: "This is a short paragraph for card 10.",
//     },
//   ];

//   const handlePaginationClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side with heading, paragraph, and button */}
//       <div className="w-1/3 flex flex-col justify-center items-center p-8">
//         <h1 className="text-4xl font-bold mb-4">Explore Our Products</h1>
//         <p className="text-lg mb-6">
//           Discover a wide range of products tailored to your needs.
//         </p>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
//           Get Started
//         </button>
//       </div>

//       {/* Right side with cards */}
//       <div className="w-2/3 flex flex-col justify-center items-center relative">
//         <div
//           className="flex flex-col transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateY(-${activeIndex * 100}%)` }}
//         >
//           {doctorsData.map((card, index) => (
//             <div
//               key={card.id}
//               className={`card p-4 rounded-lg shadow-lg transition-transform transform ${
//                 activeIndex === index ? "scale-110" : "scale-100"
//               }`}
//             >
//               <Image
//                 src={`https://via.placeholder.com/150?text=${card.title}`}
//                 alt={card.title}
//                 width={150} // Specify the width
//                 height={100} // Specify the height
//                 className="w-full h-32 object-cover rounded-t-lg mb-4"
//               />
//               <h2 className="text-xl font-bold mb-2">{card.title}</h2>
//               <p>{card.content}</p>
//             </div>
//           ))}
//         </div>

//         {/* Pagination dots */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {cards.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full cursor-pointer ${
//                 activeIndex === index ? "bg-blue-600" : "bg-gray-400"
//               }`}
//               onClick={() => handlePaginationClick(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;
