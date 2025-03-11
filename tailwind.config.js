/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        messiri: ["El Messiri", "sans-serif"],
      },
      textIndent: {
        4: "1rem",   // Equivalent to Tailwind spacing scale (4 * 0.25rem)
        8: "2rem",   // Equivalent to Tailwind spacing scale (8 * 0.25rem)
        12: "3rem",  // Custom indent values
      },
    },
  },
  plugins: [],
}