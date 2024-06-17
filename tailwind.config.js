/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      colors: {
        // beige: "#FDECBE",
        // dark_beige: "#FBD570",
        dark_blu: "#222B45",
        orange: "#E25525",
        yellow_orange: "#F3A548",
        browny: "#802010",
        /*new colors*/
        blue: "#222B45",
        dark_green: "#333F30",
        light_green: "#627A3F",
        dark_beige: "#C2D379",
        beige: "#FBFFE6",
        light_brown: "#D1BA79",
        white: "#FFFFFF",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
