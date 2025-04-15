// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/tailwind-breakpoint-debugger/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Use rem for consistency
        nav: "100rem",
        "3xl": "122.5rem", // 1960px
        "4xl": "160rem", // 2560px
      },
    },
  },
  plugins: [],
};
