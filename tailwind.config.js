module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue for buttons and important highlights
        secondary: '#F3F4F6', // Soft background color
        accent: '#4ADE80', // Green for success messages, highlights
        darkGray: '#2D3748', // Dark gray for text
        lightGray: '#F7FAFC', // Light gray for subtle backgrounds
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
