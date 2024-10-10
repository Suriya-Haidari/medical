// {
//   "extends": "next/core-web-vitals",
//   "rules": {
//     "react-hooks/exhaustive-deps": "off", // Disable exhaustive-deps rule
//     "react/prop-types": "off", // Disable prop-types rule if you're using TypeScript or don't need it
//     "no-console": "off", // Disable the no-console rule
//     "next/no-img-element": "off", // Disable the next image element rule
//     "react/no-unescaped-entities": "off", // Disable unescaped entities rule
//     "@typescript-eslint/no-unused-vars": "off", // Disable unused variables rule for TypeScript
//     "@typescript-eslint/no-explicit-any": "off", // Disable explicit any type warning
//     "@typescript-eslint/no-empty-function": "off", // Disable empty function warning
//     "@typescript-eslint/no-empty-interface": "off" // Disable empty interface warning

//   },
// {
//   "eslint":{
//     ignoreDuringBuilds:true,
//   }
// }
// }

// {
//   "extends": "next/core-web-vitals"
// }
/** @type {import('next').NextConfig} */

// const nextConfig = {
//   root: true,
//   extends: "next",
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// module.exports = nextConfig;

module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "next/no-img-element": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
};
