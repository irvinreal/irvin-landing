/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        coloring: {
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
        // coloringDark: {
        //   '0%': {
        //     background:
        //       '-webkit-linear-gradient(45deg,#969696 35%,#FFFFFF 60%,#A0A0A0 100%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '10%': {
        //     background:
        //       'linear-gradient(45deg,#969696 20%,#FFFFFF 45%,#A0A0A0 80%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '20%': {
        //     background:
        //       'linear-gradient(45deg,#969696 30%,#FFFFFF 55%,#A0A0A0 90%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '30%': {
        //     background:
        //       'linear-gradient(45deg,#969696 40%,#FFFFFF 70%,#A0A0A0 100%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '40%': {
        //     background:
        //       'linear-gradient(45deg,#FFFFFF 20%,#A0A0A0 50%,#969696 80%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '50%': {
        //     background:
        //       'linear-gradient(45deg,#FFFFFF 30%,#A0A0A0 60%,#969696 90%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '60%': {
        //     background:
        //       'linear-gradient(45deg,#FFFFFF 40%,#A0A0A0 70%,#969696 100%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '70%': {
        //     background:
        //       'linear-gradient(45deg,#969696 20%,#FFFFFF 50%,#A0A0A0 80%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '80%': {
        //     background:
        //       'linear-gradient(45deg,#969696 25%,#FFFFFF 50%,#A0A0A0 90%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '90%': {
        //     background:
        //       'linear-gradient(45deg,#969696 35%,#FFFFFF 60%,#A0A0A0 100%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   },
        //   '100%': {
        //     background:
        //       'linear-gradient(45deg,#D3D3D3 20%,#969696 50%,#FFFFFF 80%)',
        //     // '-webkit-background-clip': 'text',
        //     '-webkit-text-fill-color': 'transparent'
        //   }
        // },
        coloringDark: {
          from: {
            background: 'linear-gradient(45deg,#969696 30%,#FFFFFF 85%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            opacity: 0
          },
          to: {
            background: 'linear-gradient(45deg,#969696 30%,#FFFFFF 85%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
          }
        },
        stnApear: {
          '0%': {
            // display: 'none',
            transform: 'translateX(60px)'
          },
          '100%': {
            display: 'flex',
            transform: 'translateX(0px)'
          }
        },
        desapearLeft: {
          to: {
            transform: 'translateX(-100px)',
            opacity: 0
          }
        },
        desapearDown: {
          '60%': {
            transform: 'translateY(20px)'
          },
          '80%': {
            transform: 'scale(.3)'
          },
          '100%': {
            opacity: 0
          }
        },
        apearLeft: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        coloring: 'coloring 1.5s ease-in-out alternate infinite',
        coloringDark: 'coloringDark 1.5s ease-in-out forwards',
        parpadeando: 'parpadeo',
        desapearLeft: 'desapearLeft .3s ease-in-out forwards',
        apearLeft: 'apearLeft 1s ease-out alternate forwards',
        desapearDown: 'desapearDown .5s ease-in-out forwards'
      }
    }
  },
  plugins: []
}
