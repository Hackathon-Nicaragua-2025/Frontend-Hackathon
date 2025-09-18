// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primary_low: "var(--color-primary-low)",
        primary_high: "var(--color-primary-high)",
        secondary: "var(--color-secondary)",
        secondary_low: "var(--color-secondary-low)",
        secondary_high: "var(--color-secondary-high)",
        tertiary: "var(--color-tertiary)",
        tertiary_low: "var(--color-tertiary-low)",
        tertiary_high: "var(--color-tertiary-high)",
      },
      hover: {
        cursor: "var(--cursor)",
        scale: "var(--scale)",
        transition: "var(--transition)",
      },
    },
  },
  plugins: [],
};
