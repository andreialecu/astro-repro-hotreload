const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      appgray: { light: "#19191D", dark: "#101010" },
    },
  },
};
