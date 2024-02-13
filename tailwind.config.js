/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "modal-texture": "url('/pexels-pixabay-235985.jpg')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-faster": "pulse 1s cubic-bezier(0.4, 0, 0.6, 4) infinite",
      },
      backgroundOpacity: {
        10: "0.1",
        50: "0.5",
        95: "0.95",
      },
    },
  },
  plugins: [],
};
