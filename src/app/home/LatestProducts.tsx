// import { useState } from "react";

// export default function XRowCards() {
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
//           {cards.map((card, index) => (
//             <div
//               key={card.id}
//               className={`card p-4 rounded-lg shadow-lg transition-transform transform ${
//                 activeIndex === index ? "scale-110" : "scale-100"
//               }`}
//             >
//               <img
//                 src={`https://via.placeholder.com/150?text=${card.title}`}
//                 alt={card.title}
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
// }
