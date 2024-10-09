// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Search from "../adminPage/UsersControllers/Search";
// import "./style.css";
// const departments = [
//   {
//     id: 1,
//     image: "/eye.jpg",
//     title: "Eye Care",
//     description:
//       "Comprehensive eye examinations, treatments for various eye conditions, and surgeries.",
//   },
//   {
//     id: 2,
//     image: "/nephrology.jpg",
//     title: "Nephrology",
//     description:
//       "Expert care for kidney health, including dialysis and management of kidney diseases.",
//   },
//   {
//     id: 3,
//     image: "/neurology.jpg",
//     title: "Neurology",
//     description:
//       "Diagnosis and treatment of neurological disorders, including strokes and migraines.",
//   },
//   {
//     id: 4,
//     image: "/cardiology.jpg",
//     title: "Cardiology",
//     description:
//       "Advanced cardiac care including heart disease prevention and management.",
//   },
//   {
//     id: 5,
//     image: "/Endocrinology.jpg",
//     title: "Endocrinology",
//     description:
//       "Endocrinology Care for hormone-related conditions, including diabetes, thyroid, and metabolic disorders..",
//   },
//   {
//     id: 6,
//     image: "/dermatology.jpg",
//     title: "Dermatology",
//     description:
//       "Specialized care for skin, hair, and nails, including cosmetic treatments.",
//   },
//   {
//     id: 7,
//     image: "/oncology.jpg",
//     title: "Oncology",
//     description:
//       "Comprehensive cancer care, including diagnosis, treatment, and support services.",
//   },
//   {
//     id: 8,
//     image: "/gastroenterology.jpg",
//     title: "Gastroenterology",
//     description:
//       "Expert diagnosis and treatment of digestive system disorders, including liver health.",
//   },
//   {
//     id: 9,
//     image: "/pulmonology.jpg",
//     title: "Pulmonology",
//     description:
//       "Expert care for lung health, including asthma, COPD, and respiratory disorders.",
//   },
// ];

// const ProductPage: React.FC = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [filteredDepartments, setFilteredDepartments] = useState(departments);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const cardRefs = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     updateSuggestions(searchValue);
//   }, [searchValue]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slide-up");
//           } else {
//             entry.target.classList.remove("animate-slide-up"); // Reset for infinite scroll
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     cardRefs.current.forEach((card) => {
//       if (card) {
//         observer.observe(card);
//       }
//     });

//     return () => {
//       cardRefs.current.forEach((card) => {
//         if (card) {
//           observer.unobserve(card);
//         }
//       });
//     };
//   }, [filteredDepartments]);

//   const handleSearch = (value: string) => {
//     setSearchValue(value);
//     const results = departments.filter((department) =>
//       department.title.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredDepartments(results);
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setSearchValue(suggestion);
//     handleSearch(suggestion);
//   };

//   const updateSuggestions = (value: string) => {
//     const filteredSuggestions = departments
//       .map((department) => department.title)
//       .filter((title) => title.toLowerCase().includes(value.toLowerCase()));
//     setSuggestions(filteredSuggestions);
//   };

//   return (
//     <div className="p-4 bg-white dark:bg-neutral-900 dark:text-white">
//       <h2 className="text-3xl font-bold mb-6 text-center">Our Departments</h2>
//       <main className="flex flex-col items-center justify-between p-4">
//         <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex-inline">
//           <Search
//             onSearch={handleSearch}
//             suggestions={suggestions}
//             onSuggestionClick={handleSuggestionClick}
//           />
//         </div>
//         <br />
//         <br />
//         <p className="text-1xl mb-6 text-center text-black dark:text-white">
//           Our hospital offers a comprehensive range of services designed to meet
//           your healthcare needs. From emergency care and advanced surgical
//           procedures to specialized departments like cardiology, oncology, and
//           orthopedics, we are committed to providing top-tier medical services.
//           Whether you're visiting for a routine check-up or require more
//           intensive care, our team of skilled professionals is here to ensure
//           your well-being.
//         </p>
//         <br />
//         <br />
//       </main>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filteredDepartments.length > 0 ? (
//           filteredDepartments.map((department, index) => (
//             <div
//               key={department.id}
//               ref={(el) => (cardRefs.current[index] = el!)}
//               className="bg-white shadow-lg rounded-lg overflow-hidden card-initial"
//             >
//               <img
//                 src={department.image}
//                 alt={department.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h1 className="text-gray-700 font-bold">{department.title}</h1>
//                 <p className="text-gray-700">{department.description}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No results found</p>
//         )}
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

// export default ProductPage;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Search from "../adminPage/UsersControllers/Search";
import "./style.css";

const departments = [
  {
    id: 1,
    image: "/eye.jpg",
    title: "Eye Care",
    description:
      "Comprehensive eye examinations, treatments for various eye conditions, and surgeries.",
  },
  {
    id: 2,
    image: "/nephrology.jpg",
    title: "Nephrology",
    description:
      "Expert care for kidney health, including dialysis and management of kidney diseases.",
  },
  {
    id: 3,
    image: "/neurology.jpg",
    title: "Neurology",
    description:
      "Diagnosis and treatment of neurological disorders, including strokes and migraines.",
  },
  {
    id: 4,
    image: "/cardiology.jpg",
    title: "Cardiology",
    description:
      "Advanced cardiac care including heart disease prevention and management.",
  },
  {
    id: 5,
    image: "/Endocrinology.jpg",
    title: "Endocrinology",
    description:
      "Endocrinology Care for hormone-related conditions, including diabetes, thyroid, and metabolic disorders.",
  },
  {
    id: 6,
    image: "/dermatology.jpg",
    title: "Dermatology",
    description:
      "Specialized care for skin, hair, and nails, including cosmetic treatments.",
  },
  {
    id: 7,
    image: "/oncology.jpg",
    title: "Oncology",
    description:
      "Comprehensive cancer care, including diagnosis, treatment, and support services.",
  },
  {
    id: 8,
    image: "/gastroenterology.jpg",
    title: "Gastroenterology",
    description:
      "Expert diagnosis and treatment of digestive system disorders, including liver health.",
  },
  {
    id: 9,
    image: "/pulmonology.jpg",
    title: "Pulmonology",
    description:
      "Expert care for lung health, including asthma, COPD, and respiratory disorders.",
  },
];

const ProductPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredDepartments, setFilteredDepartments] = useState(departments);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    updateSuggestions(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          } else {
            entry.target.classList.remove("animate-slide-up"); // Reset for infinite scroll
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentCards = cardRefs.current;
    currentCards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, [filteredDepartments]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const results = departments.filter((department) =>
      department.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDepartments(results);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    handleSearch(suggestion);
  };

  const updateSuggestions = (value: string) => {
    const filteredSuggestions = departments
      .map((department) => department.title)
      .filter((title) => title.toLowerCase().includes(value.toLowerCase()));
    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="p-4 bg-white dark:bg-neutral-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Departments</h2>
      <main className="flex flex-col items-center justify-between p-4">
        <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex-inline">
          <Search
            onSearch={handleSearch}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
        <br />
        <br />
        <p className="text-1xl mb-6 text-center text-black dark:text-white">
          Our hospital offers a comprehensive range of services designed to meet
          your healthcare needs. From emergency care and advanced surgical
          procedures to specialized departments like cardiology, oncology, and
          orthopedics, we are committed to providing top-tier medical services.
          Whether you&#39;re visiting for a routine check-up or require more
          intensive care, our team of skilled professionals is here to ensure
          your well-being.
        </p>
        <br />
        <br />
      </main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredDepartments.length > 0 ? (
          filteredDepartments.map((department, index) => (
            <div
              key={department.id}
              ref={(el) => (cardRefs.current[index] = el!)}
              className="bg-white shadow-lg rounded-lg overflow-hidden card-initial"
            >
              <Image
                src={department.image}
                alt={department.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h1 className="text-gray-700 font-bold">{department.title}</h1>
                <p className="text-gray-700">{department.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No results found</p>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProductPage;
