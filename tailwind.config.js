/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html", // Main HTML file
//     "./src/**/*.{js,ts,jsx,tsx}", // Your React or component files
//   ],
//   theme: {
//     extend: {
//       animation: {
//         "fade-in-up": "fadeInUp 0.5s ease-out", // Custom animation
//       },
//       keyframes: {
//         fadeInUp: {
//           "0%": { opacity: 0, transform: "translateY(20px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//     },
//   },
//   plugins: [],
//   mode: "jit", // Optional but speeds up builds
// };
