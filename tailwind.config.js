/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#5B2C2F',
        coral: '#C97F6B',
        terracotta: '#D6A292',
        peach: '#F3D6C6',
        charcoal: '#2E2E2E',
        sage: '#A4B7B3',
        olive: '#647D73',
      },
      backgroundImage: {
        'peach-terracotta': 'linear-gradient(to bottom right, #F3D6C6, #D6A292)',
        'coral-terracotta': 'linear-gradient(to bottom right, #C97F6B, #D6A292)',
        'sage-olive': 'linear-gradient(to bottom right, #A4B7B3, #647D73)',   
      },
    },
  },
  plugins: [],
}

