// import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import "./style.css";
// // Define the prop types
// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: any;
// }

// interface ServicesProps {
//   services: Service[];
// }

// // Services component to display services
// const Services: React.FC<ServicesProps> = ({ services }) => {
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-card");
//           } else {
//             entry.target.classList.remove("animate-card");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     // Observe each card
//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       cardsRef.current.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   return (
//     <div className="w-11/12 mx-auto py-8 text-black dark:text-white">
//       <h2 className="text-3xl font-bold text-center mb-8 dark:text-gray-200 text-black">
//         Our Services
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             ref={(el) => (cardsRef.current[index] = el!)}
//             className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 text-black dark:text-white transform transition-transform duration-300 opacity-0 translate-y-10"
//           >
//             <div className="px-6 py-10">
//               <h5 className=" font-bold text-xl mb-2 flex items-center">
//                 <span className="text-teal-500">{service.icon}</span>
//                 <span className="ml-2">{service.title}</span>
//               </h5>
//               <p className="dark:text-gray-200 text-black text-base mb-4">
//                 {service.description}
//               </p>
//               <a
//                 href="/about"
//                 className="inline-block text-white border border-green-200 hover:bg-teal-400 bg-teal-400 hover:text-white transition duration-300 font-semibold py-2 px-4 rounded-xl"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

// Define the prop types
interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
}

interface ServicesProps {
  services: Service[];
}

// Services component to display services
const Services: React.FC<ServicesProps> = ({ services }) => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-card");
          } else {
            entry.target.classList.remove("animate-card");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Create a local copy of cardsRef.current
    const currentCards = cardsRef.current;

    // Observe each card
    currentCards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Use the local copy in the cleanup function
      currentCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // return (
  //   <div className="w-11/12 mx-auto py-8 text-black dark:text-white">
  //     <h2 className="text-3xl font-bold text-center mb-8 dark:text-gray-200 text-black">
  //       Our Services
  //     </h2>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  //       {services.map((service, index) => (
  //         <div
  //           key={service.id}
  //           ref={(el) => (cardsRef.current[index] = el!)}
  //           className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 text-black dark:text-white transform transition-transform duration-300 opacity-0 translate-y-10"
  //         >
  //           <div className="px-6 py-10">
  //             <h5 className="font-bold text-xl mb-2 flex items-center">
  //               <span className="text-teal-500">{service.icon}</span>
  //               <span className="ml-2">{service.title}</span>
  //             </h5>
  //             <p className="dark:text-gray-200 text-black text-base mb-4">
  //               {service.description}
  //             </p>
  //             <a
  //               href="/about"
  //               className="inline-block text-white border border-green-200 hover:bg-teal-400 bg-teal-400 hover:text-white transition duration-300 font-semibold py-2 px-4 rounded-xl"
  //             >
  //               Learn More
  //             </a>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-11/12 mx-auto py-8 text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-gray-200 text-black">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              if (el) {
                cardsRef.current[index] = el;
              }
            }}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 text-black dark:text-white transform transition-transform duration-300 opacity-0 translate-y-10"
          >
            <div className="px-6 py-10">
              <h5 className="font-bold text-xl mb-2 flex items-center">
                <span className="text-teal-500">{service.icon}</span>
                <span className="ml-2">{service.title}</span>
              </h5>
              <p className="dark:text-gray-200 text-black text-base mb-4">
                {service.description}
              </p>
              <a
                href="/about"
                className="inline-block text-white border border-green-200 hover:bg-teal-400 bg-teal-400 hover:text-white transition duration-300 font-semibold py-2 px-4 rounded-xl"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
