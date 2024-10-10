// "use client";
// import { useState } from "react";
// import SearchBar from "./SearchBar";

// const Home = () => {
//   const [results, setResults] = useState<{ name: string }[]>([]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "2rem",
//       }}
//     >
//       <SearchBar setResults={setResults} />
//       {results.length > 0 && (
//         <ul>
//           {results.map((result, index) => (
//             <li key={index}>{result.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Home;
