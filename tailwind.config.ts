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
          100: '#8EACE2',
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
        themeFailure: {
          60: '#EFD2CC',
          80: '#E87F34',
          100: '#BB4E00',
          200: '#9F4300',
          400: '#783300',
        },
        themeSuccess: {
          60: '#D5EFCC',
          80: '#44AB20',
          100: '#387622',
          200: '#255A12',
          400: '#193F0C',
        },
        themeWarning: {
          60: '#FFF8DA',
          80: '#BDB07B',
          100: '#F0C310',
          200: '#DBB20E',
          400: '#A68500',
        },
        themeInfo: {
          60: '#C2E4FF',
          80: '#52B4FF',
          100: '#1597FA',
          200: '#0670C2',
          400: '#00518F',
        },
        themeGray: {
          60: '#F4F6FA',
          70: '#E6E6E6',
          80: '#B5B5B5',
          100: '#515151',
          200: '#3D3D3D',
          400: '#212121',
        },
        defultText: {
          100: '#515151',
        },
        highlight: {
          100: '#F58E15',
        },
        btntext:{
          default: '#FFFFFF',
          primary: '#FFFFFF',
          secondary: '#223F76',
          tertiary: '#FFFFFF',
          themeFailure: '#FFFFFF',
          themeSuccess: '#FFFFFF',
          themeWarning: '#FFFFFF',
          themeInfo: '#FFFFFF',
        },
        appBg: {
          100: '#DADEE5',
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
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.75rem',
      'full': '9999px',
      'large': '12px',
    }
  },
};

export default config;
