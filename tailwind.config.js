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
        primary: "#0D1B2A",
        secondary: "#1A2B3C",
        accent: "#C8A951",
        "primary-soft": "#1A2B3C",
        "primary-muted": "#162535"
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 45px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
