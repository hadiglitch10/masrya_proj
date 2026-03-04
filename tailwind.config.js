/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1628",
        accent: "#C9A84C",
        "primary-soft": "#111d33",
        "primary-muted": "#101623"
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

