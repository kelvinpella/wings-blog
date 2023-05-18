/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ghost-white": "#F4F4F5",
        lavender: "#E8E8EA",
        "royal-blue": "#4B6BFB",
        manatee: "#97989F",
      },
      spacing: {
        featuredHeight: "40vh",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      backgroundImage: {
        featuredBg:
          "linear-gradient(0deg, rgba(20, 22, 36, 0.4), rgba(20, 22, 36, 0.4)), url('/images/featuredimage.png')",
      },
      gridTemplateColumns: {
        authorCol: "auto auto 1fr",
        resultCols: "auto 1fr",
      },
    },
  },
  plugins: [],
};
