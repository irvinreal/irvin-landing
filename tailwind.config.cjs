/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        coloring: {
          // '0%, 100%': {
          // 	'background': '-webkit-linear-gradient(110deg, #eee, #333)',
          // 	'-webkit-background-clip': 'text',
          // 	'-webkit-text-fill-color': 'transparent',

          // },
          // '50%': {
          //   'background': '-webkit-linear-gradient(360deg, #eee, #333)',
          // 	'-webkit-background-clip': 'text',
          // 	'-webkit-text-fill-color': 'transparent',
          // },
          '0%': {
            background:
              '-webkit-linear-gradient(45deg,#442700 40%,#030303 70%,#005208 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '10%': {
            background:
              'linear-gradient(45deg,#005208 20%,#442700 50%,#030303 80%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '20%': {
            background:
              'linear-gradient(45deg,#005208 30%,#442700 60%,#030303 90%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '30%': {
            background:
              'linear-gradient(45deg,#005208 40%,#442700 70%,#030303 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '40%': {
            background:
              'linear-gradient(45deg,#030303 20%,#005208 50%,#442700 80%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '50%': {
            background:
              'linear-gradient(45deg,#030303 30%,#005208 60%,#442700 90%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '60%': {
            background:
              'linear-gradient(45deg,#030303 40%,#005208 70%,#442700 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '70%': {
            background:
              'linear-gradient(45deg,#442700 20%,#030303 50%,#005208 80%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '80%': {
            background:
              'linear-gradient(45deg,#442700 30%,#030303 60%,#005208 90%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '90%': {
            background:
              'linear-gradient(45deg,#442700 40%,#030303 70%,#005208 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          },
          '100%': {
            background:
              'linear-gradient(45deg,#005208 20%,#442700 50%,#030303 80%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          }
        },
        parpadeo: {
          '0%, 100%': { 'background-color': 'red' },
          '50%': { 'background-color': 'yellow' }
        }
      },
      animation: {
        coloring: 'coloring 1.5s ease-in-out alternate infinite',
        parpadeando: 'parpadeo'
      }
    }
  },
  plugins: []
}
