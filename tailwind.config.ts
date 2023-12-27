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
          60: '#A8B3C7',
          80: '#6C88BC',
          100: '#223F76',
          200: '#162E59',
          400: '#102142',

          //======= not theme colors
          600: '#268BAC',
          700: '#0E7EA3',
        },

        secondary: {
          60: '#C2C9E4',
          80: '#B4C4FE',
          100: '#8DA4F6',
          200: '#7A95F5',
          400: '#6886F0',
        },

        tertiary: {
          60: '#A1BDCD',
          80: '#53AFE3',
          100: '#248EC9',
          200: '#1278B1',
          400: '#156694',
        },
        themeRed: {
          60: '#D5C1B2',
          80: '#F6B98D',
          100: '#BB4E00',
          200: '#9F4300',
          400: '#783300',
        },
        themeGreen: {
          60: '#B3C7AC',
          80: '#95F68D',
          100: '#387622',
          200: '#255A12',
          400: '#193F0C',
        },
        themeGray: {
          60: '#F4F6FA',
          80: '#B5B5B5',
          100: '#515151',
          200: '#3D3D3D',
          400: '#212121',
        },
        defultText: {
          100: '#515151',
        },
        btntext:{
          default: '#FFFFFF',
          primary: '#FFFFFF',
          secondary: '#223F76',
          tertiary: '#FFFFFF',
          themeRed: '#FFFFFF',
          themeGreen: '#FFFFFF',
          themeGray: '#FFFFFF',
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
