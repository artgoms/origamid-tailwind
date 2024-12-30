/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        verde: {
          200: '#acef75',
          300: '#91EE77',
          900: '#16281F',
          950: '#0F1C15',
        },
        green: {
          300: '#91EE77',
        }
      },
      spacing: {
        22: '5.5rem'
      },
      fontSize: {
        '2xs': '.5rem'
      },
      screens: {
        xs: '320px'
      }
    },

  },
  plugins: [
    plugin(function ({addUtilities, addComponents}){
      addUtilities({
        '.text-shadow': {
          'text-shadow': '1px 1px currentColor'
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 10px currentColor'
        }
      }),
      addComponents({
        '.btn-ghost':{
          'border-radius': '9999px',
          padding: '.5rem 1rem',
          opacity: '.2',
          border: '2px solid #ccc'
        }
      })
    })
  ],
};