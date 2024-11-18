/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'], // Fuente principal
      },
      fontWeight:{
        regular: '400', //regular
        semibold: '600', //semibold
      },
      colors: {
        white:'#FFFFFF',
        gray100:'#F8F8F8',
        gray200:'#D9D9D9',
        gray300:'#9E9E9E',
        gray400:'#676767',
        gray600:'#757575',
        bluegray:'#E3E8EB',
        bluegray200:'#C8D0D4',
        green:'#0FA958',
        greendark:'#388E3C',
        black:'#000000',
      },
      screens:{
        sm: "640px", // Dispositivos móviles grandes
        md: "768px", // Tablets (iPad estándar, tablets Android)
        lg: "1024px", // Laptops pequeñas 
        xl: "1280px", // Laptops grandes y monitores pequeños
      }
    },
  },
  plugins: [],
}

