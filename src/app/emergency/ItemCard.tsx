// import { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import Cookies from "js-cookie";
// import "./style.css";
// export default function ItemCard({
//   item,
//   handleEdit,
//   handleDelete,
//   isExpanded,
//   toggleExpand,
// }) {
//   const [isInView, setIsInView] = useState(false);
//   const [initialImage, setInitialImage] = useState<string | null>(null);
//   const [role, setRole] = useState<string>("user");

//   const cardRef = useRef(null);

//   useEffect(() => {
//     // Initialize the initial image URL
//     setInitialImage(item.image);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsInView(true);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, [item.image]);

//   // Role for the authentication
//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const token = Cookies.get("token");
//         if (!token) {
//           console.error("No token found in cookies.");
//           return;
//         }

//         const response = await axios.get(
//           "http://localhost:3001/api/user/role",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setRole(response.data.role);
//       } catch (error) {
//         console.error("Error fetching user role:", error);
//         setRole("user");
//       }
//     };

//     fetchUserRole();
//   }, []);

//   const imageSrc =
//     item.image && item.image !== initialImage
//       ? `data:image/jpeg;base64,${item.image}`
//       : `data:image/jpeg;base64,${initialImage}`;

//   // Determine the content to display (first 20 characters or full text)
//   const displayedText = isExpanded
//     ? item.paragraph
//     : `${item.paragraph.slice(0, 20)}...`;

//   return (
//     <div
//       ref={cardRef}
//       className={`w-full sm:w-64 md:w-72 lg:w-80 max-w-full rounded-xl overflow-hidden shadow-lg transform bg-gray-200 dark:bg-neutral-800 dark:text-gray-300 transition-transform duration-300 ${
//         isInView ? "animate-slide-up" : "card-initial"
//       }`}
//     >
//       <img
//         src={imageSrc}
//         alt={item.title}
//         className="w-full h-48 object-cover"
//       />

//       <div className="px-6 py-4">
//         <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//         <p className="text-gray-700 dark:text-gray-400 break-words">
//           {displayedText}
//         </p>
//         {item.paragraph.length > 20 && (
//           <button
//             onClick={toggleExpand}
//             className="text-blue-500 underline focus:outline-none"
//           >
//             {isExpanded ? "Show less" : "Show more"}
//           </button>
//         )}

//         <p className="mt-2">
//           <span
//             className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
//               item.option === "hospital"
//                 ? "bg-green-500 text-white"
//                 : item.option === "doctors"
//                 ? "bg-blue-500 text-white"
//                 : "bg-red-500 text-white"
//             }`}
//           >
//             {item.option}
//           </span>
//         </p>
//       </div>

//       {(role === "admin" || role === "manager") && (
//         <div className="px-6 py-4 flex justify-end items-center">
//           <button
//             onClick={() => handleEdit(item)}
//             className="px-4 py-2 text-sm font-semibold text-white rounded hover:bg-gray-300 hover:text-black"
//           >
//             <FontAwesomeIcon
//               className="text-black dark:text-white"
//               icon={faEdit}
//             />
//           </button>
//           <button
//             onClick={() => handleDelete(item.id)}
//             className="px-4 py-2 text-sm font-semibold text-white rounded hover:bg-gray-300 hover:text-black"
//           >
//             <FontAwesomeIcon
//               className="text-black dark:text-white"
//               icon={faTrash}
//             />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image"; // Replacing <img> with Image for optimization
import "./style.css";

export default function ItemCard({
  item,
  handleEdit,
  handleDelete,
  isExpanded,
  toggleExpand,
}) {
  const [isInView, setIsInView] = useState(false);
  const [initialImage, setInitialImage] = useState<string | null>(null);
  const [role, setRole] = useState<string>("user");

  const cardRef = useRef<HTMLDivElement | null>(null); // Specify type for better TypeScript support

  useEffect(() => {
    // Initialize the initial image URL
    setInitialImage(item.image);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target); // Stop observing after first intersection
          }
        });
      },
      { threshold: 0.1 }
    );

    // Using a local variable to avoid stale closure issues
    const currentCard = cardRef.current;

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [item.image]);

  // Fetch the role for the authentication
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await axios.get(
          "http://localhost:3001/api/user/role",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role:", error);
        setRole("user");
      }
    };

    fetchUserRole();
  }, []);

  const imageSrc =
    item.image && item.image !== initialImage
      ? `data:image/jpeg;base64,${item.image}`
      : `data:image/jpeg;base64,${initialImage}`;

  // Determine the content to display (first 20 characters or full text)
  const displayedText = isExpanded
    ? item.paragraph
    : `${item.paragraph.slice(0, 20)}...`;

  return (
    <div
      ref={cardRef}
      className={`w-full sm:w-64 md:w-72 lg:w-80 max-w-full rounded-xl overflow-hidden shadow-lg transform bg-gray-200 dark:bg-neutral-800 dark:text-gray-300 transition-transform duration-300 ${
        isInView ? "animate-slide-up" : "card-initial"
      }`}
    >
      <Image
        src={imageSrc}
        alt={item.title}
        width={500} // Provide a width and height for Image optimization
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-700 dark:text-gray-400 break-words">
          {displayedText}
        </p>
        {item.paragraph.length > 20 && (
          <button
            onClick={toggleExpand}
            className="text-blue-500 underline focus:outline-none"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}

        <p className="mt-2">
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              item.option === "hospital"
                ? "bg-green-500 text-white"
                : item.option === "doctors"
                ? "bg-blue-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {item.option}
          </span>
        </p>
      </div>

      {(role === "admin" || role === "manager") && (
        <div className="px-6 py-4 flex justify-end items-center">
          <button
            onClick={() => handleEdit(item)}
            className="px-4 py-2 text-sm font-semibold text-white rounded hover:bg-gray-300 hover:text-black"
          >
            <FontAwesomeIcon
              className="text-black dark:text-white"
              icon={faEdit}
            />
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="px-4 py-2 text-sm font-semibold text-white rounded hover:bg-gray-300 hover:text-black"
          >
            <FontAwesomeIcon
              className="text-black dark:text-white"
              icon={faTrash}
            />
          </button>
        </div>
      )}
    </div>
  );
}
