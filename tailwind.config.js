/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Kestrel Works Brand Colors
        brand: {
          red: '#B64F2F',      // Reddish brown primary
          grey: '#333A41',      // Dark grey
          'red-light': '#C65A3A',
          'red-dark': '#A04429',
          'grey-light': '#4A5158',
          'grey-dark': '#282E34',
        },
        primary: {
          50: '#fef5f3',
          100: '#fde9e6',
          200: '#fbd7d1',
          300: '#f7b8ae',
          400: '#f0917f',
          500: '#B64F2F',     // Brand red
          600: '#A04429',     // Darker red
          700: '#8a3826',
          800: '#743325',
          900: '#5d2a1e',
          950: '#3f1810',
        },
        dark: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9dade',
          300: '#b8bcc4',
          400: '#9196a4',
          500: '#747989',
          600: '#5e6170',
          700: '#4d4f5b',
          800: '#333A41',     // Brand grey
          900: '#282E34',     // Darker grey
          950: '#1e1d20',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 