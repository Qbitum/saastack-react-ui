import type { FlowbiteSelectTheme } from './Select';

export const selectTheme: FlowbiteSelectTheme = {
  base: 'flex',
  addon: 'inline-flex items-center rounded-l-md rounded-lg border border-l-0 border-gray-900 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
  field: {
    base: 'relative w-full',
    icon: {
      base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
      svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
    },
    select: {
      base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
      withIcon: {
        on: 'pl-10',
        off: '',
      },
      withAddon: {
        on: 'rounded-lg',
        off: 'rounded-lg',
      },
      withShadow: {
        on: 'shadow-sm dark:shadow-sm-light',
        off: '',
      },
      sizes: {
        sm: 'p-2 sm:text-xs',
        md: 'p-2.5 text-sm',
        lg: 'sm:text-md p-4',
      },
      color: {
        primary:
          'text-btntext-primary bg-primary-100 border border-transparent enabled:hover:bg-primary-200 focus:ring-4 focus:ring-primary-60 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 text-xs',
    
        secondary:
          'text-btntext-secondary bg-secondary-100 border border-transparent enabled:hover:bg-secondary-200 focus:ring-4 focus:ring-secondary-60 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700 text-xs',
    
        tertiary:
          'text-btntext-tertiary bg-tertiary-100 border border-transparent enabled:hover:bg-tertiary-200 focus:ring-4 focus:ring-tertiary-60 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-xs',
    
        failure:
          'text-btntext-themeFailure bg-themeFailure-100 border border-transparent enabled:hover:bg-themeFailure-200 focus:ring-4 focus:ring-themeFailure-60 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900',
    
        success:
          'text-btntext-themeSuccess bg-themeSuccess-100 border border-transparent enabled:hover:bg-themeSuccess-200 focus:ring-4 focus:ring-themeSuccess-60 dark:bg-green-600 dark:enabled:hover:bg-green-700dark:focus:ring-green-800',
    
        warning:
          'text-btntext-themeWarning bg-themeWarning-100 border border-transparent enabled:hover:bg-themeWarning-200 focus:ring-4 focus:ring-themeWarning-60 dark:focus:ring-yellow-900',
    
        info: 'text-btntext-themeInfo bg-themeInfo-100 border border-transparent enabled:hover:bg-themeInfo-200 focus:ring-4 focus:ring-themeInfo-60 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800',
    
        dark: 'text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700',
    
        light:
          'text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700 text-xs',
    
        blue: 'text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xs',
    
        green:
          'text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700',
    
        yellow:
          'text-white bg-amber-400 border border-transparent enabled:hover:bg-amber-500 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700',
    
        red: 'text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700',
    
        cyan: 'text-white bg-cyan-700 border border-border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',
    
        purple:
          'text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900',
    
        pink: 'text-white bg-pink-700 border border-transparent enabled:hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700',
    
        gray: 
        'border-gray-400 bg-white text-gray-700 placeholder-slate-400 focus:border-gray-800 focus:ring-gray-800 dark:border-white-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
    
        indigo:
          'text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700',
    
        lime: 'text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700',
    
        teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',
      },
    },
  },
  color: {
    primary:
      'text-btntext-primary bg-primary-100 border border-transparent enabled:hover:bg-primary-200 focus:ring-4 focus:ring-primary-60 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 text-xs',

    secondary:
      'text-btntext-secondary bg-secondary-100 border border-transparent enabled:hover:bg-secondary-200 focus:ring-4 focus:ring-secondary-60 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700 text-xs',

    tertiary:
      'text-btntext-tertiary bg-tertiary-100 border border-transparent enabled:hover:bg-tertiary-200 focus:ring-4 focus:ring-tertiary-60 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 text-xs',

    failure:
      'text-btntext-themeFailure bg-themeFailure-100 border border-transparent enabled:hover:bg-themeFailure-200 focus:ring-4 focus:ring-themeFailure-60 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900',

    success:
      'text-btntext-themeSuccess bg-themeSuccess-100 border border-transparent enabled:hover:bg-themeSuccess-200 focus:ring-4 focus:ring-themeSuccess-60 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800',

    warning:
      'text-btntext-themeWarning bg-themeWarning-100 border border-transparent enabled:hover:bg-themeWarning-200 focus:ring-4 focus:ring-themeWarning-60 dark:focus:ring-yellow-900',

    info: 'text-btntext-themeInfo bg-themeInfo-100 border border-transparent enabled:hover:bg-themeInfo-200 focus:ring-4 focus:ring-themeInfo-60 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800',

    dark: 'text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700',

    light:
      'text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700 text-xs',

    blue: 'text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xs',

    green:
      'text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700',

    yellow:
      'text-white bg-amber-400 border border-transparent enabled:hover:bg-amber-500 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700',

    red: 'text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700',

    cyan: 'text-white bg-cyan-700 border border-border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',

    purple:
      'text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900',

    pink: 'text-white bg-pink-700 border border-transparent enabled:hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700',

    gray: '',
    // 'border-gray-400 bg-white text-gray-700 placeholder-slate-400 focus:border-gray-400 focus:ring-gray-400 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',

    indigo:
      'text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700',

    lime: 'text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700',

    teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',
  },
};
