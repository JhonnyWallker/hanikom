const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: "#0175ff",
      "blue-dark": "#0056F3",
      gray: "#EEEEEE",
      "gray-dark": "#B5B5B5",
      white: "#FFFFFF",
      black: "#000000",
      red: "#FF331F",
      blur: "#000000d9",
      pink: "#ff01aa"
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
