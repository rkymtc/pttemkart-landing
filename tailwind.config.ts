/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1E',
        secondary: '#D9D9D9',
      },
      fontFamily: {
        inter: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
