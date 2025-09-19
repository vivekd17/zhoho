// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",        // if plain HTML
//     "./src/**/*.{js,ts,jsx,tsx}", // if React/Vite/Next
//   ],
//   theme: {
//     extend: {
//       colors: {
//         dark: {
//           dark1: "#1C1F2E",
//           dark2: "#161925",
//         },
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          dark1: "#1C1F2E",
          dark2: "#161925",
        },
      },
    },
  },
  plugins: [],
}
