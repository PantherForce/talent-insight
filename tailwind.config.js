/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "talent-waves": "url('./src/assets/img/Vector.png')",
      },
    },
  },
  plugins: [],
};
