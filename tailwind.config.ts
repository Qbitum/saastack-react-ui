import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,jsx,md,mdx,ts,tsx}',
    './components/**/*.{js,jsx,md,mdx,ts,tsx}',
    './data/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        primary: {
          60: '#BCF3F0',
          80: '#00E6FF',
          100: '#00B2C5',
          200: '#008E9D',
          400: '#007481',
          //======= not theme colors
          600: '#268BAC',
          700: '#0E7EA3',
        },
        secondary: {
          40: '#F5FBFF',
          60: '#E5F5FF',
          80: '#CCEAFF',
          90: '#9FD8FF',
          100: '#0080EA',
          200: '#0060B0',
          400: '#004A80',

          
        },

        tertiary: {
          60: '#D8D5F7',
          80: '#B6B0F3',
          100: '#8176EE',
          200: '#5E55BA',
          400: '#48418C',
        },

        addOn: {
          100: '#F1F1E7',
        },

        themeFailure: {
          60: '#FFCBC8',
          100: '#BB4E00',
        },
        themeSuccess: {
          100: '#009D0F',
        },
        themeWarning: {
          100: '#FFC646',
        },
        themeInfo: {
          100: '#007BFF',
        },
        themeGray: {
          60: '#EBF2FF',
          65: '#D9E2ED',
          70: '#B2BAC8',
          80: '#8A98AB',
          100: '#30384C',
          200: '#1D2330',
          400: '#000000',
        },
        defultText: {
          100: '#30384C',
        },
        highlight: {
          100: '#F58E15',
        },
        btntext:{
          default: '#FFFFFF',
          primary: '#FFFFFF',
          secondary: '#FFFFFF',
          tertiary: '#FFFFFF',
          themeFailure: '#FFFFFF',
          themeSuccess: '#FFFFFF',
          themeWarning: '#FFFFFF',
          themeInfo: '#FFFFFF',
        },
        appBg: {
          80: '#F2F8FC',
          100: '#F1F8FC',
          200: '#D9E2ED',
          400: '#EAEFF0',
        },
        status: {
          cyan100: '#99F5FF',
          cyan400: '#26727B',
          red100: '#FDB4CD',
          red400: '#843651',
          yellow100: '#FFE099',
          yellow400: '#7D693A',
          blue100: '#C2CFFF',
          blue400: '#2B3B71',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in-out',
      },
    },
    fontFamily: {
      sans: [
        'var(--font-inter)',
        'Inter',
      ],
      body: [
        'Inter',
      ],
      mono: [
        'monospace',
      ],
    },
  },
};

export default config;