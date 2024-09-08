/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "hero-image": "20px -50px 70px rgb(0,0,0,0.35)",
      },
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        "light-peach": "#ffad9b",
        "dark-gray": "#333136",
        "light-gray": "#f1f3f5",
      },
      fontSize: {
        headingL: [
          "3rem",
          {
            lineHeight: "3rem",
            letterSpacing: "0rem",
            fontWeight: 500,
          },
        ],

        headingM: [
          "2.5rem",
          {
            lineHeight: "3rem",
            letterSpacing: "2px",
            fontWeight: 500,
          },
        ],
        headingS: [
          "1.25rem",
          {
            lineHeight: "1.625rem",
            letterSpacing: "5px",
            fontWeight: 500,
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.625rem",
            fontWeight: 400,
          },
        ],
        MobileHeadingL: [
          "2rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "0rem",
            fontWeight: 500,
          },
        ],
        MobileHeadingM: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "0rem",
            fontWeight: 500,
          },
        ],
        MobileBody: [
          "0.9375rem",
          {
            lineHeight: "1.625rem",
            fontWeight: 400,
          },
        ],
      },
    },
  },
  plugins: [],
};
