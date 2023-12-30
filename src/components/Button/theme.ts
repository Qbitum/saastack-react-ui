import type { FlowbiteButtonTheme } from './Button';
import type { FlowbiteButtonGroupTheme } from './ButtonGroup';

export const buttonTheme: FlowbiteButtonTheme = {
  base: 'group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none transition-all duration-50 ease-in',
  fullSized: 'w-full',
  color: {

    primary: 'text-btntext-primary bg-primary-100 border border-transparent enabled:hover:bg-primary-200 focus:ring-4 focus:ring-primary-60 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700',
    
    secondary: 'text-btntext-secondary bg-secondary-100 border border-transparent enabled:hover:bg-secondary-200 focus:ring-4 focus:ring-secondary-60 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700',

    tertiary: 'text-btntext-tertiary bg-tertiary-100 border border-transparent enabled:hover:bg-tertiary-200 focus:ring-4 focus:ring-tertiary-60 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800',

    failure:'text-btntext-themeFailure bg-themeFailure-100 border border-transparent enabled:hover:bg-themeFailure-200 focus:ring-4 focus:ring-themeFailure-60 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900',

    success:
    'text-btntext-themeSuccess bg-themeSuccess-100 border border-transparent enabled:hover:bg-themeSuccess-200 focus:ring-4 focus:ring-themeSuccess-60 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800',

    warning:
    'text-btntext-themeWarning bg-themeWarning-100 border border-transparent enabled:hover:bg-themeWarning-200 focus:ring-4 focus:ring-themeWarning-60 dark:focus:ring-yellow-900',

    info: 'text-btntext-themeInfo bg-themeInfo-100 border border-transparent enabled:hover:bg-themeInfo-200 focus:ring-4 focus:ring-themeInfo-60 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800',

    dark: 'text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700',

    light:'text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700',
    
    blue: 'text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',

    green:
    'text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700',

    yellow:
    'text-white bg-amber-400 border border-transparent enabled:hover:bg-amber-500 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700',

    red: 'text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700',

    cyan: 'text-white bg-cyan-700 border border-border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',

    purple:
    'text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900',

    pink: 'text-white bg-pink-700 border border-transparent enabled:hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700',

    gray: 'text-white bg-gray-400 border border-transparent enabled:hover:bg-gray-600 focus:ring-4 focus:ring-gray-200',

    indigo:'text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700',

    lime: 'text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700',

    teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',

  },
  disabled: 'cursor-not-allowed opacity-50',
  isProcessing: 'cursor-wait',
  spinnerSlot: 'absolute h-full top-0 flex items-center animate-fade-in',
  spinnerLeftPosition: {
    xs: 'left-2',
    sm: 'left-3',
    md: 'left-4',
    lg: 'left-5',
    xl: 'left-6',
  },
  gradient: {
    primary: 'text-btntext-primary bg-gradient-to-b from-primary-80 via-primary-100 to-primary-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-primary-60',

    secondary: 'text-btntext-secondary bg-gradient-to-b from-secondary-80 via-secondary-100 to-secondary-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-secondary-60',

    tertiary: 'text-btntext-tertiary bg-gradient-to-b from-tertiary-80 via-tertiary-100 to-tertiary-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-tertiary-60',

    failure:
      'text-btntext-themeFailure bg-gradient-to-b from-themeFailure-80 via-themeFailure-100 to-themeFailure-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-themeFailure-60',
    success:
      'text-btntext-themeSuccess bg-gradient-to-b from-themeSuccess-80 via-themeSuccess-100 to-themeSuccess-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-themeSuccess-60',

    info: 'text-btntext-themeInfo bg-gradient-to-b from-themeInfo-80 via-themeInfo-100 to-themeInfo-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-themeInfo-60',
    warning: 'text-btntext-themeWarning bg-gradient-to-b from-themeWarning-80 via-themeWarning-100 to-themeWarning-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-themeWarning-60',
    blue: 'text-white bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
    green: 'text-white bg-gradient-to-b from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
    red: 'text-white bg-gradient-to-b from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
    yellow: 'text-white bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800',
    cyan: 'text-white bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
    pink: 'text-white bg-gradient-to-b from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
    purple:'text-white bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
    gray:'text-white bg-gradient-to-b from-themeGray-80 via-themeGray-100 to-themeGray-200 enabled:hover:bg-gradient-to-t focus:ring-4 focus:ring-themeGray-80',
    lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
    teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
  },
  gradientDuoTone: {
    cyanToBlue:
      'text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
    greenToBlue:
      'text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
    pinkToOrange:
      'text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
    purpleToBlue:
      'text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
    purpleToPink:
      'text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
    redToYellow:
      'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400',
    tealToLime:
      'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700',
  },
  inner: {
    base: 'flex items-stretch items-center transition-all duration-200',
    position: {
      none: '',
      start: 'rounded-r-none',
      middle: 'rounded-none',
      end: 'rounded-l-none',
    },
    outline: 'border border-transparent',
    isProcessingPadding: {
      xs: 'pl-8',
      sm: 'pl-10',
      md: 'pl-12',
      lg: 'pl-16',
      xl: 'pl-20',
    },
  },
  label:
    'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800',
  outline: {
    color: {
      gray: 'border border-gray-900 dark:border-white',
      primary: 'border border-primary-100 bg-white',
      default: 'border-0',
      light: '',
    },
    off: '',
    on: 'flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full',
    pill: {
      off: 'rounded-md',
      on: 'rounded-full',
    },
  },
  pill: {
    off: 'rounded-lg',
    on: 'rounded-full',
  },
  size: {
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-base px-6 py-3',
  },
};

export const buttonGroupTheme: FlowbiteButtonGroupTheme = {
  base: 'inline-flex',
  position: {
    none: 'focus:ring-2',
    start: 'rounded-r-none',
    middle: 'rounded-none border-l-0 pl-0',
    end: 'rounded-l-none border-l-0 pl-0',
  },
};
