import flowbite from "flowbite-react/tailwind"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateRows: {
        // Simple 10 row grid
        '10': 'repeat(10, minmax(0, 1fr))',
      },
      borderWidth: {
        '0.5': '0.5px',
        '3': '3px',
      },
      fontSize: {
        'xxs': '0.625rem',
        '4rem': '4rem',
      },
      boxShadow: {
        line: 'inset 0 0 0 2px',
      },
      colors: {
        current: 'currentColor',
        brand: {
          'primary': '#0E6DBE',
          'secondary': '#3B91FE',
        },
        social: {
          'facebook': '#1877F2',
          'twitter': '#1DA1F2',
          'instagram': '#E4405F',
        },
        utility: {
          'white': '#FFFFFF',
          'bg': '#F2F3F8',
          'bg-product': '#E6E7EC',
          'notblack': '#414141',
          'dark': '#2B2B33',
          'black': '#000000',
          'red': '#B80000',
        },
        blue: {
          '50': '#DBDEF9',
          '100': '#B7BDF2',
          '200': '#949DEC',
          '300': '#707CE6',
          '400': '#4C5BDF',
          '500': '#283AD9',
          '600': '#202FB6',
          '700': '#1A2692',
          '800': '#131C6D',
          '900': '#0D1349',
          '950': '#060924',
        },
        turquoise: {
          '50': '#E0F3F4',
          '100': '#C1E6E8',
          '200': '#A3DADD',
          '300': '#84CDD2',
          '400': '#65C1C6',
          '500': '#46B4BB',
          '600': '#3A979D',
          '700': '#2E797D',
          '800': '#235A5E',
          '900': '#173C3F',
          '950': '#0C1E1F',
        },
        orange: {
          '50': '#FFE7DA',
          '100': '#FFCFB5',
          '200': '#FFB790',
          '300': '#FF9F6B',
          '400': '#FF8746',
          '500': '#FF6F21',
          '600': '#F05400',
          '700': '#C04300',
          '800': '#903300',
          '900': '#602200',
          '950': '#301100',
        },
        grey: {
          '50': '#E6E8EE',
          '100': '#CDD1DE',
          '200': '#B4BACD',
          '300': '#9BA3BD',
          '400': '#828CAD',
          '500': '#69759D',
          '600': '#4F5E8C',
          '700': '#36477C',
          '800': '#1E316C',
          '900': '#001960',
          '950': '#00144D',
        },
        yellow: {
          '50': '#FDF3DA',
          '100': '#FBE7B5',
          '200': '#FADC90',
          '300': '#F8D06B',
          '400': '#F6C446',
          '500': '#F4B821',
          '600': '#DCA00B',
          '700': '#B08009',
          '800': '#846007',
          '900': '#584004',
          '950': '#2C2002',
        },
        red: {
          '50': '#FFC9C9',
          '100': '#FF9292',
          '200': '#FF5C5C',
          '300': '#FF2626',
          '400': '#EE0000',
          '500': '#B80000',
          '600': '#990000',
          '700': '#7B0000',
          '800': '#5C0000',
          '900': '#3D0000',
          '950': '#1F0000',
        },
        province: {
          'province-grey': '#C9C9C9',
          'province-blue': '#003BE2',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
      },
      maxHeight: {
        'none': 'none',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
      },
      minHeight: {
        'none': 'none',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100dvh': '100dvh',
        '100svh': '100svh',
      },
      maxWidth: {
        '120': '7.5rem',
        'xxs': '16rem',
        'readable': '30ch',
        '95vh': '95vh'
      },
      minWidth: {
        'xxs': '16rem',
      },
      width: {
        '15': '3.75rem',
        '16.5': '4.25rem',
        '90': '22.5rem', // 360px
        '200': '50rem', // 800px
      },
      height: {
        '13': '3.25rem',
        '15': '3.75rem',
        '16.5': '4.25rem',
        '90': '22.5rem',
        '120': '30rem',
      },
      spacing: {
        '7.5': '30px',
        '10': '2.5rem',
        '13': '3.5rem',
        '18': '4.5rem',
        '19': '4.85rem',
        '28': '6.5rem',
        '30': '7.5rem',
        '36.5': '9.1rem',
      },
      inset: {
        '13': '3.25rem',
        '15': '3.75rem',
        '1/6': '15%',
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '2/1': '2 / 1',
        '3/1': '3 / 1',
        '4/1': '4 / 1',
        '4/3': '4 / 3',
        '8/1': '8 / 1',
        '16/9': '16 / 9',
      },
      letterSpacing: {
        '1rem': '1rem',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

