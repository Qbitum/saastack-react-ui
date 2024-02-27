import type { FlowbiteTextInputTheme } from './TextInput';

export const textInputTheme: FlowbiteTextInputTheme = {
  base: 'flex',
  addon:
    'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
  field: {
    base: 'relative w-full',
    icon: {
      base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
      svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
    },
    rightIcon: {
      base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
      svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
    },
    input: {
      base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
      sizes: {
        sm: 'p-2 sm:text-xs',
        md: 'p-2.5 text-sm',
        lg: 'sm:text-md p-4',
      },
      colors: {
        gray: 'border-gray-400 bg-white text-gray-700 placeholder-slate-400 dark:border-white-400 dark:bg-white-100 dark:focus:border-white-500 dark:focus:ring-white-500',
        
        info: 'border-themeInfo-100 bg-themeInfo-60 text-defultText placeholder-themeInfo-80 focus:border-themeInfo-200 focus:ring-themeInfo-80 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
        failure:
          'border-themeFailure-100 bg-themeFailure-60 text-defultText placeholder-themeFailure-80 focus:border-themeFailure-200 focus:ring-themeFailure-80 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
        warning:
          'border-themeWarning-100 bg-themeWarning-60 text-defultText placeholder-themeWarning-80 focus:border-themeWarning-200 focus:ring-themeWarning-80 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
        success:
          'border-themeSuccess-100 bg-themeSuccess-60 text-defultText placeholder-themeSuccess-80 focus:border-themeSuccess-200 focus:ring-themeSuccess-80 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',

        secondary: 'border-secondary-100 bg-white text-defultText placeholder-secondary-80 focus:border-secondary-200 focus:ring-secondary-60 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
      },
      withRightIcon: {
        on: 'pr-10',
        off: '',
      },
      withIcon: {
        on: 'pl-10',
        off: '',
      },
      withAddon: {
        on: 'rounded-r-lg',
        off: 'rounded-lg',
      },
      withShadow: {
        on: 'shadow-sm dark:shadow-sm-light',
        off: '',
      },
    },
  },
};
